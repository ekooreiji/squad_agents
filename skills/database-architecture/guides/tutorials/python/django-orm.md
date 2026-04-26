# Django ORM Tutorial

## Visão Geral

Django ORM é o ORM integrado ao Django, simples e poderoso para aplicações Django.

## Configuração

### settings.py
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'mydb',
        'USER': 'user',
        'PASSWORD': 'pass',
        'HOST': 'localhost',
        'PORT': '5432',
        'CONN_MAX_AGE': 600,
    }
}
```

### Models.py
```python
from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'users'
        ordering = ['-created_at']

    def __str__(self):
        return self.email
```

## Field Types

### Basic Fields
```python
class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField(default=0)
    is_available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
```

### Relationships
```python
class Author(models.Model):
    name = models.CharField(max_length=100)

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(
        Author,
        on_delete=models.CASCADE,
        related_name='books'
    )
    price = models.DecimalField(max_digits=10, decimal_places=2)

class Student(models.Model):
    name = models.CharField(max_length=100)
    courses = models.ManyToManyField('Course', related_name='students')

class Course(models.Model):
    name = models.CharField(max_length=100)
```

### Special Fields
```python
class Profile(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name='profile'
    )
    bio = models.TextField(blank=True)
    avatar = models.ImageField(upload_to='avatars/', blank=True)
    birth_date = models.DateField(null=True, blank=True)
```

## CRUD Operations

### Create
```python
# Method 1: create()
user = User.objects.create(
    name='John',
    email='john@example.com'
)

# Method 2: save()
user = User(name='John', email='john@example.com')
user.save()

# Method 3: bulk_create()
User.objects.bulk_create([
    User(name='Alice', email='alice@example.com'),
    User(name='Bob', email='bob@example.com')
])
```

### Read
```python
# Get by ID
user = User.objects.get(id=1)

# Get or 404
from django.shortcuts import get_object_or_404
user = get_object_or_404(User, id=1)

# All
users = User.objects.all()

# Filter
users = User.objects.filter(is_active=True)
users = User.objects.exclude(is_active=False)

# Filter operators
users = User.objects.filter(name__icontains='john')
users = User.objects.filter(age__gte=18)
users = User.objects.filter(created_at__year=2024)

# Order
users = User.objects.order_by('-created_at')

# First/Last
user = User.objects.first()
user = User.objects.last()

# Exists
has_users = User.objects.exists()
```

### Update
```python
# Update single
user = User.objects.get(id=1)
user.name = 'John Updated'
user.save()

# Update multiple
User.objects.filter(is_active=False).update(status='inactive')

# Update using F
from django.db.models import F
Product.objects.all().update(stock=F('stock') - 1)
```

### Delete
```python
# Delete single
user = User.objects.get(id=1)
user.delete()

# Delete multiple
User.objects.filter(is_active=False).delete()
```

## Relationships

### ForeignKey
```python
class Post(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,  # CASCADE, PROTECT, SET_NULL, SET_DEFAULT
        related_name='posts'
    )

# Access
post = Post.objects.first()
author = post.author  # autor do post
posts = author.posts.all()  # posts do autor

# Create through relationship
user = User.objects.get(id=1)
Post.objects.create(title='Hello', author=user)
```

### ManyToMany
```python
class Student(models.Model):
    name = models.CharField(max_length=100)
    courses = models.ManyToManyField('Course', related_name='students')

class Course(models.Model):
    name = models.CharField(max_length=100)

# Add
student.courses.add(course)
student.courses.add(c1, c2, c3)

# Remove
student.courses.remove(course)

# Clear
student.courses.clear()

# Query through
courses = student.courses.all()
students = course.students.all()
```

## Queries Avançadas

### Q Objects
```python
from django.db.models import Q

# OR
User.objects.filter(Q(is_active=True) | Q(role='admin'))

# AND (implicit)
User.objects.filter(is_active=True, role='admin')

# NOT
User.objects.filter(~Q(is_active=False))

# Complex
User.objects.filter(
    Q(is_active=True) & ~Q(role='banned')
)
```

### Aggregation
```python
from django.db.models import Avg, Sum, Count, Max, Min

# Count
User.objects.count()

# Aggregate
from django.db.models import Avg
Product.objects.aggregate(Avg('price'))

# Group by
from django.db.models import Count
Author.objects.annotate(
    book_count=Count('book')
).order_by('-book_count')

# Annotate
User.objects.annotate(
    post_count=Count('post')
).filter(post_count__gt=5)
```

### Subqueries
```python
from django.db.models import Subquery, OuterRef

# Subquery
User.objects.annotate(
    latest_post=Subquery(
        Post.objects.filter(
            author=OuterRef('pk')
        ).order_by('-created_at').values('title')[:1]
    )
)

# Exists
User.objects.filter(
    posts__isnull=False
).distinct()
```

### Raw SQL
```python
User.objects.raw('SELECT * FROM users WHERE is_active = %s', [True])

# Using connection
from django.db import connection
with connection.cursor() as cursor:
    cursor.execute('SELECT * FROM users')
```

## Transactions

```python
from django.db import transaction

# Atomic
with transaction.atomic():
    user = User.objects.create(name='John')
    Post.objects.create(title='Hello', author=user)

# Select for update
with transaction.atomic():
    user = User.objects.select_for_update().get(id=1)
    # user locked
```

## Migrations

```bash
# Create migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Show SQL
python manage.py sqlmigrate app_name 0001

# Check status
python manage.py showmigrations
```

## Managers Customizados

```python
class UserManager(models.Manager):
    def active(self):
        return self.filter(is_active=True)

    def admins(self):
        return self.filter(role='admin')

class User(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=50, default='user')
    is_active = models.BooleanField(default=True)

    objects = UserManager()

# Usage
User.objects.active()
User.objects.admins()
```

## Signals

```python
from django.db.models.signals import post_save, pre_delete
from django.dispatch import receiver

@receiver(post_save, sender=User)
def user_created(sender, instance, created, **kwargs):
    if created:
        print(f'User {instance.email} created')

@receiver(pre_delete, sender=User)
def user_deleted(sender, instance, **kwargs):
    print(f'User {instance.email} deleted')
```

## Prós

- + Simples e integrado ao Django
- + Migrações automáticas
- +Admin Django nativo
- + Queries читаveis

## Contras

- - Acoplado ao Django
- - Menos flexível que SQLAlchemy
- - Curva de aprendizado em queries complexas

## Referências

- [Django ORM](https://docs.djangoproject.com/en/stable/topics/db/)
- [Models](https://docs.djangoproject.com/en/stable/topics/db/models/)
- [Queries](https://docs.djangoproject.com/en/stable/topics/db/queries/)