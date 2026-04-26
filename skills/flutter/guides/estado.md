# Estado - Flutter

Gerenciamento de estado.

---

## StatefulWidget

```dart
class Contador extends StatefulWidget {
  const Contador({super.key});

  @override
  State<Contador> createState() => _ContadorState();
}

class _ContadorState extends State<Contador> {
  int _count = 0;

  void _increment() {
    setState(() {
      _count++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('$_count'),
        ElevatedButton(
          onPressed: _increment,
          child: const Text('Incrementar'),
        ),
      ],
    );
  }
}
```

---

## setState

Atualiza UI:
```dart
setState(() {
  _count++;
});
```

---

## Provider

```dart
// main.dart
runApp(
  ChangeNotifierProvider(
    create: (_) => Counter(),
    child: const MyApp(),
  ),
);
```

```dart
// counter.dart
class Counter extends ChangeNotifier {
  int _count = 0;
  int get count => _count;

  void increment() {
    _count++;
    notifyListeners();
  }
}
```

---

## Bloc Pattern

```dart
// events.dart
abstract class CounterEvent {}
class Increment extends CounterEvent {}

// bloc.dart
class CounterBloc extends Bloc<CounterEvent, int> {
  CounterBloc() : super(0);
  @override
  int mapEventToState(CounterEvent event) => state + 1;
}
```

---

## GetX

```dart
final controller = Get.put(Controller());

Obx(() => Text('${controller.count}'));
```

---

## Notes

- setState: simples
- Provider: recomendado
- Bloc: escalável