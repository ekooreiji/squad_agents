# MVC - Ruby on Rails

Model-View-Controller pattern.

## Model
```ruby
class User < ApplicationRecord
  validates :name, presence: true
  has_many :posts
end
```

## View (app/views/users/index.html.erb)
```erb
<h1>Users</h1>
<% @users.each do |user| %>
  <p><%= user.name %></p>
<% end %>
```

## Controller
```ruby
class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to @user
    else
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
```