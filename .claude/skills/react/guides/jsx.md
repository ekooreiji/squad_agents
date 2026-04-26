# JSX no React

## O que é JSX?

JSX é uma sintaxe que permite escrever elementos React usando HTML-like syntax no JavaScript.

## Exemplo básico

```jsx
const elemento = <h1>Olá, mundo!</h1>;
```

## Expressões no JSX

Use chaves `{}` para incluir expressões JavaScript:

```jsx
const nome = 'Maria';
const elemento = <h1>Olá, {nome}!</h1>;
```

## Atributos

```jsx
const elemento = <img src="foto.jpg" alt="Descrição" />;
```

## Múltiplos elementos

```jsx
// ComFragment
return (
  <>
    <h1>Título</h1>
    <p>Parágrafo</p>
  </>
);
```

## Condicionais

```jsx
function Saudacao({ usuario }) {
  return (
    <h1>
      {usuario ? `Olá, ${usuario}!` : 'Olá, visitante!'}
    </h1>
  );
}
```

## Listas

```jsx
const itens = ['Item 1', 'Item 2', 'Item 3'];

function Lista() {
  return (
    <ul>
      {itens.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

## Classes CSS

```jsx
return <div className="container">Conteúdo</div>;
```

## Estilosinline

```jsx
const estilo = {
  color: 'blue',
  fontSize: '16px'
};

return <p style={estilo}>Texto estilizado</p>;
```

## Boas práticas

1. Use camelCase para atributos
2. Fecha todas as tags
3. Use `className` em vez de `class`
4. Use `htmlFor` em vez de `for`