# Ciclo de Vida no React

## Diferenças

Componentes função não têm ciclo de vida tradicional. Use hooks para substituir.

## useEffect

### Mount (inicialização)

```jsx
useEffect(() => {
  console.log('Componente montou');
}, []); // Array vazio executa 1x
```

### Update (atualização)

```jsx
useEffect(() => {
  console.log('Estado mudou');
}); // Sem array = sempre
```

### Unmount (cleanup)

```jsx
useEffect(() => {
  return () => {
    console.log('Cleanup');
  };
}, []);
```

## useLayoutEffect

Executa síncrono antes da renderização:

```jsx
useLayoutEffect(() => {
  console.log('Antes de renderizar');
}, []);
```

## Fetching de dados

```jsx
function Dados() {
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function buscar() {
      try {
        const resp = await fetch('/api/dados');
        const json = await resp.json();
        setDados(json);
      } catch (e) {
        setErro(e.message);
      }
    }
    buscar();
  }, []);

  if (erro) return <p>Erro: {erro}</p>;
  if (!dados) return <p>Carregando...</p>;
  return <p>{dados.nome}</p>;
}
```

## Subscriptions

```jsx
function Chat() {
  const [mensagens, setMensagens] = useState([]);

  useEffect(() => {
    const ins = firebase.subscribe((novas) => {
      setMensagens(novas);
    });
    return () => firebase.unsubscribe(ins);
  }, []);

  return <ul>{mensagens.map(m => <li>{m}</li>)}</ul>;
}
```

## Timers

```jsx
function Timer() {
  const [tempo, setTempo] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTempo(t => t + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <p>{tempo} segundos</p>;
}
```

## Referências

| Ciclo | Classe | Hook |
|-------|--------|------|
| componentDidMount | ✅ | useEffect([],) |
| componentDidUpdate | ✅ | useEffect() |
| componentWillUnmount | ✅ | return in useEffect |