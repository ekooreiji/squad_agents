# Deploy

Production.

## Heroku

```bash
pip install gunicorn whitenoise
```

```python
# settings.py
ALLOWED_HOSTS = ['myapp.herokuapp.com']
```

```bash
# Procfile
web: gunicorn myproject.wsgi
```

```bash
heroku create myapp
git push heroku main
heroku run python manage.py migrate
```

## Render/Railway

```python
# settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ.get('DATABASE_NAME'),
        'USER': os.environ.get('DATABASE_USER'),
        'PASSWORD': os.environ.get('DATABASE_PASSWORD'),
    }
}
```

## Dockerfile

```dockerfile
FROM python:3.12-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .

EXPOSE 8000

CMD ["gunicorn", "myproject.wsgi"]
```

## Static Files

```python
# settings.py
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
MIDDLEWARE = [
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.middleware.security.SecurityMiddleware',
]
```