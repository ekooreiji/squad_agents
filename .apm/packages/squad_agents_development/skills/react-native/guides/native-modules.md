# Módulos Nativos React Native

## O que são?

Código native (iOS/Android) que pode ser usado em React Native.

## Expo Modules

Expo fornece módulos prontos:

```bash
npx expo install expo-camera
npx expo install expo-location
npx expo install expo-image-picker
```

## Usando módulos

```jsx
import { Camera } from 'expo-camera';

function App() {
  const [permissao, requestPermissao] = Camera.useCameraPermissions();

  return (
    <TouchableOpacity onPress={requestPermmissao}>
      <Text>Abrir câmera</Text>
    </TouchableOpacity>
  );
}
```

## Criando módulo nativo

### iOS (Swift)

```swift
@objc(MyModule)
func hello(_ resolve: @escaping RCTPromiseResolveBlock,
               reject: @escaping RCTPromiseRejectBlock) {
  resolve("Olá do native!")
}
```

### Registro

```javascript
import { NativeModules } from 'react-native';

const { MyModule } = NativeModules;
```

## Linkando

### Manual

```bash
react-native link
```

### Auto-link

Bibliotecas que suportam auto(linking) são linkadas automaticamente.

## Bridge vs TurboModules

| Bridge | TurboModules |
|-------|--------------|
| Legacy | Nova arquitetura |
| Async | Síncrono |
| JSON serialization | Zero-serialization |