# Rendering Performance

## Virtual DOM

- React: Virtual DOM minimiza re-renders
- Vue: Dep tracking automático
- Compara apenas mudanças

## Memoization

```javascript
// React
const MemoComponent = React.memo(function Component({ data }) {
  return <div>{data.name}</div>;
});

// useMemo
const expensive = useMemo(() => computeExpensive(a, b), [a, b]);

// useCallback
const handler = useCallback(() => doSomething(a), [a]);
```

## Code Splitting

```javascript
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}
```

## Virtual Scrolling

```javascript
import { FixedSizeList } from 'react-window';

<List
  height={400}
  itemCount={1000}
  itemSize={50}
  width={300}
  renderRow={({ index, style }) => (
    <div style={style}>{items[index]}</div>
  )}
/>
```