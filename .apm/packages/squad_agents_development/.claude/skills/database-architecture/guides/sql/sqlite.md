# SQLite

## Visão Geral

SQLite é um SGBD relacional embedded, serverless, arquivo único. embedded em aplicações.

## Características

| Característica | Descrição |
|---------------|-----------|
| **Embedding** | Biblioteca C, sem servidor |
| **Arquivo único** | Banco como arquivo .db/.sqlite |
| **Zero-config** | Sem instalação/config |
| **ACID** | Transações atômicas |
| **Typing** | Manifest typing (flexível) |

## Instalação

### Python (built-in)
```python
import sqlite3
# Já incluso na stdlib
```

### Node.js
```bash
npm install better-sqlite3
```

### Go
```bash
go get github.com/mattn/go-sqlite3
```

## Conexão

```python
import sqlite3

conn = sqlite3.connect('mydb.sqlite')
cursor = conn.cursor()

# Arquivo em memória
conn = sqlite3.connect(':memory:')
```

## Tipos de Dados

### Tipos Suportados
```
NULL, INTEGER, REAL, TEXT, BLOB
```

### Type Affinity
| Declaration | Affinity |
|-------------|----------|
| INT, INTEGER | INTEGER |
| REAL, FLOAT | REAL |
| TEXT, CHAR, CLOB | TEXT |
| BLOB | BLOB |

### Boolean
```python
# SQLite não tem BOOLEAN nativo
# Use INTEGER (0/1)
is_active = 1  # True
is_active = 0  # False
```

### Date/Time
```python
# Armazenar como TEXT ISO 8601
import datetime
now = datetime.datetime.now().isoformat()

# Ou INTEGER (Unix timestamp)
import time
now = int(time.time())
```

## Criação de Tabelas

```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    content TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## Índices

```sql
CREATE INDEX idx_users_email ON users(email);

CREATE INDEX idx_posts_user ON posts(user_id);
CREATE INDEX idx_posts_created ON posts(created_at);
```

## Constraints

```sql
-- Check
CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    amount REAL CHECK (amount > 0)
);

-- Unique
CREATE TABLE tags (
    id INTEGER PRIMARY KEY,
    name TEXT UNIQUE
);

-- Not null
CREATE TABLE profiles (
    id INTEGER PRIMARY KEY,
    bio TEXT NOT NULL
);
```

## queries

```sql
-- Insert
INSERT INTO users (name, email) VALUES ('John', 'john@example.com');

-- Select com JOIN
SELECT u.name, p.title
FROM users u
JOIN posts p ON u.id = p.user_id
WHERE u.id = 1;

-- Aggregate
SELECT user_id, COUNT(*) as total
FROM posts
GROUP BY user_id
ORDER BY total DESC;

-- Subquery
SELECT * FROM users
WHERE id IN (SELECT user_id FROM posts GROUP BY user_id HAVING COUNT(*) > 5);
```

## Window Functions (3.25+)

```sql
SELECT name, salary,
       RANK() OVER (ORDER BY salary DESC) as rank,
       SUM(salary) OVER (ORDER BY salary DESC) as running_total
FROM employees;
```

## JSON (3.9+)

```sql
CREATE TABLE config (
    id INTEGER PRIMARY KEY,
    data TEXT
);

INSERT INTO config (data) VALUES ('{"theme": "dark"}');

SELECT JSON_EXTRACT(data, '$.theme') FROM config;
-- "dark"
```

## Transactions

```python
conn = sqlite3.connect('mydb.sqlite')

try:
    conn.execute('BEGIN')
    conn.execute('INSERT INTO users (name) VALUES (?)', ('John',))
    conn.execute('INSERT INTO posts (user_id, title) VALUES (?, ?)', (1, 'Hello'))
    conn.commit()
except:
    conn.rollback()
```

## WAL Mode

```sql
-- WAL (Write-Ahead Logging) - melhor concorrência
PRAGMA journal_mode = WAL;

-- Checkpoint
PRAGMA wal_checkpoint(TRUNCATE);

-- Timeout
PRAGMA busy_timeout = 5000;
```

## Prós

- + Zero configuração
- + Embedded (sem servidor)
- + Arquivo único (portabilidade)
- + Rápido para reads
- + Transações ACID
- + Full-view support (3.25+)

## Contras

- - Sem escrita concorrente (writer lock)
- - Sem User management
- - Limites em dados grandes
- - Sem rede (local only)
- - Replicação manual

## Casos de Uso

| Appropriado | Inappropriado |
|-------------|---------------|
| App desktop/mobile | App web high-traffic |
| Prototyping | Sistemas distributed |
| Cache local | Analytics massivo |
| Testes | Multi-user server |
| Config local | OLAP |

## Referências

- [SQLite Docs](https://www.sqlite.org/docs.html)
- [SQLite in Python](https://docs.python.org/3/library/sqlite3.html)
- [WAL Mode](https://www.sqlite.org/wal.html)