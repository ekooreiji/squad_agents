# FastAPI

Modern async.

## Install

```bash
pip install fastapi uvicorn
```

## App

```python
from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def hello():
    return {'message': 'Olá FastAPI!'}
```

## Run

```bash
uvicorn app:app --reload
# http://127.0.0.1:8000

# Docs: http://127.0.0.1:8000/docs
# Redoc: http://127.0.0.1:8000/redoc
```

## Async

```python
@app.get('/users')
async def get_users():
    return [{'id': 1, 'name': 'João'}]
```