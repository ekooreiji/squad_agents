# Hooks no React

## O que são hooks?

Hooks são funções que permitem usar recursos de estado e ciclo de vida em componentes função.

## useState

Gerencia estado local:

```jsx
import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <button onClick={() => setContador(contador + 1)}>
      Contagem: {contador}
    </button>
  );
}
```

## useEffect

Executa efeitos colaterais:

```jsx
import { useEffect } from 'react';

function Dados() {
  useEffect(() => {
    console.log('Componente iniciado');
  }, []); // Array vazio = onlyonce

  return <p>Dados carregados</p>;
}
```

## useContext

Acessa contexto:

```jsx
import { createContext, useContext } from 'react';

const TemaContext = createContext('claro');

function Botao() {
  const tema = useContext(TemaContext);
  return <button className={tema}>Clique</button>;
}
```

## useRef

Referencia elementos:

```jsx
import { useRef } from 'react';

function Input() {
  const inputRef = useRef(null);

  const focar = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focar}>Focar</button>
    </>
  );
}
```

## useMemo

Memoização de valores:

```jsx
import { useMemo } from 'react';

function Lista({ itens }) {
  const ordenados = useMemo(
    () => itens.sort((a, b) => a - b),
    [itens]
  );

  return <ul>{ordenados.map(i => <li key={i}>{i}</li>)}</ul>;
}
```

## useCallback

Memoização de funções:

```jsx
import { useCallback } from 'react';

function Botao({ onClick }) {
  const handleClick = useCallback(
    (e) => onClick(e.target.value),
    [onClick]
  );

  return <button onClick={handleClick}>Clique</button>;
}
```

## Regras dos hooks

1. Chame apenas no topo (não em loops)
2. Chame apenas em componentes função
3. Custom hooks começar com "use"