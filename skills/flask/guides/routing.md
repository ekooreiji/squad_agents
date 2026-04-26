# Routing

Routes e methods.

```python
from flask import Flask, request, jsonify

app = Flask(__name__)

# GET
@app.route('/users', methods=['GET'])
def get_users():
    return jsonify([{'id': 1, 'name': 'João'}])

# POST
@app.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    return jsonify(data), 201

# PUT
@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    data = request.get_json()
    return jsonify({'id': user_id, **data})

# DELETE
@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    return jsonify({'deleted': True})

# Parameters
@app.route('/users/<user_id>')
def get_user(user_id):
    return jsonify({'id': user_id})

# Query strings
@app.route('/search')
def search():
    query = request.args.get('q')
    return jsonify({'results': f'Found: {query}'})
```

## JSON Response

```python
from flask import jsonify

@app.route('/api')
def api():
    return jsonify({'message': 'OK', 'status': 200})
```