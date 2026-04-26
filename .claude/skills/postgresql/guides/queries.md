# Queries

SELECT, JOIN, subqueries.

## Basic SELECT

```sql
SELECT * FROM users;
SELECT name, email FROM users;
SELECT DISTINCT city FROM users;
```

## WHERE

```sql
SELECT * FROM users WHERE age >= 18;
SELECT * FROM users WHERE city = 'São Paulo';
SELECT * FROM users WHERE name LIKE 'J%';
SELECT * FROM users WHERE id IN (1, 2, 3);
```

## JOIN

```sql
-- INNER JOIN
SELECT p.*, u.name FROM posts p
INNER JOIN users u ON p.user_id = u.id;

-- LEFT JOIN
SELECT p.*, u.name FROM posts p
LEFT JOIN users u ON p.user_id = u.id;

-- Multiple JOINs
SELECT p.title, u.name, c.name FROM posts p
JOIN users u ON p.user_id = u.id
JOIN cities c ON u.city_id = c.id;
```

## Aggregation

```sql
SELECT COUNT(*) FROM users;
SELECT AVG(age) FROM users;
SELECT SUM(amount) FROM orders;
SELECT MIN(price), MAX(price) FROM products;

GROUP BY
SELECT city, COUNT(*) FROM users GROUP BY city;

HAVING
SELECT city, COUNT(*) as total FROM users 
GROUP BY city HAVING COUNT(*) > 10;
```

## Subqueries

```sql
-- IN subquery
SELECT * FROM users WHERE id IN (
    SELECT user_id FROM posts
);

-- FROM subquery
SELECT avg_age FROM (
    SELECT AVG(age) as avg_age FROM users
) as stats;
```

## UNION

```sql
SELECT name FROM users
UNION
SELECT title FROM posts;
```