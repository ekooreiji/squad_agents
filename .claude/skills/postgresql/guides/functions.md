# Functions

Stored procedures e functions.

## Basic Function

```sql
CREATE FUNCTION add(a INTEGER, b INTEGER) RETURNS INTEGER AS $$
BEGIN
    RETURN a + b;
END;
$$ LANGUAGE plpgsql;
```

## Function with Variables

```sql
CREATE FUNCTION get_full_name(user_id INTEGER) RETURNS TEXT AS $$
DECLARE
    first_name TEXT;
    last_name TEXT;
BEGIN
    SELECT first_name, last_name INTO first_name, last_name
    FROM users WHERE id = user_id;
    RETURN first_name || ' ' || last_name;
END;
$$ LANGUAGE plpgsql;
```

## Trigger Function

```sql
CREATE FUNCTION set_created_at() RETURNS TRIGGER AS $$
BEGIN
    NEW.created_at := CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER users_created_at
    BEFORE INSERT ON users
    FOR EACH ROW
    EXECUTE FUNCTION set_created_at();
```

## Returns Table

```sql
CREATE FUNCTION get_users_by_city(city_name TEXT)
RETURNS TABLE(id INTEGER, name TEXT, email TEXT) AS $$
BEGIN
    RETURN QUERY
    SELECT u.id, u.name, u.email
    FROM users u
    WHERE u.city = city_name;
END;
$$ LANGUAGE plpgsql;
```