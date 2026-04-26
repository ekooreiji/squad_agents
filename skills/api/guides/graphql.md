# GraphQL

Queries e mutations.

## Schema

```python
import graphene

class Post(graphene.ObjectType):
    id = graphene.ID()
    title = graphene.String()
    content = graphene.String()
    author = graphene.Field(lambda: User)

class User(graphene.ObjectType):
    id = graphene.ID()
    name = graphene.String()
    posts = graphene.List(lambda: Post)

class Query(graphene.ObjectType):
    post = graphene.Field(Post, id=graphene.ID())
    posts = graphene.List(Post)
    user = graphene.Field(User, id=graphene.ID())

    def resolve_post(self, info, id):
        return Post(id=id, title='Post')

    def resolve_posts(self, info):
        return [Post(id=1, title='Post 1')]

    def resolve_user(self, info, id):
        return User(id=id, name='User')

class CreatePost(graphene.Mutation):
    class Arguments:
        title = graphene.String(required=True)
        content = graphene.String()

    post = graphene.Field(Post)

    def mutate(self, info, title, content=''):
        post = Post(id=1, title=title, content=content)
        return CreatePost(post=post)

class Mutation(graphene.ObjectType):
    create_post = CreatePost.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)
```

## Queries

```graphql
query {
  posts {
    id
    title
    author {
      name
    }
  }
}

query {
  post(id: "1") {
    id
    title
  }
}
```

## Mutations

```graphql
mutation {
  createPost(title: "New Post", content: "Content") {
    post {
      id
      title
    }
  }
}
```

## Subscriptions

```python
import asyncio
from strawberry import Subscription, subscription

@subscription
async def on_post_created() -> AsyncGenerator[Post, None]:
    while True:
        await asyncio.sleep(1)
        yield Post(id=1, title='New Post')
```