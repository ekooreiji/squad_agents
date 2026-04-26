# Firebase - Flutter

Integração com Firebase.

---

## Setup Firebase

```yaml
# pubspec.yaml
dependencies:
  firebase_core: ^2.0.0
  cloud_firestore: ^4.0.0
  firebase_auth: ^4.0.0
  firebase_storage: ^11.0.0
```

---

## Firestore

### Ler dados

```dart
final doc = await FirebaseFirestore.instance.collection('users').doc('id').get();
final data = doc.data();
```

### Escrever dados

```dart
await FirebaseFirestore.instance.collection('users').doc('id').set({
  'name': 'João',
  'age': 30,
});
```

### Listener em tempo real

```dart
FirebaseFirestore.instance.collection('users').snapshots().listen((snapshot) {
  for (final doc in snapshot.docs) {
    print(doc.data());
  }
});
```

---

## Firebase Auth

### Login

```dart
final cred = await FirebaseAuth.instance.signInWithEmailAndPassword(
  email: 'email@exemplo.com',
  password: 'senha',
);
```

### Logout

```dart
await FirebaseAuth.instance.signOut();
```

### Usuário atual

```dart
final user = FirebaseAuth.instance.currentUser;
```

---

## Firebase Storage

### Upload

```dart
final ref = FirebaseStorage.instance.ref().child('images');
await ref.putFile(File('caminho/arquivo'));
```

### Download URL

```dart
final url = await ref.getDownloadURL();
```

---

## Notes

- Firebase easy