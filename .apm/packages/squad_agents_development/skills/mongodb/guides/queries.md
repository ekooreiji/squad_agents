# Queries

Find and filters.

## Basic Find

```javascript
db.users.find();
db.users.find({ name: "João" });
db.users.findOne({ _id: ObjectId("abc123") });
```

## Operators

```javascript
// Comparison
db.users.find({ age: { $gt: 18 } });
db.users.find({ age: { $gte: 18, $lte: 30 } });
db.users.find({ name: { $ne: "João" } });

// Logical
db.users.find({ $or: [{ age: { $lt: 18 } }, { name: "Maria" }] });
db.users.find({ $and: [{ age: { $gt: 18 } }, { city: "SP" }] });

// Element
db.users.find({ name: { $exists: true } });
db.users.find({ email: { $type: "string" } });
```

## Sorting

```javascript
db.users.find().sort({ name: 1 });  // ASC
db.users.find().sort({ name: -1 }); // DESC
```