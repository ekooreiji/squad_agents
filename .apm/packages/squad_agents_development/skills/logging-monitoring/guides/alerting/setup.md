# Alerting Setup

## Métricas para Alerta

| Métrica | Threshold |
|---------|------------|
| Error rate | > 5% |
| Latency p99 | > 1s |
| CPU | > 80% |
| Memory | > 90% |

## Exemplo de Alerta

```yaml
- name: High Error Rate
  condition: rate(error_requests[5m]) > 0.05
  severity: critical
  annotations:
    summary: High error rate detected
```

## Best Practices

- [ ] Alert on symptoms, not causes
- [ ] Avoid alert fatigue
- [ ] Include runbook link
- [ ] Test alerts regularly