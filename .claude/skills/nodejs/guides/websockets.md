# WebSockets - Node.js

Comunicação em tempo real.

---

## Instalação

```bash
npm install socket.io
```

---

## Setup Socket.io

```javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('Cliente conectado:', socket.id);

  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id);
  });
});

server.listen(3000, () => {
  console.log('Servidor na porta 3000');
});
```

---

## Emitir Eventos

```javascript
// Servidor
io.emit('message', { text: 'Olá todos!' });
socket.broadcast.emit('message', { text: 'Novo usuário!' });
socket.to('roomId').emit('message', { text: 'Sala específica' });
```

---

## Receber Eventos

```javascript
socket.on('chat message', (msg) => {
  console.log('Mensagem:', msg);
  io.emit('chat message', msg);
});
```

---

## Rooms

```javascript
socket.join('room1');
socket.leave('room1');
io.to('room1').emit('message', { text: 'Sala 1' });
```

---

## Exemplo Chat Real-Time

```javascript
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server);

const messages = [];

io.on('connection', (socket) => {
  socket.emit('init', messages);
  
  socket.on('new message', (msg) => {
    messages.push(msg);
    io.emit('new message', msg);
  });
});

app.listen(3000, () => console.log('Porta 3000'));
```

---

## Frontend

```html
<script src="/socket.io/socket.io.js"></script>
<script>
  const socket = io();
  
  socket.on('init', (messages) => {
    console.log(messages);
  });
  
  socket.on('new message', (msg) => {
    console.log(msg);
  });
  
  function send(msg) {
    socket.emit('new message', msg);
  }
</script>
```

---

## Notes

- Socket.io = easy real-time