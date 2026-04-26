from flask import Flask, request, jsonify

app = Flask(__name__)

users_db = []
next_id = 1

@app.route("/users", methods=["GET"])
def get_users():
    page = int(request.args.get("page", 1))
    limit = int(request.args.get("limit", 20))
    return jsonify({
        "data": users_db,
        "pagination": {"page": page, "limit": limit, "total": len(users_db)}
    })

@app.route("/users/<int:user_id>", methods=["GET"])
def get_user(user_id):
    user = next((u for u in users_db if u["id"] == user_id), None)
    if not user:
        return jsonify({"error": "User not found"}), 404
    return jsonify({"data": user})

@app.route("/users", methods=["POST"])
def create_user():
    global next_id
    data = request.get_json()
    new_user = {"id": next_id, "name": data["name"], "email": data["email"]}
    users_db.append(new_user)
    next_id += 1
    return jsonify({"data": new_user}), 201

@app.route("/users/<int:user_id>", methods=["PATCH"])
def update_user(user_id):
    data = request.get_json()
    for u in users_db:
        if u["id"] == user_id:
            u["name"] = data.get("name", u["name"])
            u["email"] = data.get("email", u["email"])
            return jsonify({"data": u})
    return jsonify({"error": "User not found"}), 404

@app.route("/users/<int:user_id>", methods=["DELETE"])
def delete_user(user_id):
    global users_db
    users_db = [u for u in users_db if u["id"] != user_id]
    return "", 204