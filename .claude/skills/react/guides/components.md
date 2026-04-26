# Componentes no React

## O que são componentes?

Componentes são funções JavaScript que retornam elementos React. Eles permitem dividir a UI em partes independentes e reutilizáveis.

## Componentefunção

```jsx
function Botao() {
  return <button>Clique aqui</button>;
}

export default Botao;
```

## Props

Props são argumentos passados para componentes:

```jsx
function Saudacao({ nome }) {
  return <h1>Olá, {nome}!</h1>;
}

// Uso
<Saudacao nome="Maria" />
```

## Componentes aninhados

```jsx
function Card({ titulo, children }) {
  return (
    <div className="card">
      <h2>{titulo}</h2>
      <div>{children}</div>
    </div>
  );
}

// Uso
<Card titulo="Meu Card">
  <p>Conteúdo do card</p>
</Card>
```

## Componentes de classe

```jsx
import React from 'react';

class Contador extends React.Component {
  render() {
    return <h1>Contador</h1>;
  }
}
```

## Composição

```jsx
function Layout({ header, main, footer }) {
  return (
    <div>
      <header>{header}</header>
      <main>{main}</main>
      <footer>{footer}</footer>
    </div>
  );
}
```

## Tipos de props

```jsx
function Item({ nome, quantidade, ativo, callback }) {
  return (
    <li>
      {nome} - {quantidade} - {ativo ? 'Ativo' : 'Inativo'}
      <button onClick={callback}>Ação</button>
    </li>
  );
}
```

## Default props

```jsx
function Botao({ texto = 'Clique', tipo = 'primario' }) {
  return <button className={tipo}>{texto}</button>;
}