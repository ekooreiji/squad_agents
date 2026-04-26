# Performance Basics

## Métricas Fundamentais

| Métrica | Descrição | Target |
|--------|-----------|--------|
| **Latency** | Tempo de resposta | < 200ms |
| **Throughput** | Requisições/segundo | Alta |
| **CPU Usage** | Uso de CPU | < 70% |
| **Memory Usage** | Uso de memória | Estável |
| **Load Time** | Tempo de carregamento | < 3s |

## Latência

```
┌─────────────────────────────────────────┐
│           Latência por tipo              │
├─────────────────────────────────────────┤
│ CPU computation      │ 1-10ms          │
│ Database query     │ 10-100ms         │
│ Network roundtrip │ 50-200ms         │
│ Disk I/O          │ 1-50ms          │
│ External API      │ 100-1000ms       │
└─────────────────────────────────────────┘
```

## Lei de Amdahl

- Speedup limitado pela fração paralela
- 50% serial → max 2x speedup
- 10% serial → max 10x speedup