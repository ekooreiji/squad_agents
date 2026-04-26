# Exemplo Completo - Angular Hexagonal

Exemplo de implementação de Arquitetura Hexagonal no Angular.

---

## 1. Estrutura

```
src/
├── domain/
│   └── types/
│       └── user.ts           # Types
├── application/
│   ├── services/
│   │   └── user.service.ts  # Service (use case)
│   └── facades/
│       └── user.facade.ts   # Facade (state)
├── ports/
│   └── user.port.ts         # Interface
├── adapters/
│   └── api/
│       └── user.api.ts     # HTTP implementation
├── features/
│   └── users/
│       └── user-list/     # Components
├── app.component.ts
└── app.config.ts
```

---

## 2. Domain Types

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

## 3. Port

```typescript
// ports/user.port.ts
import { Observable } from "rxjs";
import { User, CreateUserRequest } from "../domain/types/user";

export interface UserPort {
  getUsers(): Observable<User[]>;
  getUser(id: string): Observable<User>;
  createUser(request: CreateUserRequest): Observable<User>;
  deleteUser(id: string): Observable<void>;
}
```

---

## 4. Adapter

```typescript
// adapters/api/user.api.ts
import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { User, CreateUserRequest } from "../../domain/types/user";
import { UserPort } from "../../ports/user.port";

@Injectable({ providedIn: "root" })
export class UserApiAdapter implements UserPort {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = "http://localhost:3000/api";

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${id}`);
  }

  createUser(request: CreateUserRequest): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users`, request);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/users/${id}`);
  }
}
```

---

## 5. Application Service

```typescript
// application/services/user.service.ts
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

import { User, CreateUserRequest } from "../../domain/types/user";
import { UserPort } from "../../ports/user.port";

@Injectable({ providedIn: "root" })
export class UserService {
  private readonly port = inject(UserPort); // Injected via DI

  getUsers(): Observable<User[]> {
    return this.port.getUsers();
  }

  getUser(id: string): Observable<User> {
    return this.port.getUser(id);
  }

  createUser(request: CreateUserRequest): Observable<User> {
    return this.port.createUser(request);
  }

  deleteUser(id: string): Observable<void> {
    return this.port.deleteUser(id);
  }
}
```

---

## 6. Facade (State Management)

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

  // Public
  readonly users = this._users.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  loadUsers() {
    this._loading.set(true);
    this._error.set(null);

    this.userService
      .getUsers()
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
      .createUser(request)
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
      .deleteUser(id)
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

## 7. Component

```typescript
// features/users/user-list.component.ts
import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserFacade } from "../../application/facades/user.facade";

@Component({
  selector: "app-user-list",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
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
export class UserListComponent implements OnInit {
  readonly facade = inject(UserFacade);

  ngOnInit() {
    this.facade.loadUsers();
  }
}
```

---

## 8. App Config

```typescript
// app.config.ts
import { ApplicationConfig } from "@angular/core";
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient()],
};
```

---

## 9. Resumo

| Camada | Local | Responsabilidade |
|--------|-------|------------------|
| Domain | `domain/types/` | Types |
| Ports | `ports/` | Interface (abstrata) |
| Application | `application/` | Services + Facades |
| Adapters | `adapters/` | HTTP Implementation |
| Features | `features/` | Components |