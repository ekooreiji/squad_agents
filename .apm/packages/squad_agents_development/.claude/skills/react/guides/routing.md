# Routing no React

## React Router

Biblioteca padrão para rotas em React.

## Instalação

```bash
npm install react-router-dom
```

## Configuração básica

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## Link

```jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
    </nav>
  );
}
```

## useNavigation

```jsx
import { useNavigate } from 'react-router-dom';

function BotaoVoltar() {
  const navigate = useNavigate();

  return <button onClick={() => navigate(-1)}>Voltar</button>;
}
```

## Parâmetros

```jsx
// Rota
<Route path="/produto/:id" element={<Produto />} />

// Componente
import { useParams } from 'react-router-dom';

function Produto() {
  const { id } = useParams();
  return <h1>Produto {id}</h1>;
}
```

## Query params

```jsx
import { useSearchParams } from 'react-router-dom';

function Buscar() {
  const [searchParams] = useSearchParams();
  const busca = searchParams.get('q');
  return <p>Buscando: {busca}</p>;
}
```

## Rotas aninhadas

```jsx
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="perfil" element={<Perfil />} />
  <Route path="config" element={<Config />} />
</Route>
```

## Protected routes

```jsx
function RotaPrivada({ componente: Componente }) {
  const { usuario } = useAuth();

  return usuario ? <Componente /> <Navigate to="/login" />;
}