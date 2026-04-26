# Introdução ao Flutter

UI toolkit cross-platform do Google.

---

## O que é Flutter

Framework cross-platform:
- Dart language
- Widgets
- Single codebase

---

## Instalação

```bash
flutter doctor
flutter create my_app
cd my_app
flutter run
```

---

## Primeiro App

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Olá Flutter',
      home: Scaffold(
        appBar: AppBar(title: const Text('App')),
        body: const Center(child: Text('Olá Flutter!')),
      ),
    );
  }
}
```

---

## Comparações

| Flutter | React Native |
|---------|-------------|
| Dart | JavaScript |
| Widgets | Componentes |
| Skia | Native views |

---

## Estrutura

```
lib/
├── main.dart
├── home.dart
├── widgets/
└── screens/
```

---

## Hot Reload

```bash
flutter run
# Press 'r' para hot reload
```

---

## Notes

- Dart é easy
- Hot reload é rápido