# Programação Funcional no React

Padrões e técnicas de FP para aplicações React.

---

## 1. Componentes Funcionais

### Componente Básico

```tsx
// ✗ Com classe (imperativo)
class Counter extends React.Component {
    state = { count: 0 };
    
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };
    
    render() {
        return (
            <button onClick={this.increment}>
                Count: {this.state.count}
            </button>
        );
    }
}

// ✓ Funcional (declarativo)
function Counter() {
    const [count, setCount] = useState(0);
    
    const increment = () => setCount(c => c + 1);
    
    return (
        <button onClick={increment}>
            Count: {count}
        </button>
    );
}

// ✓ Com hook customizado
function Counter() {
    const { count, increment } = useCounter();
    
    return (
        <button onClick={increment}>
            Count: {count}
        </button>
    );
}
```

### Hook Customizado (FP)

```tsx
// Hook FP com closure
function useCounter() {
    const [count, setCount] = useState(0);
    
    const increment = () => setCount(c => c + 1);
    const decrement = () => setCount(c => c - 1);
    const reset = () => setCount(0);
    
    return {
        count,
        increment,
        decrement,
        reset,
    };
}

// Hook com reducer (mais FP)
function useCounter() {
    const [count, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case 'INCREMENT':
                    return state + 1;
                case 'DECREMENT':
                    return state - 1;
                case 'RESET':
                    return 0;
                default:
                    return state;
            }
        },
        0
    );
    
    return {
        count,
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' }),
        reset: () => dispatch({ type: 'RESET' }),
    };
}
```

---

## 2. Funções Puras em Componentes

### Componente Puro

```tsx
// Pura - sempre o mesmo output para o mesmo input
interface UserProps {
    name: string;
    age: number;
}

const User: React.FC<UserProps> = ({ name, age }) => (
    <div>
        <span>{name}</span>
        <span>{age} years old</span>
    </div>
);

// Uso
<User name="John" age={30} /> // Sempre igual
```

### memo para Performance

```tsx
// ✗ Sem memo - re-renderiza sempre
const UserList = ({ users }) => (
    <ul>
        {users.map(u => <User key={u.id} {...u} />)}
    </ul>
);

// ✓ Com memo - só re-renderiza se users mudar
const UserList = React.memo(({ users }) => (
    <ul>
        {users.map(u => <User key={u.id} {...u} />)}
    </ul>
));
```

---

## 3. Imutabilidade com useState

### Update Imutável

```tsx
// ✗ Mutável - problema!
const [user, setUser] = useState({ name: "John", age: 30 });

const updateName = (name) => {
    user.name = name;        // Muta estado diretamente!
    setUser(user);
};

// ✓ Imutável - cria novo objeto
const updateName = (name) => {
    setUser(prev => ({ ...prev, name }));  // Novo objeto
};

// ✓ Arrays - adiciona/remover
const addItem = (item) => {
    setItems(prev => [...prev, item]);  // Adiciona
};

const removeItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));  // Remove
};

// ✓ Arrays - atualiza
const updateItem = (id, updates) => {
    setItems(prev =>
        prev.map(item =>
            item.id === id ? { ...item, ...updates } : item
        )
    );
};
```

---

## 4. Composition com Componentes

### Composição de Componentes

```tsx
// Wrapper funcional
const withWrapper = (Component) => ({ children, ...props }) => (
    <div className="wrapper">
        <Component {...props}>
            {children}
        </Component>
    </div>
);

// Usage
const Card = ({ children }) => (
    <div className="card">{children}</div>
);

const TitledCard = withWrapper(Card);

// Container/Presentational
const Container = ({ children }) => (
    <div className="container">{children}</div>
);

const Presentational = ({ data }) => (
    <div>{data.map(item => <Item key={item.id} {...item} />)}</div>
);

// Composed
const DataCard = ({ data }) => (
    <Container>
        <Presentational data={data} />
    </Container>
);
```

### Render Props (FP)

```tsx
// Render prop funcional
const MouseTracker = ({ render }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    
    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };
    
    return render(position);
};

// Uso
<MouseTracker
    render={({ x, y }) => (
        <div>
            Mouse at ({x}, {y})
        </div>
    )}
/>
```

---

## 5. Higher-Order Functions

### useMemo (map)

```tsx
const numbers = [1, 2, 3, 4, 5];

// map funcional
const doubled = useMemo(
    () => numbers.map(n => n * 2),
    [numbers]
);
```

### useCallback (high-order)

```tsx
const MyComponent = ({ items }) => {
    // ✗ Sem useCallback - nova função a cada render
    const handleClick = (item) => {
        console.log(item);
    };
    
    // ✓ Com useCallback - mesma função
    const handleClick = useCallback(
        (item) => console.log(item),
        []  // dependencies
    );
    
    return items.map(item => (
        <button key={item.id} onClick={() => handleClick(item)}>
            {item.name}
        </button>
    ));
};
```

---

## 6. Fluxo de Dados Funcional

### Fluxo Unidirecional

```tsx
// Estado -> Ação -> Reducer -> Novo Estado -> UI

// Action creators
const actions = {
    increment: () => ({ type: 'INCREMENT' }),
    decrement: () => ({ type: 'DECREMENT' }),
    setValue: (value) => ({ type: 'SET', payload: value }),
};

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'SET':
            return action.payload;
        default:
            return state;
    }
};

// Component
function Counter() {
    const [state, dispatch] = useReducer(reducer, 0);
    
    return (
        <div>
            <span>{state}</span>
            <button onClick={() => dispatch(actions.increment())}>
                +
            </button>
        </div>
    );
}
```

### Selector Pattern

```tsx
// Selector - extrai dados do estado
const selectUser = (state) => state.user;
const selectUsers = (state) => state.users;
const selectActiveUsers = (state) =>
    selectUsers(state).filter(u => u.active);

// Reselect (memoized selector)
const makeSelectActiveUsers = () =>
    createSelector(
        selectUsers,
        (users) => users.filter(u => u.active)
    );
```

---

## 7. Libraries Funcionais

### Ramda + React

```tsx
import * as R from "ramda";

// pipe para transforms
const transformUsers = R.pipe(
    R.filter(R.propEq("active", true)),
    R.map(R.prop("name")),
    R.join(", ")
);

// Uso em componente
const UserNames = ({ users }) => (
    <span>{transformUsers(users)}</span>
);
```

### Lodash FP

```tsx
import _ from "lodash/fp";

// Compose
const processItems = _.compose(
    _.filter({ active: true }),
    _.orderBy("name", "asc"),
    _.map("name")
);
```

---

## 8. Estrutura FP para Projetos

```
src/
├── domain/
│   ├── types/           # Types/Interfaces
│   └── selectors/      # Selectors funcionais
├── application/
│   ├── hooks/         # Hooks customizados (FP)
│   ├── actions/       # Action creators
│   └── reducers/      # Reducers
├── components/
│   ├── ui/            # Componentes puros
│   └── containers/    # Containers (conectam estado)
├── services/
│   └── api/         # Services funcionais
└── utils/
    ├── fp/          # Helpers FP
    └── curry/        # Currying utils
```

---

## 9. Checklist FP

- [ ] Componentes são funções puras?
- [ ] Estado é imutável?
- [ ] Hooks não têm side effects?
- [ ]useCallback para callbacks?
- [ ]useMemo para cálculos?
- [ ] Selectors para extrair dados?
- [ ] Actions como creators?
- [ ] Composition para componentes?