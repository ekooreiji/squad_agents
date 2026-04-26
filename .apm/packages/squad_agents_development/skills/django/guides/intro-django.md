# Django

Full-stack Python.

## Install

```bash
pip install django
django-admin startproject myproject
cd myproject
python manage.py runserver
```

## First App

```bash
python manage.py startapp blog
```

## Settings

```python
# settings.py
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'blog',
]
```

## URLs

```python
# myproject/urls.py
from django.urls import path
from blog import views

urlpatterns = [
    path('', views.home, name='home'),
]
```

## Django vs DRF

| Django | DRF |
|--------|-----|
| Template responses | JSON responses |
| Forms | Serializers |
| django.contrib.auth | Token/JWT |
| TemplateView | APIView |