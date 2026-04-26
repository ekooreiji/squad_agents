# PostgreSQL

Relational database.

## Install

```bash
# Ubuntu
sudo apt update
sudo apt install postgresql

# macOS
brew install postgresql

# Start
sudo systemctl start postgresql
```

## Connect

```bash
psql -U postgres
# or
psql -h localhost -U postgres -d mydb
```

## Create Database

```sql
CREATE DATABASE myapp;
\c myapp
```

## psql Commands

```sql
\dt  -- list tables
\d   -- describe
\du  -- list users
\l   -- list databases
\q   -- quit
```

## GUI Tools

- pgAdmin
- DBeaver
- TablePlus