# Patterns React

## Container/Presentational

```jsx
// Container
function ListaContainer() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    buscarItens().then(setItens);
  }, []);

  return <Lista itens={itens} />;
}

// Presentational
function Lista({ itens }) {
  return (
    <ul>
      {itens.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}
```

## Higher-Order Component

```jsx
function withLogger(WrappedComponent) {
  return function ComponenteLogado(props) {
    useEffect(() => {
      console.log('Mount', props);
    }, []);

    return <WrappedComponent {...props} />;
  };
}
```

## Custom Hook

```jsx
function useLocalStorage(chave, valorInicial) {
  const [valor, setValor] = useState(() => {
    const salvo = localStorage.getItem(chave);
    return salvo ? JSON.parse(salvo) : valorInicial;
  });

  useEffect(() => {
    localStorage.setItem(chave, JSON.stringify(valor));
  }, [chave, valor]);

  return [valor, setValor];
}
```

## Render Props

```jsx
function MousePosicao({ children }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
    >
      {children(pos)}
    </div>
  );
}

// Uso
<MousePosicao>
  {({ x, y }) => <p>X: {x}, Y: {y}</p>}
</MousePosicao>
```

## Error Boundary

```jsx
class ErrorBoundary extends React.Component {
  state = { erro: null };

  static getDerivedStateFromError(erro) {
    return { erro };
  }

  componentDidCatch(erro, info) {
    console.error(erro, info);
  }

  render() {
    if (this.state.erro) {
      return <p>Algo deu errado!</p>;
    }
    return this.props.children;
  }
}
```

## Compound Component

```jsx
function Menu({ children }) {
  const [ativo, setAtivo] = useState();

  return (
    <MenuContext.Provider value={{ ativo, setAtivo }}>
      {children}
    </MenuContext.Provider>
  );
}

Menu.Item = function Item({ value, children }) {
  const { ativo, setAtivo } = useContext(MenuContext);
  return (
    <button
      className={ativo === value ? 'active' : ''}
      onClick={() => setAtivo(value)}
    >
      {children}
    </button>
  );
};

// Uso
<Menu>
  <Menu.Item value="a">A</Menu.Item>
  <Menu.Item value="b">B</Menu.Item>
</Menu>
```