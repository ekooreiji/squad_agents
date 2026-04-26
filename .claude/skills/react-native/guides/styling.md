# Styling React Native

## StyleSheet

```jsx
import { StyleSheet, View, Text } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    fontSize: 20,
    color: '#333'
  }
});

function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>Olá!</Text>
    </View>
  );
}
```

## Propriedades de estilo

### Layout

- `flex`: Proporção do espaço
- `flexDirection`: row | column
- `justifyContent`: Alinhamento vertical
- `alignItems`: Alinhamento horizontal
- `flexWrap`: Quebra de linha

### Espaçamento

- `margin`: Margem externa
- `padding`: Margem interna
- `gap`: Espaço entre itens

### Tamanho

- `width`, `height`
- `minWidth`, `maxWidth`
- `minHeight`, `maxHeight`

### Visual

- `backgroundColor`
- `borderWidth`, `borderColor`
- `borderRadius`

### Texto

- `fontSize`, `fontWeight`
- `color`, `textAlign`

## Flexbox

```jsx
<View style={{ flex: 1 }}>
  <View style={{ flex: 1, backgroundColor: 'red' }} />
  <View style={{ flex: 2, backgroundColor: 'blue' }} />
</View>
// red: 1/3, blue: 2/3
```

## Absolute

```jsx
<View style={{ position: 'absolute', top: 10, right: 10 }}>
  <Text>Sobreposto</Text>
</View>
```

## Style array

```jsx
<View style={[styles.base, styles.destaque]}>
  <Text>Texto</Text>
</View>
```