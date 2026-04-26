# Testing em GitLab CI

## Configuração

```yaml
# .gitlab-ci.yml
stages:
  - test

test:
  stage: test
  image: python:3.11
  script:
    - pip install -r requirements.txt
    - pytest tests/ -v --cov=myapp
  coverage: '/TOTAL.*\s+(\d+%)$/'
  artifacts:
    reports:
      coverage_report:
        coverage_format: cobertura
        path: coverage.xml
```

## Multiple Jobs

```yaml
test:unit:
  stage: test
  script: pytest tests/unit/ -v

test:integration:
  stage: test
  services:
    - postgres:15
  script: pytest tests/integration/ -v

test:e2e:
  stage: test
  script: pytest tests/e2e/ -v
```