# Estrutura Hexagonal - Angular + Backend

Estrutura para aplicação Angular (frontend) com backend separado usando Arquitetura Hexagonal.

---

## 1. Estrutura de Diretórios (Monorepo)

```
project/
├── packages/
│   ├── shared/                  # Domain compartilhado
│   │   ├── domain/
│   │   │   └── types/
│   │   │       └── user.ts
│   │   └── ports/
│   │       └── index.ts
│   │
│   ├── backend/                  # Backend (FastAPI/Express)
│   │   └── src/
│   │       └── ...
│   │
│   └── frontend/                  # Angular App
│       ├── src/
│       │   ├── domain/
│       │   │   └── types/
│       │   │       └── user.ts
│       │   ├── application/
│       │   │   ├── services/
│       │   │   │   └── user.service.ts
│       │   │   └── facades/
│       │   │       └── user.facade.ts
│       │   ├── ports/
│       │   │   ├── input/
│       │   │   │   └── user.port.ts
│       │   │   └── output/
│       │   │       └── api.port.ts
│       │   ├── adapters/
│       │   │   ├── api/
│       │   │   │   └── user.api.ts
│       │   │   └── storage/
│       │   │       └── local-storage.adapter.ts
│       │   ├── core/              # Angular core modules
│       │   ├── shared/             # Shared components
│       │   ├── features/
│       │   │   └── users/
│       │   │       ├── components/
│       │   │       └── pages/
│       │   ├── app.component.ts
│       │   ├── app.config.ts
│       │   └── main.ts
│       ├── angular.json
│       ├── package.json
│       └── tsconfig.json
│
├── package.json
└── README.md
```

---

## 2. Frontend: Exemplo - Domain Types

```typescript
// domain/types/user.ts
export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  isActive: boolean;
}

export interface CreateUserRequest {
  email: string;
  name: string;
}
```

---

## 3. Frontend: Exemplo - Port (Output Interface)

```typescript
// ports/output/api.port.ts
import { Observable } from "rxjs";
import { User, CreateUserRequest } from "../../domain/types/user";

export interface UserApiPort {
  getAll(): Observable<User[]>;
  getById(id: string): Observable<User>;
  create(request: CreateUserRequest): Observable<User>;
  delete(id: string): Observable<void>;
}
```

---

## 4. Frontend: Exemplo - Adapter (API Implementation)

```typescript
// adapters/api/user.api.ts
import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { User, CreateUserRequest } from "../../domain/types/user";
import { UserApiPort } from "../../ports/output/api.port";

@Injectable({ providedIn: "root" })
export class UserApiAdapter implements UserApiPort {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = "http://localhost:3000/api";

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  getById(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`);
  }

  create(request: CreateUserRequest): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users`, request);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/users/${id}`);
  }
}
```

---

## 5. Frontend: Exemplo - Application Service

```typescript
// application/services/user.service.ts
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

import { User, CreateUserRequest } from "../../domain/types/user";
import { UserApiPort } from "../../ports/output/api.port";

@Injectable({ providedIn: "root" })
export class UserService {
  private readonly api = inject(UserApiPort);

  getAll(): Observable<User[]> {
    return this.api.getAll();
  }

  getById(id: string): Observable<User> {
    return this.api.getById(id);
  }

  create(request: CreateUserRequest): Observable<User> {
    return this.api.create(request);
  }

  delete(id: string): Observable<void> {
    return this.api.delete(id);
  }
}
```

---

## 6. Frontend: Exemplo - Facade (para Component Store / Signals)

```typescript
// application/facades/user.facade.ts
import { Injectable, inject, signal, computed } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { finalize, tap } from "rxjs/operators";

import { User, CreateUserRequest } from "../../domain/types/user";
import { UserService } from "../services/user.service";

@Injectable({ providedIn: "root" })
export class UserFacade {
  private readonly userService = inject(UserService);

  // Signals
  private _users = signal<User[]>([]);
  private _loading = signal(false);
  private _error = signal<Error | null>(null);

  // Computed
  readonly users = this._users.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  loadUsers() {
    this._loading.set(true);
    this._error.set(null);

    this.userService
      .getAll()
      .pipe(finalize(() => this._loading.set(false)))
      .subscribe({
        next: (users) => this._users.set(users),
        error: (error) => this._error.set(error),
      });
  }

  createUser(request: CreateUserRequest) {
    this._loading.set(true);
    this._error.set(null);

    this.userService
      .create(request)
      .pipe(
        tap((user) => this._users.update((users) => [...users, user])),
        finalize(() => this._loading.set(false))
      )
      .subscribe({
        error: (error) => this._error.set(error),
      });
  }

  deleteUser(id: string) {
    this._loading.set(true);
    this._error.set(null);

    this.userService
      .delete(id)
      .pipe(
        tap(() => this._users.update((users) => users.filter((u) => u.id !== id))),
        finalize(() => this._loading.set(false))
      )
      .subscribe({
        error: (error) => this._error.set(error),
      });
  }
}
```

---

## 7. Frontend: Exemplo - Componente

```typescript
// features/users/pages/user-list.page.ts
import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserFacade } from "../../../application/facades/user.facade";

@Component({
  selector: "app-user-list",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="user-list">
      <button (click)="facade.loadUsers()" [disabled]="facade.loading()">
        Load Users
      </button>

      @if (facade.loading()) {
        <p>Loading...</p>
      }

      @if (facade.error()) {
        <p class="error">{{ facade.error()?.message }}</p>
      }

      <ul>
        @for (user of facade.users(); track user.id) {
          <li>
            {{ user.name }} - {{ user.email }}
            <button (click)="facade.deleteUser(user.id)">Delete</button>
          </li>
        }
      </ul>
    </div>
  `,
})
export class UserListPage implements OnInit {
  readonly facade = inject(UserFacade);

  ngOnInit() {
    this.facade.loadUsers();
  }
}
```

---

## 8. Frontend: Exemplo - Configuração (app.config.ts)

```typescript
// app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideHttpClient } from "@angular/common/http";
import { provideRouter } from "@angular/router";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter([]),
  ],
};
```

---

## 9. Estrutura de Arquitetura no Angular

```
┌─────────────────────────────────────────────────────────┐
│                  ANGULAR FRONTEND                       │
│                                                         │
│  ┌─────────────────────────────────────────────────┐     │
│  │             FEATURES                          │     │
│  │      Pages / Components                       │     │
│  └────────────────────┬────────────────────────┘     │
│                     │                                  │
│  ┌─────────────────▼──────────────────────────┐       │
│  │           APPLICATION                      │       │
│  │        Services / Facades                 │       │
│  └────────────────────┬──────────────────────┘       │
│                       │                                 │
│  ┌───────────────────▼────────────────────┐         │
│  │              PORTS                       │         │
│  │       (Interfaces abstratas)             │         │
│  └────────────────────┬──────────────────────┘         │
│                       │                                 │
│  ┌───────────────────▼────────────────────┐         │
│  │            ADAPTERS                   │         │
│  │    HTTP Client (implementa Port)   │         │
│  └────────────────────────────────────┘         │
└─────────────────────────────────────────────────────────┘
```

---

## 10. Resumo

| Camada | Local | Responsabilidade |
|--------|-------|----------------|
| Domain | `domain/types/` | Types e interfaces |
| Ports | `ports/` | Interfaces abstratas |
| Application | `application/` | Services, Facades |
| Adapters | `adapters/` | HTTP implementations |
| Features | `features/` | Componentes, Páginas |

---

## 11. Diferenças React vs Angular

| Aspecto | React | Angular |
|--------|-------|--------|
| State Management | useState, useReducer, Zustand | Signals, Facade |
| HTTP | Axios, Fetch | HttpClient (built-in) |
| DI | manual ou libraries | Built-in @Injectable |
| Observables | RxJS (opcional) | RxJS (nativo) |