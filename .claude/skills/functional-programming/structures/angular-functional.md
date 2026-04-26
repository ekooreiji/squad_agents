# Programação Funcional no Angular com RxJS

Padrões e técnicas de FP para aplicações Angular.

---

## 1. Observables como Estruturas Funcionais

### Observable Basic

```typescript
import { Observable, of, from, fromEvent } from "rxjs";

// Observable é uma estrutura lazy e funcional
const numbers$ = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.complete();
});

// ✗ Imperativo
from([1, 2, 3]).subscribe(x => console.log(x));

// ✓ Funcional - opera sobre o stream
of(1, 2, 3).pipe(
    tap(x => console.log(x))  // side effect
);
```

### Functor (map)

```typescript
import { of } from "rxjs";
import { map, filter } from "rxjs/operators";

// map - Functor
of(1, 2, 3, 4, 5).pipe(
    map(x => x * 2)
);
// Output: 2, 4, 6, 8, 10

// filter
of(1, 2, 3, 4, 5).pipe(
    filter(x => x % 2 === 0)
);
// Output: 2, 4
```

---

## 2. Operadores Funcionais

### map + filter + reduce

```typescript
import { of } from "rxjs";
import { map, filter, reduce, scan } from "rxjs/operators";

const numbers$ = of(1, 2, 3, 4, 5);

// map - transformação
numbers$.pipe(
    map(x => x * 2)
);

// filter - seleção
numbers$.pipe(
    filter(x => x > 2)
);

// scan - reduce com estado
numbers$.pipe(
    scan((acc, x) => acc + x, 0)
);
// Output: 1, 3, 6, 10, 15

// reduce - acumulador final
numbers$.pipe(
    reduce((acc, x) => acc + x, 0)
);
// Output: 15
```

### Composition (pipe)

```typescript
import { of } from "rxjs";
import { map, filter, tap } from "rxjs/operators";

// pipe - composition
of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
    filter(x => x > 5),           // Filtra > 5
    map(x => x * 2),              // Dobra
    filter(x => x % 2 === 0),    // Só pares
    map(x => x + 10)              // Adiciona 10
);
// Output: 22, 26, 30
```

---

## 3. Funções Puras com RxJS

### Service Funcional

```typescript
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, filter } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class UserService {
    // Pura - mesmo input = mesmo output
    getActiveUsers(users: User[]): Observable<User[]> {
        return from(users).pipe(
            filter(user => user.active),
            scan((acc, user) => [...acc, user], [])
        );
    }

    // Pura
    getUserNames(users: User[]): Observable<string[]> {
        return this.getActiveUsers(users).pipe(
            map(user => user.name)
        );
    }
}
```

### Pipeable Operators

```typescript
import { pipe } from "rxjs";
import { map, filter } from "rxjs/operators";

// Criar operator customizado
const double = pipe(
    map(x => x * 2)
);

const onlyEven = pipe(
    filter(x => x % 2 === 0)
);

// Composition
of(1, 2, 3, 4, 5).pipe(
    double,
    onlyEven
);
// Output: 4

// Operator complexo
const processNumbers = pipe(
    filter(x => x > 2),
    map(x => x * 2),
    map(x => x + 10)
);

of(1, 2, 3, 4, 5).pipe(processNumbers);
// Output: 18, 20
```

---

## 4. Higher-Order Observables

### flatten Observables

```typescript
import { of, from } from "rxjs";
import { switchMap, mergeMap, concatMap, exhaustMap } from "rxjs/operators";

// switchMap - cancela observable anterior
of(1, 2, 3).pipe(
    switchMap(id => fetchUser(id))
);

// mergeMap - executa em paralelo
of(1, 2, 3).pipe(
    mergeMap(id => fetchUser(id))
);

// concatMap - executa em sequência
of(1, 2, 3).pipe(
    concatMap(id => fetchUser(id))
);
```

### flatMap (mergeMap)

```typescript
// flatMap é alias para mergeMap
of(1, 2, 3).pipe(
    mergeMap(id =>
        of({ id, name: `User ${id}` })
    )
);

// Nested arrays
of([1, 2], [3, 4], [5, 6]).pipe(
    mergeMap(arr => from(arr)),
    toArray()
);
// Output: [1, 2, 3, 4, 5, 6]
```

---

## 5. Patterns Funcionais

### Maybe Monad (Optional)

```typescript
import { of, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

// Maybe - valor opcional
const findUser = (users: User[], id: string): Observable<User> =>
    from(users).pipe(
        filter(user => user.id === id),
        catchError(() => EMPTY)
    );

// Either - sucesso ou falha
const findUserEither = (users: User[], id: string): Observable<User | null> =>
    from(users).pipe(
        filter(user => user.id === id),
        map(user => user as User | null),
        catchError(() => of(null))
    );
```

### Lazy Evaluation

```typescript
import { defer, of } from "rxjs";

// defer - evaluation lazy
const lazyValue$ = defer(() => {
    console.log("Evaluating...");
    return of(42);
});

// Só imprime quando alguém subscribe
lazyValue$.subscribe();

// cold observable - cada subscriber executa novamente
const cold$ = new Observable(subscriber => {
    console.log("Cold observable");
    subscriber.next(Math.random());
});
```

---

## 6. Error Handling Funcional

### catchError + throwError

```typescript
import { of } from "rxjs";
import { map, catchError, throwError } from "rxjs/operators";

// catchError - trata erros funcionalmente
const safeFetch = (url: string): Observable<Data> =>
    from(fetch(url)).pipe(
        switchMap(response =>
            response.ok
                ? of(response.json())
                : throwError(() => new Error(`HTTP ${response.status}`))
        ),
        catchError(error => {
            console.error(error);
            return of({ error: error.message });
        })
    );
```

---

## 7. State Management Funcional

### BehaviorSubject como Estado

```typescript
import { BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

// Estado funcional
class UserStore {
    private _users$ = new BehaviorSubject<User[]>([]);

    readonly users$ = this._users$.asObservable();

    // Imutabilidade
    addUser(user: User) {
        const current = this._users$.getValue();
        this._users$.next([...current, user]);
    }

    // Selector
    readonly activeUsers$ = this.users$.pipe(
        map(users => users.filter(u => u.active))
    );
}
```

### Service com Reducer Pattern

```typescript
// Actions
type Action =
    | { type: "ADD_USER"; payload: User }
    | { type: "REMOVE_USER"; payload: string }
    | { type: "SET_USERS"; payload: User[] };

// Reducer
const userReducer = (state: User[], action: Action): User[] => {
    switch (action.type) {
        case "ADD_USER":
            return [...state, action.payload];
        case "REMOVE_USER":
            return state.filter(u => u.id !== action.payload);
        case "SET_USERS":
            return action.payload;
        default:
            return state;
    }
};

// Store
@Injectable()
class UserStore {
    private _users$ = new BehaviorSubject<User[]>([]);

    readonly users$ = this._users$.asObservable();

    dispatch(action: Action) {
        const current = this._users$.getValue();
        const next = userReducer(current, action);
        this._users$.next(next);
    }
}
```

---

## 8. Estrutura de Projeto FP

```
src/
├── domain/
│   ├── models/           # Types/Interfaces
│   └── selectors/        # Selectors
├── store/
│   ├── state/          # BehaviorSubjects
│   ├── reducers/       # Reducers
│   └── actions/        # Action creators
├── services/
│   ├── api/           # Services funcionais
│   └── repositories/  # Repositories
├── operators/
│   └── custom.ts      # Operators customizados
└── utils/
    ├── fp/           # Helpers
    └── rx/           # RxJS helpers
```

---

## 9. Checklist FP Angular

- [ ] Observables ao invés de Promises?
- [ ] Operadores funcionais (map, filter, etc)?
- [ ] Imutabilidade no estado?
- [ ] Reducers para updates?
- [ ] Selectors para extrair dados?
- [ ] pipe para composition?
- [ ] Error handling funcional?
- [ ] Operators customizados para lógica reutilizável?