# Coverage Tools

## Python

| Tool | Uso |
|------|-----|
| **pytest-cov** | Cobertura com pytest |
| **coverage.py** | Coverage standalone |

```bash
pip install pytest-cov
pytest tests/ --cov=myapp --cov-report=html
```

## JavaScript

| Tool | Uso |
|------|-----|
| **Jest coverage** | Built-in |
| **Istanbul** | NYC |
| **Vitest coverage** | Built-in |

```bash
npm test -- --coverage
```

## GitHub Actions

```yaml
- name: Coverage
  uses: codecov/codecov-action@v3
```