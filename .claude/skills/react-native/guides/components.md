# Componentes React Native

## View

Container principal:

```jsx
import { View, Text } from 'react-native';

function Tela() {
  return (
    <View>
      <Text>Conteúdo</Text>
    </View>
  );
}
```

## Text

Texto:

```jsx
<Text>Olá mundo!</Text>
<Text style={{ color: 'blue' }}>Azul</Text>
```

## TextInput

Input de texto:

```jsx
import { TextInput, useState } from 'react-native';

function Input() {
  const [texto, setTexto] = useState('');

  return (
    <TextInput
      value={texto}
      onChangeText={setTexto}
      placeholder="Digite..."
    />
  );
}
```

## Image

Imagens:

```jsx
<Image
  source={require('./img.png')}
/>
// Ou remoto
<Image
  source={{ uri: 'https://...' }}
  style={{ width: 100, height: 100 }}
/>
```

## TouchableOpacity

Botão clicável:

```jsx
<TouchableOpacity onPress={() => console.log('clicou')}>
  <Text>Botão</Text>
</TouchableOpacity>
```

## Pressable

Botão com feedback:

```jsx
<Pressable
  onPressIn={() => console.log('down')}
  onPressOut={() => console.log('up')}
>
  <Text>Botão</Text>
</Pressable>
```

## ScrollView

Scroll horizontal/vertical:

```jsx
<ScrollView>
  <Text>Conteúdo longo...</Text>
</ScrollView>
```

## FlatList

Lista otimizada:

```jsx
const dados = [{ key: '1' }, { key: '2' }];

<FlatList
  data={dados}
  renderItem={({ item }) => <Text>{item.key}</Text>}
/>
```

## Modal

Modal:

```jsx
<Modal visible={true}>
  <Text>Conteúdo do modal</Text>
</Modal>
```

## ActivityIndicator

Loading:

```jsx
<ActivityIndicator size="large" color="#0000ff" />
```