# Application Metrics

## Métricas IMPORTANTES

| Métrica | Descrição |
|--------|-----------|
| **Request Latency** | Tempo de resposta |
| **Error Rate** | Taxa de erros |
| **Requests per Second** | Throughput |
| **CPU Usage** | Uso de CPU |
| **Memory Usage** | Uso de memória |

## Python com Prometheus

```python
from prometheus_client import Counter, Histogram, Gauge

requests_total = Counter('requests_total', 'Total requests')
request_duration = Histogram('request_duration_seconds')
active_users = Gauge('active_users', 'Active users')
```

## Export

```python
from prometheus_client import start_http_server

start_http_server(8080)
```