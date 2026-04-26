# Exemplos - Flutter

Exemplos práticos.

---

## Todo App

```dart
class TodoApp extends StatefulWidget {
  const TodoApp({super.key});

  @override
  State<TodoApp> createState() => _TodoAppState();
}

class _TodoAppState extends State<TodoApp> {
  final List<Todo> _todos = [];
  final _controller = TextEditingController();

  void _addTodo() {
    setState(() {
      _todos.add(Todo(text: _controller.text, done: false));
      _controller.clear();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Row(
          children: [
            Expanded(
              child: TextField(controller: _controller),
            ),
            ElevatedButton(
              onPressed: _addTodo,
              child: const Text('Add'),
            ),
          ],
        ),
        Expanded(
          child: ListView.builder(
            itemCount: _todos.length,
            itemBuilder: (context, i) {
              final todo = _todos[i];
              return CheckboxListTile(
                value: todo.done,
                title: Text(todo.text),
                onChanged: (v) => setState(() {
                  _todos[i].done = v!;
                }),
              );
            },
          ),
        ),
      ],
    );
  }
}

class Todo {
  final String text;
  bool done;
  Todo({required this.text, required this.done});
}
```

---

## Card Widget

```dart
class ArticleCard extends StatelessWidget {
  final String title;
  final String description;
  final String image;

  const ArticleCard({
    super.key,
    required this.title,
    required this.description,
    required this.image,
  });

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Column(
        children: [
          Image.network(image),
          Padding(
            padding: const EdgeInsets.all(8),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(title, style: const TextStyle(fontSize: 18)),
                const SizedBox(height: 4),
                Text(description),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
```

---

## Notes

- Examples help