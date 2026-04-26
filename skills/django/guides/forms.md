# Forms

Forms.

## ModelForm

```python
# blog/forms.py
from django import forms
from .models import Post

class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'content', 'published']
        widgets = {
            'content': forms.Textarea(attrs={'rows': 4}),
        }
```

## View with Form

```python
from django.shortcuts import render, redirect
from .forms import PostForm

def post_create(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.save()
            return redirect('post_detail', pk=post.pk)
    else:
        form = PostForm()
    return render(request, 'blog/post_form.html', {'form': form})
```

## Form Validation

```python
class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['title', 'content']

    def clean_title(self):
        title = self.cleaned_data['title']
        if 'django' not in title.lower():
            raise forms.ValidationError('Title must contain "django"')
        return title
```

## Templates

```html
<%= form.as_p %>

<%= form.non_field_errors %>

<% for field in form %>
    <%= field.label_tag %>
    <%= field %>
    <%= field.errors %>
<% endfor %>
```