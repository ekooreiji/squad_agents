# Composição - CDD

Composição de componentes.

---

## O que é Composição

Combinar componentes menores:
- Container/Presentational
- Slot Content
- Compound Components

---

## Container/Presentational

```jsx
function CardContainer({ data, loading }) {
  const [items, setItems] = useState(data);
  
  if (loading) return <Spinner />;
  
  return items.map(item => (
    <Card key={item.id} data={item} />
  ));
}

function Card({ data }) {
  return (
    <article className="card">
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </article>
  );
}
```

---

## Slot Content

```jsx
function ButtonGroup({ children, direction }) {
  return (
    <div className={`btn-group btn-group--${direction}`}>
      {children}
    </div>
  );
}

<ButtonGroup direction="horizontal">
  <Button>Cancel</Button>
  <Button variant="primary">Confirm</Button>
</ButtonGroup>
```

---

## Compound Components

```jsx
function Select({ children, value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      {children}
    </select>
  );
}

function Option({ value, children }) {
  return <option value={value}>{children}</option>;
}

<Select value="1">
  <Option value="1">Option 1</Option>
  <Option value="2">Option 2</Option>
</Select>
```

---

## Render Props

```jsx
function DataFetcher({ render }) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api').then(setData);
  }, []);
  
  return render(data);
}

<DataFetcher render={data => (
  <List items={data} />
)} />
```

---

## Higher-Order Components

```jsx
function withLoading(Component) {
  return function({ loading, ...props }) {
    if (loading) return <Spinner />;
    return <Component {...props} />;
  };
}

const CardWithLoading = withLoading(Card);
```

---

## Notes

- Small → Large
- Composable