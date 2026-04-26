# Django ORM Structure

## Project Structure

```
myproject/
├── myproject/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── apps/
│   ├── users/
│   │   ├── migrations/
│   │   ├── __init__.py
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── serializers.py  # DRF
│   │   ├── urls.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   └── management/
│   │       └── commands/
│   │           └── init_database.py
│   └── posts/
├── templates/
├── static/
├── manage.py
└── requirements.txt
```

## Models Convention

```python
from django.db import models

class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

class User(TimestampedModel):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        db_table = 'users'
        ordering = ['-created_at']

    def __str__(self):
        return self.email

class Post(TimestampedModel):
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='posts'
    )

    class Meta:
        db_table = 'posts'

    def __str__(self):
        return self.title
```

## Managers

```python
class UserManager(models.Manager):
    def active(self):
        return self.filter(is_active=True)

    def by_domain(self, domain):
        return self.filter(email__endswith=domain)

class User(models.Model):
    # ...
    objects = UserManager()
```

## Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

## Admin

```python
from django.contrib import admin
from .models import User

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'is_active', 'created_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['name', 'email']
    ordering = ['-created_at']
```