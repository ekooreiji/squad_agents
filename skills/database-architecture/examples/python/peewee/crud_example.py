from peewee import SqliteDatabase, CharField, Model

db = SqliteDatabase('demo.db')

class User(Model):
    name = CharField(max_length=100)
    email = CharField(max_length=255, unique=True)

    class Meta:
        database = db

db.create_tables([User])

user = User.create(name='John', email='john@example.com')
users = User.select()
User.get(User.name == 'John').delete_instance()