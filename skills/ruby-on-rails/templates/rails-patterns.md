# Rails Patterns

## Scaffold

```bash
rails g scaffold Todo title:string done:boolean
```

## Model

```ruby
class Todo < ApplicationRecord
  validates :title, presence: true
end
```

## Controller

```ruby
class TodosController < ApplicationController
  def index
    @todos = Todo.all
  end

  def create
    @todo = Todo.new(todo_params)
    @todo.save
    redirect_to @todo
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :done)
  end
end
```