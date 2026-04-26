# Checklist React Native

## Setup

- [ ] Expo CLI ou React Native CLI instalado
- [ ] Ambiente configurado (Android Studio / Xcode)
- [ ]app.json configurado
- [ ] Estrutura de pastas definida

## Componentes

- [ ] View, Text, TouchableOpacity usados corretamente
- [ ] FlatList para listas (não ScrollView)
- [ ] Imagens otimizadas
- [ ] SafeAreaView para notch

## Navigation

- [ ] React Navigation instalado
- [ ] Stack Navigator configurado
- [ ] Tab Navigator (se necessário)
- [ ] Parâmetros entre telas

## State

- [ ] useState para estado local
- [ ] AsyncStorage para persistência
- [ ] Context ou Zustand para estado global
- [ ] Evitar estado duplicado

## Styling

- [ ] StyleSheet para estilos
- [ ] Flexbox para layout
- [ ] Estilos responsivos
- [ ] Consistência visual

## APIs Nativas

- [ ] Cámara (expo-camera)
- [ ] Localização (expo-location)
- [ ] Imagens (expo-image-picker)
- [ ] Permissões solicitas

## Performance

- [ ] FlatList com keyExtractor
- [ ] Imagens em cache
- [ ] Lazy loading
- [ ] Hermes enabled

## Build

- [ ] eas build ou build nativo
- [ ] Ícones configurados
- [ ] Splash screen
- [ ] Assinatura digital

## Boas Práticas

- [ ] ESLint + Prettier
- [ ] TypeScript (opcional)
- [ ] Testes unitários
- [ ] Logs de erro