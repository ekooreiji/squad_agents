# Benchmarking

## O que é Benchmarking

Teste de performance para medir e comparar sistemas.

## Ferramentas

| Linguagem | Ferramenta |
|----------|-------------|
| Python | pytest-benchmark, timeit |
| JavaScript | Benchmark.js, k6 |
| Database | pgbench, sysbench |

## Como fazer

1. Isolar o código a testar
2. Usar dados representativos
3. Executar múltiplas vezes
4. Medir média, percentis

## Exemplo Python

```python
import timeit

# Benchmark function
def test_function():
    return sum(range(1000))

# Run
time = timeit.timeit(test_function, number=10000)
print(f"Time: {time:.4f}s")
```