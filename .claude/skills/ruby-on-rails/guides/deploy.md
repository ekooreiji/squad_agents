# Deploy - Ruby on Rails

Deploy for production.

## Heroku

```bash
heroku create myapp
git push heroku main
heroku run rails db:migrate
```

## Render/Railway

```ruby
# Gemfile
group :production do
  gem 'pg'
  gem 'redis'
end
```

```yaml
# render.yaml
services:
  - type: web
    name: myapp
    buildCommand: bundle install && bundle exec rails db:migrate && bundle exec rails assets:precompile
    startCommand: bundle exec puma -C config/puma.rb
```

## Capistrano

```ruby
# Capfile
require 'capistrano/rails'
```

```bash
cap production deploy
```

## Docker

```dockerfile
FROM ruby:3.2-slim

WORKDIR /app

COPY . .
RUN bundle install

EXPOSE 3000

CMD ["bundle", "exec", "puma"]
```

## Asset Compilation

```bash
RAILS_ENV=production bundle exec rails assets:precompile
```