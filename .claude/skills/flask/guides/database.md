# Database

SQLAlchemy.

## Install

```bash
pip install flask-sqlalchemy
```

## Setup

```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
db = SQLAlchemy(app)
```

## Model

```python
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True)

    def to_dict(self):
        return {'id': self.id, 'name': self.name}
```

## Create

```python
with app.app_context():
    db.create_all()

# or
db.create_all(app=app)
```

## CRUD

```python
# Create
user = User(name='João', email='joao@x.com')
db.session.add(user)
db.session.commit()

# Read
users = User.query.all()
user = User.query.get(1)
user = User.query.filter_by(name='João').first()

# Update
user.name = 'Maria'
db.session.commit()

# Delete
db.session.delete(user)
db.session.commit()
```

## PostgreSQL

```python
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://user:pass@localhost/dbname'
```