# Logging - JavaScript

```javascript
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log' })
  ]
});

logger.info('User logged in');
logger.error('Database connection failed');
```

## pino - Fast logger

```javascript
const pino = require('pino');
const logger = pino();

logger.info('User logged in');
logger.error({ err: new Error('failed') }, 'Database error');
```