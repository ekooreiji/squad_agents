# Deploy

Production.

## Gunicorn

```bash
pip install gunicorn
gunicorn app:app
```

## Dockerfile

```dockerfile
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["gunicorn", "app:app"]
```

## Render/Railway

```python
# app.py
import os
DATABASE_URL = os.environ.get('DATABASE_URL', 'sqlite:///db.sqlite')
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
```

## Logging

```python
import logging
logging.basicConfig(level=logging.INFO)
```