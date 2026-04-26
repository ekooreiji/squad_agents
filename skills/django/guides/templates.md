# Templates

Template engine.

## Templates Directory

```
blog/
├── templates/
│   └── blog/
│       └── post_list.html
```

## Template

```html
<!-- blog/templates/blog/post_list.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Blog</title>
</head>
<body>
    <h1>Posts</h1>
    <% for post in posts %>
        <h2><%= post.title %></h2>
        <p><%= post.content %></p>
    <% endfor %>
</body>
</html>
```

## Template Tags

```html
<% for post in posts %>
    <h2><%= post.title %></h2>
<% empty %>
    <p>Nenhum post encontrado.</p>
<% endfor %>

<% if user.is_authenticated %>
    <a href="/post/new/">Novo Post</a>
<% endif %>

<%= post.created_at|date:"d/m/Y" %>

<%= post.get_status_display %>
```

## Context

```python
def post_list(request):
    posts = Post.objects.all()
    return render(request, 'blog/post_list.html', {
        'posts': posts,
        'user': request.user
    })
```

## Base Template

```html
<!-- templates/base.html -->
<!DOCTYPE html>
<html>
<head>
    <title><% block title %>Blog<% endblock %></title>
</head>
<body>
    <header>
        <% block header %><% endblock %>
    </header>
    <main>
        <% block content %><% endblock %>
    </main>
</body>
</html>
```