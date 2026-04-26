# Logging - Python

```python
import logging
import sys

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler('/var/log/app.log')
    ]
)

logger = logging.getLogger(__name__)

logger.info("User logged in")
logger.error("Database connection failed")
```

## Structured Logging

```python
import json
import logging

class JSONFormatter(logging.Formatter):
    def format(self, record):
        return json.dumps({
            "timestamp": self.formatTime(record),
            "level": record.levelname,
            "message": record.getMessage(),
            "logger": record.name
        })
```

## Levels

| Level | Uso |
|-------|------|
| DEBUG | Detalhes para debugging |
| INFO | Información geral |
| WARNING | Warnings |
| ERROR | Erros |
| CRITICAL | Erros críticos |