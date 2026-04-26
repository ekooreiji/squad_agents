# AsyncAPI Specification

## Visão Geral

AsyncAPI é uma especificação para descrever APIs assíncronas (message-driven).

## Estrutura

```yaml
asyncapi: '2.6.0'
info:
  title: IoT API
  version: 1.0.0
channels:
  device/data:
    address: device/{deviceId}/data
    messages:
      DeviceData:
        payload:
          type: object
          properties:
            temperature:
              type: number
            humidity:
              type: number
```

## Servers

```yaml
servers:
  production:
    host: 'broker.example.com:1883'
    protocol: mqtt
    description: Production MQTT broker
  development:
    host: 'localhost:1883'
    protocol: mqtt
```

## Channels

```yaml
channels:
  user/created:
    address: user/created
    messages:
      UserCreated:
        name: UserCreated
        title: User Created Event
        payload:
          type: object
          properties:
            userId:
              type: string
            email:
              type: string
```

## Messages

```yaml
components:
  messages:
    OrderPlaced:
      name: OrderPlaced
      title: Order Placed
      payload:
        type: object
        required:
          - orderId
          - items
        properties:
          orderId:
            type: string
          items:
            type: array
            items:
              type: object
```

## Security

```yaml
components:
  securitySchemes:
    apiKey:
      type: apiKey
      in: header
      name: X-API-Key
    saslScram:
      type: scramSha256
```

## Use Cases

| Use Case | Protocol |
|---------|----------|
| IoT | MQTT |
| Chat | WebSocket |
| Events | Apache Kafka |
| Real-time | AMQP |

## Tools

| Tool | Description |
|------|-------------|
| AsyncAPI Studio | Design tool |
| Generator | Code gen |
| Validator | Validation |