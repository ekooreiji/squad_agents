# Models - Ruby on Rails

ActiveRecord ORM.

## Schema

```ruby
class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.timestamps
    end
  end
end
```

## Model

```ruby
class User < ApplicationRecord
  validates :name, presence: true
  validates :email, uniqueness: true
end
```

## Associations

```ruby
class User < ApplicationRecord
  has_many :posts
end

class Post < ApplicationRecord
  belongs_to :user
end
```

## CRUD

```ruby
# Create
User.create(name: 'João', email: 'joao@exemplo.com')

# Read
User.find(1)
User.all
User.where(name: 'João')

# Update
user = User.find(1)
user.update(name: 'Maria')

# Delete
user.destroy
```

## Query Methods

```ruby
User.where(name: 'João').order(created_at: :desc).limit(10)
User.where('name LIKE ?', '%João%')
User.includes(:posts).where(posts: { published: true })
```