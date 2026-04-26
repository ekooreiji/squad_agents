# Templates

Jinja2.

## Setup

```python
app.config['TEMPLATES_AUTO_RELOAD'] = True
```

## Template

```html
<!-- templates/index.html -->
<!DOCTYPE html>
<html>
<body>
    <h1>{{ title }}</h1>
    {% for user in users %}
        <p>{{ user.name }}</p>
    {% endfor %}
</body>
</html>
```

## Render

```python
from flask import render_template

@app.route('/')
def index():
    users = [{'name': 'João'}, {'name': 'Maria'}]
    return render_template('index.html', title='Users', users=users)
```

## Layout

```html
<!-- templates/base.html -->
<!DOCTYPE html>
<html>
<body>
    {% block content %}{% endblock %}
</body>
</html>

<!-- templates/home.html -->
{% extends 'base.html' %}
{% block content %}
    <h1>Home</h1>
{% endblock %}
```