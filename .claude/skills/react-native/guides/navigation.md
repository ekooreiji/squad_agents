# Navigation React Native

## React Navigation

Biblioteca padrão para navegação.

## Instalação

```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install react-native-screens react-native-safe-area-context
```

## Stack Navigator

```jsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

## Navigating

```jsx
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detalhes', { id: 1 })}
    >
      <Text>Ir para detalhes</Text>
    </TouchableOpacity>
  );
}
```

## Parâmetros

```jsx
function DetalhesScreen({ route }) {
  const { id } = route.params;

  return <Text>ID: {id}</Text>;
}
```

## Tab Navigator

```bash
npm install @react-navigation/bottom-tabs
```

```jsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Config" component={ConfigScreen} />
    </Tab.Navigator>
  );
}
```

## Drawer Navigator

```bash
npm install @react-navigation/drawer
```