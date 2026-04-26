# Deploy

Uvicorn, Docker.

## Uvicorn

```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

## Gunicorn

```bash
pip install gunicorn
gunicorn app:app -w 4 -k uvicorn.workers.UvicornWorker
```

## Dockerfile

```dockerfile
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["uvicorn", "app:app", "--host", "0.0.0.0"]
```

## Render/Railway

```python
# requirements.txt
fastapi
uvicorn[standard]
sqlalchemy
aiosqlite
```

```bash
uvicorn app:app --host 0.0.0.0 --port $PORT
```