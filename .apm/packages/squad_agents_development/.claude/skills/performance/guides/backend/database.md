# Database Query Optimization

## N+1 Problems

```python
# BAD - N+1 queries
users = db.query(User).all()
for user in users:
    print(user.posts)  # N queries!

# GOOD - Eager loading
users = db.query(User).options(joinedload(User.posts)).all()
```

## Indexes

| Query Type | Index Type |
|-----------|-----------|
| WHERE | B-tree |
| LIKE 'prefix%' | B-tree |
| Full text | GIN, GiST |
| Geographic | PostGIS |

## Query Optimization

```python
# Select only needed columns
db.query(User.name, User.email)  # Não SELECT *

# Limit results
db.query(User).limit(100)

# Use exists instead of IN
db.query(User).filter(
    User.posts.any(Post.id.in_([1, 2, 3]))
)
```