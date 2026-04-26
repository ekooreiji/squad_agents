# State React Native

## useState

Mesmo do React:

```jsx
import { useState } from 'react-native';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <TouchableOpacity onPress={() => setContador(c => c + 1)}>
      <Text>Contagem: {contador}</Text>
    </TouchableOpacity>
  );
}
```

## AsyncStorage

Persistência:

```bash
npm install @react-native-async-storage/async-storage
```

```jsx
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const [dado, setDado] = useState('');

  const salvar = async () => {
    await AsyncStorage.setItem('chave', dado);
  };

  const carregar = async () => {
    const valor = await AsyncStorage.getItem('chave');
    setDado(valor);
  };

  return (
    <>
      <TextInput value={dado} onChangeText={setDado} />
      <TouchableOpacity onPress={salvar}>
        <Text>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={carregar}>
        <Text>Carregar</Text>
      </TouchableOpacity>
    </>
  );
}
```

## Zustand

State management:

```bash
npm install zustand
```

```jsx
import { create } from 'zustand';

const useStore = create((set) => ({
  contador: 0,
  incrementar: () => set((state) => ({
    contador: state.contador + 1
  }))
}));

function App() {
  const { contador, incrementar } = useStore();

  return (
    <TouchableOpacity onPress={incrementar}>
      <Text>Contagem: {contador}</Text>
    </TouchableOpacity>
  );
}
```

## Context

```jsx
import { createContext, useContext, useState } from 'react-native';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  return (
    <AuthContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return useContext(AuthContext);
}
```

## Redux Toolkit

```bash
npm install @reduxjs/toolkit react-redux
```