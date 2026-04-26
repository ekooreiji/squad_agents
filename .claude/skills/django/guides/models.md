# Models

ORM

```python
# blog/models.py
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    published = models.BooleanField(default=False)
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)

    def __str__(self):
        return self.title
```

## Choices

```python
class Status(models.Model):
    DRAFT = 'draft'
    PUBLISHED = 'published'
    STATUS_CHOICES = [
        (DRAFT, 'Draft'),
        (PUBLISHED, 'Published'),
    ]
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default=DRAFT)
```

## Relations

```python
# One-to-Many
class Author(models.Model):
    name = models.CharField(max_length=100)

class Book(models.Model):
    author = models.ForeignKey(Author, on_delete=models.CASCADE)

# Many-to-Many
class Author(models.Model):
    name = models.CharField(max_length=100)

class Book(models.Model):
    authors = models.ManyToManyField(Author)
```

## Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```