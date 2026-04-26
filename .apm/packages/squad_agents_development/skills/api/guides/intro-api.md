# Conceitos de API

Interfaces de programação.

## Types

### REST
- Resource-based
- HTTP verbs (GET, POST, PUT, DELETE)
- Stateless

### GraphQL
- Single endpoint
- Queries + Mutations
- Strongly typed schema

### gRPC
- Protocol Buffers
- Bi-directional streaming
- HTTP/2

## REST Maturity (Richardson)

| Level | Description |
|-------|-------------|
| 1 | /resources |
| 2 | HTTP verbs |
| 3 | HATEOAS |
| 4 | Hypermedia controls |

## Example: REST (FastAPI)

```python
from fastapi import FastAPI

app = FastAPI()

@app.get('/posts/{post_id}')
async def get_post(post_id: int):
    return {'id': post_id, 'title': 'Post'}

@app.post('/posts')
async def create_post(post: PostCreate):
    return {'id': 1, **post.model_dump()}
```

## Example: GraphQL (Graphene)

```python
import graphene

class Query(graphene.ObjectType):
    hello = graphene.String()

schema = graphene.Schema(query=Query)
```

## Example: gRPC (proto)

```protobuf
syntax = "proto3";

service UserService {
    rpc GetUser(GetUserRequest) returns (User);
}

message GetUserRequest {
    int32 id = 1;
}

message User {
    int32 id = 1;
    string name = 2;
}
```