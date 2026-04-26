# GitLab CI

## Estrutura Básica

```yaml
# .gitlab-ci.yml
stages:
  - test
  - build
  - deploy

test:
  stage: test
  image: python:3.11
  script:
    - pip install -r requirements.txt
    - pytest tests/ -v
  coverage: '/TOTAL.*\s+(\d+%)$/'

build:
  stage: build
  script:
    - docker build -t myapp:$CI_COMMIT_SHA .
  only:
    - main

deploy:
  stage: deploy
  script:
    - docker push myapp:$CI_COMMIT_SH
  only:
    - main
  when: manual
```

## Multiple Stages

```yaml
stages:
  - test
  - build
  - test:integration
  - deploy

test:unit:
  stage: test
  script: pytest tests/unit/ -v

test:integration:
  stage: test:integration
  services:
    - postgres:15
  script: pytest tests/integration/ -v

build:
  stage: build
  script: docker build -t myapp:$CI_COMMIT_SHA .
```