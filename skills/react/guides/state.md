# State no React

## O que é state?

State são dados que mudam ao longo do tempo em um componente.

## State local com useState

```jsx
import { useState } from 'react';

function Formulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </form>
  );
}
```

## State com objetos

```jsx
function Formulario() {
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    idade: 0
  });

  const atualizar = (campo) => (e) => {
    setDados({ ...dados, [campo]: e.target.value });
  };

  return (
    <input value={dados.nome} onChange={atualizar('nome')} />
  );
}
```

## State lifting

```jsx
// Filho
function Filho({ valor, setValor }) {
  return <input value={valor} onChange={(e) => setValor(e.target.value)} />;
}

// Pai
function Pai() {
  const [valor, setValor] = useState('');
  return <Filho valor={valor} setValor={setValor} />;
}
```

## Context API

Para state global:

```jsx
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  return (
    <AuthContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </AuthContext.Provider>
  );
}
```

## Estado inicial

```jsx
// Forma completa
const [state, setState] = useState(() => {
  const inicial = buscarDados();
  return inicial;
});
```

## Atualizações funcionais

```jsx
const [contador, setContador] = useState(0);

// Forma correta
setContador(c => c + 1);
```

## Boas práticas

1. Mantenha state mínimo necessário
2. Uselifting para state compartilhado
3. Use Context para state global
4. Evite state duplicado