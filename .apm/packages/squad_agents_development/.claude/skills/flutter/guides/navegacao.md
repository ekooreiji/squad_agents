# Navegação - Flutter

Navegação entre telas.

---

## Navigator.push

```dart
Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => SegundaTela()),
);
```

---

## Navigator.pop

```dart
Navigator.pop(context);
```

---

## Named Routes

```dart
// main.dart
MaterialApp(
  routes: {
    '/': (context) => HomePage(),
    '/sobre': (context) => AboutPage(),
  },
);
```

```dart
Navigator.pushNamed(context, '/sobre');
```

---

## Arguments

```dart
Navigator.pushNamed(
  context,
  '/detalhes',
  arguments: {'id': 1},
);
```

```dart
final args = ModalRoute.of(context).settings.arguments;
```

---

## Bottom Navigation

```dart
BottomNavigationBar(
  currentIndex: _index,
  onTap: (index) {
    setState(() => _index = index);
  },
  items: const [
    BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
    BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Busca'),
    BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Perfil'),
  ],
)
```

---

## TabBar

```dart
DefaultTabController(
  length: 3,
  child: TabBar(
    tabs: const [
      Tab(icon: Icon(Icons.directions_car)),
      Tab(icon: Icon(Icons.directions_transit)),
      Tab(icon: Icon(Icons.directions_bike)),
    ],
  ),
)
```

---

## Notes

- Navigator básico