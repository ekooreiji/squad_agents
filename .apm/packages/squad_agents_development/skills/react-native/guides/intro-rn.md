# Introdução ao React Native

## O que é React Native?

Framework para criar apps nativos para iOS e Android usando React.

## Diferenças do React

| React | React Native |
|-------|-------------|
| `<div>`, `<span>` | `<View>`, `<Text>` |
| CSS | StyleSheet |
| Browser | Native APIs |

## Instalação

### Expo (Recomendado)

```bash
npm create-expo-app@latest my-app
cd my-app
npm start
```

### CLI

```bash
npx react-native@latest init my-app
```

## Componentes Core

```jsx
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

function App() {
  return (
    <View>
      <Text>Olá, React Native!</Text>
      <TextInput placeholder="Digite algo" />
      <TouchableOpacity>
        <Text>Clique</Text>
      </TouchableOpacity>
    </View>
  );
}
```

## Expo GO

App para testar no dispositivo real:
- iOS: App Store
- Android: Play Store

## Estrutura

```
App.js
app.json
package.json
```

## Debug

```bash
npm start
# Shake device para abrir menu
```

## Recursos

- [Documentação](https://reactnative.dev)
- [Expo](https://expo.dev)
- [Expo Snack](https://snack.expo.dev)