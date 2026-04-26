from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    class Meta:
        db_table = 'users'

user = User.objects.create(name='John', email='john@example.com')
users = User.objects.all()
User.objects.filter(name='John').delete()