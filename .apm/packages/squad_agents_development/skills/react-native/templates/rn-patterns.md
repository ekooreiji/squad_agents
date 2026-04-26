# Patterns React Native

## Screen Setup

```jsx
import { View, Text, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
```

## FlatList com pull-to-refresh

```jsx
function Lista({ dados }) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await buscarDados();
    setRefreshing(false);
  };

  return (
    <FlatList
      data={dados}
      renderItem={({ item }) => <Item data={item} />}
      onRefresh={onRefresh}
      refreshing={refreshing}
    />
  );
}
```

## Form com validação

```jsx
function Formulario() {
  const [dados, setDados] = useState({ nome: '', email: '' });
  const [erros, setErros] = useState({});

  const validar = () => {
    const novasErros = {};
    if (!dados.nome) novasErros.nome = 'Obrigatório';
    if (!dados.email.includes('@')) novasErros.email = 'Email inválido';
    setErros(novasErros);
    return Object.keys(novasErros).length === 0;
  };

  const enviar = () => {
    if (validar()) {
      console.log('Enviar', dados);
    }
  };

  return (
    <View>
      <TextInput
        value={dados.nome}
        onChangeText={(nome) => setDados({ ...dados, nome })}
      />
      {erros.nome && <Text>{erros.nome}</Text>}
    </View>
  );
}
```

## Loading com骨架

```jsx
function Skeleton() {
  return (
    <View style={styles.skeleton}>
      <View style={styles.placeholder} />
    </View>
  );
}
```

## Image com fallback

```jsx
<Image
  source={{ uri: url }}
  style={styles.imagem}
  onError={() => setUrl('/placeholder.png')}
/>
```