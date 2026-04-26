# MySQL

## Visão Geral

MySQL é o SGBD relacional mais popular para aplicações web, parte do stack LAMP/WAMP.

## Características

| Característica | Descrição |
|---------------|-----------|
| **ACID** | InnoDB (transações), MyISAM (legacy) |
| **Tipos** | JSON, espacial, enum, set |
| **Particionamento** | Range, list, hash, key |
| **Replicação** | Master-slave, group replication |
| **Cluster** | MySQL NDB Cluster |

## Instalação

### macOS
```bash
brew install mysql
brew services start mysql
```

### Docker
```bash
docker run -d \
  --name mysql \
  -e MYSQL_ROOT_PASSWORD=secret \
  -e MYSQL_DATABASE=mydb \
  -p 3306:3306 \
  mysql:8
```

### Conexão
```bash
mysql -h localhost -u root -p mydb
```

## Tipos de Dados

### Numéricos
```sql
TINYINT, SMALLINT, MEDIUMINT, INT, BIGINT
DECIMAL(p, s)
FLOAT, DOUBLE
BIT(n)
```

### String
```sql
CHAR(n), VARCHAR(n)
BINARY(n), VARBINARY(n)
TINYTEXT, TEXT, MEDIUMTEXT, LONGTEXT
ENUM, SET
```

### Data/hora
```sql
DATE, DATETIME, TIMESTAMP
TIME
YEAR
```

### JSON
```sql
CREATE TABLE config (
    id INT AUTO_INCREMENT PRIMARY KEY,
    settings JSON
);

INSERT INTO config (settings) VALUES
('{"theme": "dark", "lang": "pt-BR"}');

SELECT settings->>'$.theme' as theme FROM config;
```

## Engines

### InnoDB (Recomendado)
```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
) ENGINE=InnoDB;
```

- Transações ACID
- Row-level locking
- Foreign keys
- Crash recovery
- Clustered index

### MyISAM (Legacy)
- Full-text index
- SELECTs rápidos
- Sem transações
- Table-level locking

## Índices

```sql
-- B-tree (padrão)
CREATE INDEX idx_email ON users(email);

-- Unique
ALTER TABLE users ADD UNIQUE INDEX idx_email (email);

-- Full-text
ALTER TABLE articles ADD FULLTEXT INDEX idx_content (title, content);

-- Spatial
CREATE SPATIAL INDEX idx_location ON locations (geom);
```

## Constraints

```sql
-- Primary Key
ALTER TABLE users ADD PRIMARY KEY (id);

-- Unique
ALTER TABLE users ADD CONSTRAINT unique_email UNIQUE (email);

-- Foreign Key
ALTER TABLE orders ADD CONSTRAINT fk_user
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE;

-- Check (MySQL 8.0.16+)
ALTER TABLE orders ADD CONSTRAINT chk_amount
    CHECK (amount > 0);
```

## Window Functions (MySQL 8.0+)

```sql
-- Ranking
SELECT name, salary,
       RANK() OVER (ORDER BY salary DESC) as rank,
       DENSE_RANK() OVER (ORDER BY salary DESC) as dense_rank
FROM employees;

-- Running total
SELECT id, amount,
       SUM(amount) OVER (ORDER BY id) as running_total
FROM orders;

-- Partition
SELECT department, name, salary,
       AVG(salary) OVER w as dept_avg
FROM employees
WINDOW w AS (PARTITION BY department);
```

## CTE (MySQL 8.0+)

```sql
-- Recursive
WITH RECURSIVE org_chart AS (
    SELECT id, name, manager_id, 1 as level
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    SELECT e.id, e.name, e.manager_id, oc.level + 1
    FROM employees e
    JOIN org_chart oc ON e.manager_id = oc.id
)
SELECT * FROM org_chart;
```

## JSON Functions

```sql
-- Extract
SELECT JSON_EXTRACT(settings, '$.theme') FROM config;
SELECT settings->>'$.theme' FROM config;

-- Update
UPDATE config
SET settings = JSON_SET(settings, '$.lang', 'en-US')
WHERE id = 1;

-- Array
SELECT JSON_ARRAY(1, 2, 3);
SELECT JSON_OBJECT('key', 'value');
```

## Connection Pool (Python)

```python
from sqlalchemy import create_engine

engine = create_engine(
    'mysql+pymysql://user:pass@localhost/mydb',
    pool_size=5,
    max_overflow=10,
    pool_pre_ping=True
)
```

## Replicação

### Master-Slave
```
┌────────┐         ┌────────┐
│ Master │───────►│ Slave  │
│ (:3306)│ binlog │ (:3307)│
└────────┘         └────────┘
```

```ini
# my.cnf (Master)
[mysqld]
server-id = 1
log_bin = /var/log/mysql/mysql-bin
binlog_format = ROW
```

## Prós

- + Popular, vasta documentação
- + Integração com ferramentas web
- + Replicação simples
- + JSON support (MySQL 5.7+)
- + Performance em reads

## Contras

- - Menor feature set que PostgreSQL
- - JSON não tão potente quanto PostgreSQL
- - Locking issues em high write
- - Full-text apenas MyISAM (legacy) ou InnoDB (8.0+)

## Referências

- [MySQL Docs](https://dev.mysql.com/doc/refman/8.0/en/)
- [JSON Functions](https://dev.mysql.com/doc/refman/8.0/en/json.html)
- [InnoDB](https://dev.mysql.com/doc/refman/8.0/en/innodb.html)