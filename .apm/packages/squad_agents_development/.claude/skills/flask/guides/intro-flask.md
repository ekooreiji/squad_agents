# Flask

Micro-framework.

## Install

```bash
pip install flask
```

## App

```python
# app.py
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Olá Flask!'

if __name__ == '__main__':
    app.run(debug=True)
```

## Run

```bash
python app.py
# http://127.0.0.1:5000
```

## Config

```python
app.config['SECRET_KEY'] = 'secret'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
```