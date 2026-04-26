# Blueprints

Modular apps.

## Structure

```
project/
├── app.py
├── extensions.py
├── models/
│   └── __init__.py
├── templates/
│   └── index.html
└── users/
    ├── __init__.py
    ├── routes.py
    └── templates/
        └── users.html
```

## Create Blueprint

```python
# users/__init__.py
from flask import Blueprint

users_bp = Blueprint('users', __name__,
                     template_folder='templates',
                     url_prefix='/users')

from . import routes
```

## Register

```python
# app.py
from flask import Flask
from users import users_bp

app = Flask(__name__)
app.register_blueprint(users_bp)
```

## Routes

```python
# users/routes.py
from . import users_bp

@users_bp.route('/')
def list():
    return {'users': []}
```