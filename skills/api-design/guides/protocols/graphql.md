# GraphQL

## Visão Geral

GraphQL é uma linguagem de query para APIs e runtime para executar essas queries usando um sistema de tipos que você define para seus dados.

## Query vs Mutation vs Subscription

### Query (Reads)

```graphql
query {
  user(id: "1") {
    id
    name
    email
    posts {
      title
    }
  }
}
```

### Mutation (Writes)

```graphql
mutation {
  createUser(input: {
    name: "John"
    email: "john@example.com"
  }) {
    id
    name
  }
}
```

### Subscription (Real-time)

```graphql
subscription {
  newMessage(roomId: "1") {
    id
    content
    sender {
      name
    }
  }
}
```

## Schema Definition

### Types

```graphql
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
  createdAt: String!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
  createdAt: String!
}
```

### Input Types

```graphql
input CreateUserInput {
  name: String!
  email: String!
  password: String!
}

input UpdateUserInput {
  name: String
  email: String
}
```

### Enums

```graphql
enum Role {
  ADMIN
  USER
  MODERATOR
}
```

### Scalars

```graphql
scalar DateTime

type User {
  createdAt: DateTime!
}
```

## Queries

### Simple Query

```graphql
query GetUsers {
  users {
    id
    name
  }
}
```

### With Arguments

```graphql
query GetUser {
  user(id: "1") {
    id
    name
  }
}
```

### With Variables

```graphql
query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
  }
}
```

Variables:
```json
{
  "id": "1"
}
```

### Aliases

```graphql
query {
  adminUsers: users(role: ADMIN) {
    id
    name
  }
  regularUsers: users(role: USER) {
    id
    name
  }
}
```

### Fragments

```graphql
fragment UserFields on User {
  id
  name
  email
}

query {
  user(id: "1") {
    ...UserFields
  }
}
```

## Mutations

### Create

```graphql
mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    email
  }
}
```

### Update

```graphql
mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
  updateUser(id: $id, input: $input) {
    id
    name
  }
}
```

### Delete

```graphql
mutation DeleteUser($id: ID!) {
  deleteUser(id: $id) {
    success
  }
}
```

## Nested Mutations

```graphql
mutation CreatePostWithUser {
  createUser(input: { name: "John", email: "john@example.com" }) {
    id
    createPost(input: { title: "Hello" }) {
      id
      title
    }
  }
}
```

## Expressões

### Skip

```graphql
query GetUser($showEmail: Boolean!) {
  user(id: "1") {
    id
    name
    email @skip(if: $showEmail)
  }
}
```

### Include

```graphql
query GetUser($includeEmail: Boolean!) {
  user(id: "1") {
    id
    name
    email @include(if: $includeEmail)
  }
}
```

## Connections (Pagination)

```graphql
{
  users(first: 10, after: "cursor123") {
    edges {
      node {
        id
        name
      }
      cursor
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

## Directives

```graphql
type Query {
  users(admin: Boolean!): [User!]!
}

query GetUsers($admin: Boolean!) {
  users(admin: $admin) {
    id
    name
  }
}
```

## Implementation

### Apollo Server (Node.js)

```javascript
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }
`;

const resolvers = {
  Query: {
    users: () => [],
    user: (_, { id }) => ({ id, name: 'John' }),
  },
  Mutation: {
    createUser: (_, { name, email }) => ({ id: '1', name, email }),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
```

### Strawberry (Python)

```python
import strawberry
from typing import List

@strawberry.type
class User:
    id: strawberry.ID
    name: str
    email: str

@strawberry.type
class Query:
    @strawberry.field
    def users(self) -> List[User]:
        return []

    @strawberry.field
    def user(self, id: strawberry.ID) -> User:
        return User(id=id, name="John", email="john@example.com")

@strawberry.type
class Mutation:
    @strawberry.mutation
    def create_user(self, name: str, email: str) -> User:
        return User(id="1", name=name, email=email)

schema = strawberry.Schema(query=Query, mutation=Mutation)
```

## Prós vs Contras

| GraphQL | REST |
|--------|------|
| + Dados exatos | + Cache HTTP |
| + Multi resources | + Simples |
| + Schema typed | + Stateless |
| - Complexidade | - Over-fetching |
| - File uploads | - N+1 queries |

## Quando Usar GraphQL

- Mobile apps (banda limitada)
- Multiple clients (web, mobile, tv)
- Complex关联 data
- Rapid frontend development