# Dependency File: {Nome do Projeto}

## Metadata
| Campo | Valor |
|-------|-------|
| Data | {YYYY-MM-DD} |
| Autor | Tech Lead Agent |
| Versão | 1.0.0 |
| Status | Rascunho |

---

## Visão Geral

Este documento contém os templates de dependências recomendados para o projeto. Os valores são templates que devem ser adjustados conforme a necessidade.

---

## JavaScript / TypeScript

### package.json (Template)

#### Runtime Dependencies
```json
{
  "dependencies": {
    "express": "^4.18.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.0"
  }
}
```

#### Dev Dependencies
```json
{
  "devDependencies": {
    "jest": "^29.0.0",
    "typescript": "^5.0.0",
    "ts-node": "^10.9.0",
    "nodemon": "^3.0.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0"
  }
}
```

#### Peer Dependencies
```json
{
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
```

---

## Python

### requirements.txt (Template)

#### Runtime
```
fastapi==0.104.0
uvicorn[standard]==0.24.0
pydantic==2.4.0
python-dotenv==1.0.0
sqlalchemy==2.0.0
```

#### Dev
```
pytest==7.4.0
pytest-cov==4.1.0
pytest-asyncio==0.21.0
black==23.0.0
flake8==6.0.0
mypy==1.5.0
```

---

## Scripts Recomendados (package.json)

```json
{
  "scripts": {
    "dev": "nodemon src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint src --ext .ts",
    "lint:fix": "eslint src --ext .ts --fix",
    "format": "prettier --write \"src/**/*.ts\""
  }
}
```

---

## Scripts Recomendados (Makefile para Python)

```makefile
.PHONY: install test lint format run

install:
    pip install -r requirements.txt
    pip install -r requirements-dev.txt

test:
    pytest -v --cov

test:watch:
    pytest -v --cov --watch

lint:
    flake8 src/
    mypy src/

format:
    black src/
    isort src/

run:
    uvicorn src.main:app --reload
```

---

## Dúvidas em Aberto ❓
| # | Pergunta | Por que preciso saber |
|----|---------|---------------------|
| 1 | Há conflito de versões com dependências existentes? | Verificar package.json atual |
| 2 | Precisa de peer dependencies específico? | Para bibliotecas compartilhadas |

---

## Próximos Passos
- [ ] Criar package.json / requirements.txt
- [ ] Executar npm install / pip install
- [ ] Verificar se há conflitos de versões

---

## Anexo: Histórico de Versões
| Versão | Data | Autor | Mudanças |
|--------|------|-------|----------|
| 1.0.0 | {YYYY-MM-DD} | Tech Lead Agent | Versão inicial |