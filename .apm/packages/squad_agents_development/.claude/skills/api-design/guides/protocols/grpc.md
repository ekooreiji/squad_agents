# gRPC

## Visão Geral

gRPC é um framework de Remote Procedure Call de alta performance que usa Protocol Buffers como linguagem de definição de interface (IDL) e formato de serialização.

## HTTP/2 vs REST

| gRPC | REST |
|------|------|
| HTTP/2 | HTTP/1.1 |
| Binary | JSON/JSON |
| Streaming | Request/Response |
| Generated clients | Manual clients |
| Contract-first | Schema-last |

## Protocol Buffers

### Syntax

```protobuf
syntax = "proto3";

message User {
  string id = 1;
  string name = 2;
  string email = 3;
}

message CreateUserRequest {
  string name = 1;
  string email = 2;
}

message UserResponse {
  User user = 1;
}

service UserService {
  rpc GetUser (GetUserRequest) returns (User);
  rpc CreateUser (CreateUserRequest) returns (UserResponse);
  rpc ListUsers (ListUsersRequest) returns (stream User);
}
```

### Basic Types

```protobuf
// Primitive types
string    // UTF-8 string
int32     // 32-bit integer
int64     // 64-bit integer
float    // 32-bit float
double   // 64-bit float
bool     // boolean
bytes    // arbitrary bytes
```

### Nested Messages

```protobuf
message User {
  string id = 1;
  Profile profile = 2;
}

message Profile {
  string bio = 1;
  string avatar = 2;
}
```

### Enums

```protobuf
enum Role {
  UNKNOWN = 0;
  ADMIN = 1;
  USER = 2;
}

message User {
  Role role = 1;
}
```

### Oneofs

```protobuf
message LoginRequest {
  oneof credential {
    string email = 1;
    string phone = 2;
  }
  string password = 3;
}
```

### Maps

```protobuf
message User {
  map<string, string> metadata = 1;
}
```

## Services

### Unary RPC

```protobuf
rpc GetUser (GetUserRequest) returns (User);
```

### Server Streaming RPC

```protobuf
rpc ListUsers (ListUsersRequest) returns (stream User);
```

### Client Streaming RPC

```protobuf
rpc CreateUsers (stream CreateUserRequest) returns (UserListResponse);
```

### Bidirectional Streaming RPC

```protobuf
rpc Chat (stream ChatMessage) returns (stream ChatMessage);
```

## Implementation

### Proto File

```protobuf
syntax = "proto3";

package user;

service UserService {
  rpc GetUser (GetUserRequest) returns (User);
  rpc CreateUser (CreateUserRequest) returns (User);
  rpc ListUsers (ListUsersRequest) returns (stream User);
}

message GetUserRequest {
  string id = 1;
}

message CreateUserRequest {
  string name = 1;
  string email = 2;
}

message ListUsersRequest {
  int32 page = 1;
  int32 limit = 2;
}

message User {
  string id = 1;
  string name = 2;
  string email = 3;
}
```

### Python Server

```python
import grpc
from concurrent import futures
import user_pb2
import user_pb2_grpc

class UserServiceServicer(user_pb2_grpc.UserServiceServicer):
    def GetUser(self, request, context):
        user = user_pb2.User(
            id=request.id,
            name="John",
            email="john@example.com"
        )
        return user

    def CreateUser(self, request, context):
        user = user_pb2.User(
            id="1",
            name=request.name,
            email=request.email
        )
        return user

    def ListUsers(self, request, context):
        for i in range(request.limit):
            yield user_pb2.User(
                id=str(i),
                name=f"User {i}",
                email=f"user{i}@example.com"
            )

server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
user_pb2_grpc.add_UserServiceServicer_to_server(
    UserServiceServicer(), server
)
server.add_insecure_port('[::]:50051')
server.start()
```

### Node.js Server

```javascript
const protoLoader = require('@grpc/proto-loader');
const grpc = require('grpc');

const packageDefinition = protoLoader.loadSync('user.proto');
const proto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

server.addService(proto.user.UserService.service, {
  getUser: (call, callback) => {
    callback(null, {
      id: call.request.id,
      name: 'John',
      email: 'john@example.com'
    });
  },
  createUser: (call, callback) => {
    callback(null, {
      id: '1',
      name: call.request.name,
      email: call.request.email
    });
  }
});

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
server.start();
```

## Error Handling

```python
from grpc import StatusCode

def GetUser(self, request, context):
    user = self.db.get(request.id)
    if not user:
        context.abort(
            grpc.StatusCode.NOT_FOUND,
            f"User {request.id} not found"
        )
    return user
```

## Metadata (Headers)

```python
# Server
def GetUser(self, request, context):
    # Read metadata
    auth = context.invocation_metadata()
    
    # Add metadata
    metadata = [('authorization', 'Bearer token')]
    context.send_initial_metadata(metadata)
    
    return user
```

```javascript
// Client
const metadata = new grpc.Metadata();
metadata.add('authorization', 'Bearer token');
client.getUser({ id: '1' }, metadata, callback);
```

## Interceptors

```python
class LoggingInterceptor(grpc.ServerInterceptor):
    def intercept_service(self, continuation, handler_call_details):
        print(f"Method: {handler_call_details.method}")
        return continuation(handler_call_details)
```

## Best Practices

| Practice | Description |
|----------|-------------|
| Use proto3 | Latest version, more features |
| Version schema | Add version to package |
| Use enums | For fixed values |
| Avoid breaking changes | Additive only |

## When to Use gRPC

- Microservices communication
- Low latency
- Streaming
- Strongly typed contracts
- Polyglot environments