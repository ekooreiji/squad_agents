# Pub/Sub

Publish/Subscribe.

## Subscribe

```redis
SUBSCRIBE notifications
PSUBSCRIBE notifications:*
```

## Publish

```redis
PUBLISH notifications "Hello"
```

## Node.js

```javascript
const subscriber = redis.duplicate();
await subscriber.subscribe('notifications', (message) => {
  console.log(message);
});

const publisher = redis.duplicate();
await publisher.publish('notifications', 'Hello');
```