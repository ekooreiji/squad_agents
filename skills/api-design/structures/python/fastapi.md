# FastAPI Structure

## Project Structure

```
src/
├── main.py              # App entry point
├── config.py            # Configuration
├── database.py          # Database setup
├── models/
│   ├── __init__.py
│   ├── user.py
│   └── base.py
├── schemas/
│   ├── __init__.py
│   ├── user.py
│   └── response.py
├── routers/
│   ├── __init__.py
│   └── user_router.py
├── middleware/
│   ├── __init__.py
│   └── auth.py
└── utils/
    ├── __init__.py
    └── security.py
```

## Main App

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="User API",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health_check():
    return {"status": "ok"}
```

## Router Pattern

```python
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

router = APIRouter(prefix="/users", tags=["users"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("")
def get_users(db: Session = Depends(get_db)):
    return {"data": []}

@router.get("/{user_id}")
def get_user(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(404, "User not found")
    return user

@router.post("")
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    return user
```

## Error Handling

```python
from fastapi import HTTPException

@app.exception_handler(HTTPException)
async def http_exception_handler(request, exc):
    return JSONResponse(
        status_code=exc.status_code,
        content={"error": exc.detail}
    )

@app.exception_handler(Exception)
async def general_exception_handler(request, exc):
    return JSONResponse(
        status_code=500,
        content={"error": "Internal server error"}
    )
```

## Authentication

```python
from fastapi.security import HTTPBearer, OAuth2PasswordBearer

security = HTTPBearer()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def get_current_user(token: str = Depends(security)):
    payload = jwt.decode(token, SECRET_KEY)
    user_id = payload.get("sub")
    return db.query(User).filter(User.id == user_id).first()
```

## Pagination

```python
from typing import Optional

@router.get("")
def get_users(
    page: int = 1,
    limit: int = 20,
    db: Session = Depends(get_db)
):
    offset = (page - 1) * limit
    users = db.query(User).offset(offset).limit(limit).all()
    total = db.query(User).count()
    return {
        "data": users,
        "pagination": {
            "page": page,
            "limit": limit,
            "total": total,
            "pages": (total + limit - 1) // limit
        }
    }
```