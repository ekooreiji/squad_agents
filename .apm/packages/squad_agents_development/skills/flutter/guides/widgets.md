# Widgets - Flutter

Blocos fundamentais de UI.

---

## Widgets Básicos

### Text

```dart
Text(
  'Olá Flutter!',
  style: TextStyle(fontSize: 24, color: Colors.blue),
)
```

### Image

```dart
Image.network('https://exemplo.com/img.jpg')
Image.asset('assets/images/logo.png')
```

### Icon

```dart
Icon(Icons.star, color: Colors.amber, size: 48)
```

---

## Widgets de Layout

### Row (horizontal)

```dart
Row(
  children: [
    Icon(Icons.star),
    Text('Estrela'),
  ],
)
```

### Column (vertical)

```dart
Column(
  children: [
    Text('Item 1'),
    Text('Item 2'),
    Text('Item 3'),
  ],
)
```

### Stack

```dart
Stack(
  children: [
    Container(color: Colors.blue),
    const Text('Sobreposta'),
  ],
)
```

---

## Material Widgets

### ElevatedButton

```dart
ElevatedButton(
  onPressed: () {},
  child: const Text('Clique'),
)
```

### Card

```dart
Card(
  child: ListTile(
    title: const Text('Título'),
    subtitle: const Text('Subtítulo'),
    leading: const Icon(Icons.star),
  ),
)
```

### TextField

```dart
TextField(
  decoration: const InputDecoration(
    labelText: 'Nome',
    hintText: 'Digite seu nome',
  ),
)
```

---

## Container

```dart
Container(
  width: 100,
  height: 100,
  color: Colors.blue,
  padding: const EdgeInsets.all(16),
  margin: const EdgeInsets.all(8),
  child: Text('Conteúdo'),
)
```

---

## ListView

```dart
ListView.builder(
  itemCount: items.length,
  itemBuilder: (context, index) {
    return ListTile(
      title: Text(items[index]),
    );
  },
)
```

---

## Notes

- Widgets são everything