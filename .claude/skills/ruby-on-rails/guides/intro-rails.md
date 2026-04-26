# Ruby on Rails (Conceitos)

Framework full-stack Ruby.

## Install Rails

```bash
gem install rails
rails new myapp
cd myapp
rails server
```

## Estrutura

```
app/
├── controllers/
├── models/
└── views/
config/
db/
```

## Conventions over Configuration

- naming: snake_case
- plural: Controller, singular: Model
- RESTful routes

## MVC Pattern

- Model: Database
- View: HTML, ERB, Turbo
- Controller: Lógica

## Rails 7

- Hotwire (Turbo, Stimulus)
- Import maps
- No more Sprockets default

## Versions

- Ruby 3.x + Rails 7.x

```ruby
# Gemfile
ruby '3.2.0'
gem 'rails', '~> 7.0'
```

## Commands

```bash
rails g scaffold User name:string email:string
rails db:migrate
rails routes
rails c  # console
```