# Installation Guide

## Pré-requisitos

### Sistema Operacional

- macOS 10.15+
- Windows 10+ (com WSL2)
- Ubuntu 20.04+ (ou distribuição Linux similar)

### Software Necessário

| Software | Versão Mínima |
|----------|---------------|
| Node.js | 18.x |
| npm | 8.x |
| Git | 2.x |

---

## Instalação

### 1. Clone o Repositório

```bash
git clone https://github.com/{owner}/{project}.git
cd {project}
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Configure o Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Database
DATABASE_URL=postgresql://localhost:5432/{database}
DATABASE_USERNAME=username
DATABASE_PASSWORD=password

# API
API_KEY=your-api-key-here
JWT_SECRET=your-jwt-secret-here

# Environment
NODE_ENV=development
PORT=3000
```

### 4. Execute as Migrations

```bash
npm run migrate
```

### 5. Inicie o Servidor

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000`

---

## Docker

### Build e Execução

```bash
# Build
docker build -t {project}:latest .

# Run
docker run -p 3000:3000 {project}:latest
```

### Docker Compose

```bash
# Iniciar todos os serviços
docker-compose up -d

# Parar serviços
docker-compose down
```

---

## Configuração

### Variáveis de Ambiente

| Variável | Obrigatório | Descrição |
|----------|-------------|-----------|
| DATABASE_URL | Sim | String de conexão do banco |
| API_KEY | Sim | Chave de API |
| JWT_SECRET | Sim | Chave secreta para JWT |
| PORT | Não | Porta do servidor (padrão: 3000) |
| NODE_ENV | Não | Ambiente (development/staging/production) |

---

## Troubleshooting

### Erro de Conexão com Banco

```
Error: connect ECONNREFUSED 127.0.0.1:5432
```

**Solução**: Verifique se o PostgreSQL está em execução:

```bash
# Linux
sudo systemctl start postgresql

# macOS
brew services start postgresql
```

### Erro de Permissão

```
Error: EACCES permission denied
```

**Solução**: Corrija permissões:

```bash
sudo chown -R $(whoami) ~/.npm
```

### Porta em Uso

```
Error: listen EADDRINUSE :::3000
```

**Solução**: Encontre e finalize o processo:

```bash
# Encontrar processo
lsof -i :3000

# Finalizar
kill -9 <PID>
```

---

## Próximos Passos

- Configure CI/CD (opcional)
- Configure logging
- Configure monitoring

Para mais detalhes, see [architecture.md](./architecture.md).