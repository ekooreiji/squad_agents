# MongoDB Patterns

## Insert

```javascript
db.users.insertOne({ name: "João", age: 30 });
```

## Find

```javascript
db.users.find({ age: { $gt: 18 } });
```

## Update

```javascript
db.users.updateOne(
  { _id: ObjectId("...") },
  { $set: { name: "Novo" } }
);
```