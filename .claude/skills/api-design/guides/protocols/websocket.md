# WebSockets

## Visão Geral

WebSocket é um protocolo de comunicação bidirecional para comunicação em tempo real cliente-servidor.

## Diferença HTTP vs WebSocket

| HTTP | WebSocket |
|------|---------|
| Request/Response | Bidirecional |
| stateless | stateful |
| Short-lived | Persistent |
| Unidirecional | Full duplex |

## Handshake

```
HTTP/1.1 GET /ws HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

## Client

```javascript
const ws = new WebSocket('wss://api.example.com/ws');

ws.onopen = () => {
  console.log('Connected');
  ws.send(JSON.stringify({ type: 'subscribe', channel: 'updates' }));
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log(data);
};

ws.onclose = () => {
  console.log('Disconnected');
};

ws.onerror = (error) => {
  console.error(error);
};
```

## Server (ws library)

```javascript
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws, req) => {
  console.log('Client connected');
  
  ws.on('message', (message) => {
    const data = JSON.parse(message);
    handleMessage(ws, data);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

function handleMessage(ws, data) {
  switch (data.type) {
    case 'subscribe':
      ws.subscriptions = data.channels;
      break;
    case 'message':
      broadcast(data);
      break;
  }
}

function broadcast(message) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
}
```

## Python (websockets)

```python
import asyncio
import websockets
import json

async def echo(websocket, path):
    async for message in websocket:
        data = json.loads(message)
        await websocket.send(json.dumps(data))

asyncio.run(websockets.serve(echo, "localhost", 8080))
```

## FastAPI with WebSockets

```python
from fastapi import FastAPI, WebSocket
from starlette.websockets import WebSocketState

app = FastAPI()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_text()
            await websocket.send_text(f"Echo: {data}")
    except Exception:
        pass
```

## NestJS WebSockets

```typescript
@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  handleEvent(client: Socket, data: string): string {
    return data;
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, data: string): void {
    this.server.emit('events', data);
  }

  afterInit(server: Server): void {
    console.log('Init');
  }

  handleDisconnect(client: Socket): void {
    console.log('Disconnected');
  }
}
```

## Frame Types

| Opcode | Meaning |
|--------|---------|
| 0x0 | Continuation |
| 0x1 | Text |
| 0x2 | Binary |
| 0x8 | Close |
| 0x9 | Ping |
| 0xA | Pong |

## Heartbeat

```javascript
setInterval(() => {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify({ type: 'ping' }));
  }
}, 30000);

ws.on('pong', () => {
  console.log('Pong received');
});
```

## Rooms/Channels

```javascript
const rooms = new Map();

function joinRoom(ws, roomId) {
  if (!rooms.has(roomId)) {
    rooms.set(roomId, new Set());
  }
  rooms.get(roomId).add(ws);
}

function leaveRoom(ws, roomId) {
  rooms.get(roomId)?.delete(ws);
}

function broadcastRoom(roomId, message) {
  rooms.get(roomId)?.forEach((client) => {
    client.send(JSON.stringify(message));
  });
}
```

##SSL/TLS

```
wss://api.example.com/ws
```

## Use Cases

- Chat em tempo real
- Notificações push
- Colaboração em tempo real
- Live updates
- Streaming de dados
- IoT updates

## Best Practices

| Practice | Description |
|----------|-------------|
| Reconnect logic | Auto-reconnect on disconnect |
| Heartbeat | Keep connection alive |
| Rate limiting | Prevent spam |
| Authentication | Validate on connect |
| SSL/TLS | Always use wss:// |
| Message queue | Buffer if offline |