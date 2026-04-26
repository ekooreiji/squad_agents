from sqlalchemy import Column, Integer, String, create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100))
    email = Column(String(255), unique=True)

engine = create_engine('sqlite:///demo.db')
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)

session = Session()

session.add(User(name='John', email='john@example.com'))
session.commit()

users = session.query(User).all()
print(users)

session.query(User).filter(User.name == 'John').delete()
session.commit()