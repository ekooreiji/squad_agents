# Aggregation Pipeline

Aggregation framework.

## Pipeline Stages

```javascript
db.users.aggregate([
  { $match: { age: { $gt: 18 } } },
  { $group: { _id: "$city", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
]);
```

## Common Stages

```javascript
// $match - filter
{ $match: { status: "active" } }

// $group - group
{ $group: { _id: "$department", count: { $sum: 1 } } }

// $project - select fields
{ $project: { name: 1, email: 1, _id: 0 } }

// $sort - sort
{ $sort: { name: 1 } }

// $limit
{ $limit: 10 }

// $skip
{ $skip: 10 }

// $unwind
{ $unwind: "$tags" }
```