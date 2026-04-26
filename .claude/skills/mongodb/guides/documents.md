# Documents

BSON documents.

## Insert

```javascript
db.users.insertOne({
  name: "João",
  email: "joao@exemplo.com"
});

db.users.insertMany([
  { name: "Maria", email: "maria@exemplo.com" },
  { name: "Pedro", email: "pedro@exemplo.com" }
]);
```

## Documents Structure

```javascript
{
  _id: ObjectId("..."),
  name: "João",
  age: 30,
  address: {
    city: "São Paulo",
    country: "Brasil"
  },
  tags: ["developer", "python"],
  createdAt: new Date()
}
```

## Nested Documents

```javascript
db.users.findOne({ "address.city": "São Paulo" });
```