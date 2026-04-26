# Flask Structure

## Project Structure

```
src/
├── app.py              # App factory
├── config.py           # Configuration
├── models/
│   ├── __init__.py
│   └── user.py
├── schemas/
│   ├── __init__.py
│   └── user.py
├── routes/
│   ├── __init__.py
│   └── user_routes.py
├── utils/
│   ├── __init__.py
│   └── security.py
└── extensions.py       # Flask extensions
```

## App Factory

```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db = SQLAlchemy()
migrate = Migrate()

def create_app(config_name="development"):
    app = Flask(__name__)
    
    app.config.from_object(f"config.{config_name.title()}Config")
    
    db.init_app(app)
    migrate.init_app(app, db)
    
    from routes import user_routes
    app.register_blueprint(user_routes.bp)
    
    @app.route("/health")
    def health():
        return {"status": "ok"}
    
    return app
```

## Routes

```python
from flask import Blueprint, request, jsonify
from models.user import User
from extensions import db

bp = Blueprint("users", __name__, url_prefix="/api/v1/users")

@bp.route("", methods=["GET"])
def get_users():
    page = request.args.get("page", 1, type=int)
    limit = request.args.get("limit", 20, type=int)
    
    users = User.query.paginate(page=page, per_page=limit)
    
    return jsonify({
        "data": [user.to_dict() for user in users.items],
        "pagination": {
            "page": page,
            "limit": limit,
            "total": users.total
        }
    })

@bp.route("/<int:user_id>", methods=["GET"])
def get_user(user_id):
    user = User.query.get_or_404(user_id)
    return jsonify(user.to_dict())

@bp.route("", methods=["POST"])
def create_user():
    data = request.get_json()
    user = User(**data)
    db.session.add(user)
    db.session.commit()
    return jsonify(user.to_dict()), 201
```

## Error Handling

```python
from flask import jsonify

@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Not found"}), 404

@app.errorhandler(500)
def internal_error(error):
    db.session.rollback()
    return jsonify({"error": "Internal error"}), 500
```

## Pagination

```python
def paginate(query, page, limit):
    return query.paginate(page=page, per_page=limit)

def paginated_response(query, page, limit):
    pagination = paginate(query, page, limit)
    return {
        "data": [item.to_dict() for item in pagination.items],
        "pagination": {
            "page": pagination.page,
            "limit": pagination.per_page,
            "total": pagination.total,
            "pages": pagination.pages
        }
    }
```