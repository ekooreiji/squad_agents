# Environment Configuration: {Nome do Projeto}

## Metadata
| Campo | Valor |
|-------|-------|
| Data | {YYYY-MM-DD} |
| Autor | Tech Lead Agent |
| Versão | 1.0.0 |
| Status | Rascunho |
| Skill Associada | devops |

---

## Visão Geral

{Descrição do projeto em 1-2 linhas}

---

## Ambientes

### Development
| Variável | Valor Padrão | Descrição |
|----------|--------------|-----------|
| NODE_ENV | development | Ambiente |
| PORT | 3000 | Porta da aplicação |
| LOG_LEVEL | debug | Nível de logging |
| DB_HOST | localhost | Host do banco |
| DB_PORT | 5432 | Porta do banco |
| DB_NAME | {project}_dev | Nome do banco |
| DB_USER | dev_user | Usuário |
| REDIS_HOST | localhost | Host Redis |
| API_URL | http://localhost:3000 | URL da API |

### Staging
| Variável | Valor Padrão | Descrição |
|----------|--------------|-----------|
| NODE_ENV | staging | Ambiente |
| PORT | 3000 | Porta da aplicação |
| LOG_LEVEL | info | Nível de logging |
| DB_HOST | {staging-db-host} | Host do banco |
| DB_PORT | 5432 | Porta do banco |
| DB_NAME | {project}_staging | Nome do banco |
| DB_USER | staging_user | Usuário |
| REDIS_HOST | {staging-redis} | Host Redis |
| API_URL | https://staging.api.com | URL da API |

### Production
| Variável | Valor Padrão | Descrição |
|----------|--------------|-----------|
| NODE_ENV | production | Ambiente |
| PORT | 3000 | Porta da aplicação |
| LOG_LEVEL | warn | Nível de logging |
| DB_HOST | {prod-db-host} | Host do banco |
| DB_PORT | 5432 | Porta do banco |
| DB_NAME | {project}_prod | Nome do banco |
| DB_USER | prod_user | Usuário |
| REDIS_HOST | {prod-redis} | Host Redis |
| API_URL | https://api.com | URL da API |

---

## Variáveis de Ambiente Obrigatórias

| Variável | Obrigatório | Descrição | Exemplo |
|----------|------------|-----------|--------|
| DATABASE_URL | Sim | String de conexão completa | postgresql://user:pass@host:port/db |
| API_KEY | Sim | Chave de API | random-string |
| SECRET_KEY | Sim | Chave secreta JWT | random-string |
| JWT_SECRET | Sim | Chave para JWT | random-string |
| ENCRYPTION_KEY | Não | Chave de criptografia | random-string |

---

## Secrets Management

### Desenvolvimento
- Arquivo `.env.local` na raiz do projeto
- Variáveis definidas no docker-compose.yml

### Staging
- AWS Secrets Manager
- GitHub Actions Secrets

### Produção
- AWS Secrets Manager / HashiCorp Vault
- Environment variables do provedor cloud

---

## Docker

### Dockerfile (Backend Node.js)
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["node", "dist/index.js"]
```

### Dockerfile (Backend Python)
```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0"]
```

### docker-compose.yml (Development)
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgresql://user:pass@db:5432/db
    depends_on:
      - db
      - redis

  db:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: db
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine

volumes:
  postgres_data:
```

---

## CI/CD

### GitHub Actions - Build and Test
```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
```

### GitHub Actions - Deploy Staging
```yaml
name: Deploy Staging

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to staging
        run: |
          echo "Deploying to staging..."
```

---

## Monitoring

| Ferramenta | Propósito | Ambiente |
|------------|-----------|----------|
| pino | Logging (Node.js) | Todos |
| python-logging | Logging (Python) | Todos |
| Prometheus | Métricas | Staging, Prod |
| Grafana | Visualização | Staging, Prod |
| Sentry | Error Tracking | Staging, Prod |

---

## Dúvidas em Aberto ❓
| # | Pergunta | Por que preciso saber |
|----|---------|---------------------|
| 1 | Qual provedor cloud? | AWS/GCP/Azure |
| 2 | Já existe infraestrutura? | Para extensão |

---

## Próximos Passos
- [ ] Criar arquivo .env
- [ ] Configurar Docker
- [ ] Configurar CI/CD
- [ ] Configurar monitoring

---

## Anexo: Histórico de Versões
| Versão | Data | Autor | Mudanças |
|--------|------|-------|----------|
| 1.0.0 | {YYYY-MM-DD} | Tech Lead Agent | Versão inicial |