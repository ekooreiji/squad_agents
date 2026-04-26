# Scaffolds - Ruby on Rails

Generate CRUD quickly.

## Generate Scaffold

```bash
rails g scaffold User name:string email:string age:integer
rails db:migrate
```

## Generates

- Migration
- Model
- Controller
- Views (index, show, new, edit, _form)
- Helper
- Test
- CSS/JS assets
- Routes

## Routes Created

```ruby
resources :users
# GET /users
# GET /users/:id
# GET /users/new
# POST /users
# GET /users/:id/edit
# PATCH /users/:id
# DELETE /users/:id
```

## Routes Command

```bash
rails routes
```

## Nested Scaffold

```bash
rails g scaffold Post title:string body:text user:references
```

## More Generators

```bash
rails g resource User name:string email:string
rails g controller users index show new
rails g model User name:string email:string
```