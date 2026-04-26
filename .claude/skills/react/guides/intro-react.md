# Introdução ao React

## O que é React?

React é uma biblioteca JavaScript para construir interfaces de usuário interativas.

## Característicasprincipais

- **Declarativo**: Descreva como sua UI deve parecer
- **Componentizado**: Componentes reutilizáveis
- **Flexível**: Funciona com outras bibliotecas

## Instalação

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

## Estrutura de arquivos

```
src/
├── App.jsx
├── main.jsx
├── index.css
└── App.css
```

## Primeiro componente

```jsx
function App() {
  return <h1>Olá, React!</h1>;
}

export default App;
```

## JSX

JSX é uma extensão de sintaxe que permite escrever HTML no JavaScript.

```jsx
function Botao() {
  return <button>Clique aqui</button>;
}
```

## Renderização

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return <h1>Olá, React!</h1>;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Recursos

- [Documentação Oficial](https://react.dev)
- [Tutorial Oficial](https://react.dev/learn)
- [Create React App](https://create-react-app.dev)