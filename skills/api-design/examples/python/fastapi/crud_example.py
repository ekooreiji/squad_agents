from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from typing import List, Optional

app = FastAPI(title="User API")

users_db = []
next_id = 1

class UserCreate(BaseModel):
    name: str
    email: EmailStr

class User(BaseModel):
    id: int
    name: str
    email: str

@app.get("/users", response_model=dict)
def get_users(page: int = 1, limit: int = 20):
    return {
        "data": users_db,
        "pagination": {"page": page, "limit": limit, "total": len(users_db)}
    }

@app.get("/users/{user_id}", response_model=dict)
def get_user(user_id: int):
    user = next((u for u in users_db if u["id"] == user_id), None)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return {"data": user}

@app.post("/users", response_model=dict, status_code=201)
def create_user(user: UserCreate):
    global next_id
    new_user = {"id": next_id, "name": user.name, "email": user.email}
    users_db.append(new_user)
    next_id += 1
    return {"data": new_user}

@app.patch("/users/{user_id}", response_model=dict)
def update_user(user_id: int, user: UserCreate):
    for u in users_db:
        if u["id"] == user_id:
            u["name"] = user.name
            u["email"] = user.email
            return {"data": u}
    raise HTTPException(status_code=404, detail="User not found")

@app.delete("/users/{user_id}", status_code=204)
def delete_user(user_id: int):
    global users_db
    users_db = [u for u in users_db if u["id"] != user_id]