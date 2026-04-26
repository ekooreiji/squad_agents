# Collections

Collections and CRUD operations.

## Create Collection

```javascript
db.createCollection("users");
db.createCollection("posts", { capped: true, size: 100000 });
```

## CRUD

```javascript
// Create
db.users.insertOne({ name: "João" });
db.users.insertMany([{ name: "Maria" }, { name: "Pedro" }]);

// Read
db.users.find();
db.users.findOne({ _id: ObjectId("...") });

// Update
db.users.updateOne(
  { _id: ObjectId("...") },
  { $set: { name: "Novo Nome" } }
);
db.users.updateMany(
  { age: { $lt: 18 } },
  { $set: { status: "minor" } }
);

// Delete
db.users.deleteOne({ _id: ObjectId("...") });
db.users.deleteMany({ status: "inactive" });
```