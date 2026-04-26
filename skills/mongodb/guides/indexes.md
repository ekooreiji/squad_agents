# Indexes

Index creation and usage.

## Create Index

```javascript
// Single field
db.users.createIndex({ name: 1 });

// Compound
db.users.createIndex({ name: 1, age: -1 });

// Unique
db.users.createIndex({ email: 1 }, { unique: true });

// Text
db.posts.createIndex({ title: "text", content: "text" });
```

## List Indexes

```javascript
db.users.getIndexes();
```

## Drop Index

```javascript
db.users.dropIndex("name_1");
db.users.dropIndexes();
```