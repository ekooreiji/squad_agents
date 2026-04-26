# Views - Ruby on Rails

Templates ERB e Turbo.

## ERB

```erb
<h1><%= @user.name %></h1>

<%= form_for(@user) do |f| %>
  <%= f.label :name %>
  <%= f.text_field :name %>
  <%= f.submit %>
<% end %>
```

## Turbo (Rails 7)

```erb
<%= turbo_frame_tag 'comments' do %>
  <%= render 'comments/form' %>
<% end %>
```

## Partials

```erb
<%= render 'shared/header' %>

<!-- _header.html.erb -->
<header>Header</header>
```

## Helpers

```ruby
# app/helpers/users_helper.rb
module UsersHelper
  def user_status(user)
    if user.active?
      content_tag(:span, 'Ativo', class: 'badge-success')
    else
      content_tag(:span, 'Inativo')
    end
  end
end
```

## CSS

```css
/* app/assets/stylesheets/application.css */
```