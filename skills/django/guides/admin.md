# Admin

Django Admin.

## Register Model

```python
# blog/admin.py
from django.contrib import admin
from .models import Post

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'author', 'created_at', 'published']
    list_filter = ['published', 'created_at']
    search_fields = ['title', 'content']
    prepopulated_fields = {'slug': ('title',)}
    date_hierarchy = 'created_at'
```

## Actions

```python
class PostAdmin(admin.ModelAdmin):
    actions = ['publish_posts']

    def publish_posts(self, request, queryset):
        queryset.update(published=True)
    publish_posts.short_description = 'Publicar posts selecionados'
```

## Custom Admin

```python
class PostAdmin(admin.ModelAdmin):
    fields = ('title', 'slug', 'content', 'author', 'published')
    fieldsets = (
        ('Content', {
            'fields': ('title', 'slug', 'content')
        }),
        ('Publishing', {
            'fields': ('author', 'published', 'created_at')
        }),
    )
```