# Pydantic

Data validation v2.

## Models

```python
from pydantic import BaseModel, ConfigDict

class User(BaseModel):
    id: int | None = None
    name: str
    email: str
    age: int | None = None

# or v2 style
class User(BaseModel):
    model_config = ConfigDict(populate_by_name=True)
    
    id: int | None = None
    name: str
    email: str
```

## Validation

```python
from pydantic import Field

class User(BaseModel):
    name: str = Field(..., min_length=1)
    email: str = Field(..., pattern=r'^[\w\.-]+@[\w\.-]+\.\w+$')
    age: int = Field(default=18, ge=0, le=150)
```

## Nested Models

```python
class Address(BaseModel):
    street: str
    city: str

class User(BaseModel):
    name: str
    address: Address
```

## Response Model

```python
from fastapi import FastAPI
from pydantic import BaseModel

class UserOut(BaseModel):
    id: int
    name: str

app = FastAPI()

@app.get('/users', response_model=list[UserOut])
async def get_users():
    pass
```