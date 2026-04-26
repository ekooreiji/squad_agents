# Instalação da squad_Developer via APM

Este guia explica como instalar e usar a squad `squad_Developer` (definida em `apm.yml`) em outros projetos usando o APM do opencode.

---

## Pré-requisitos

### 1. Instalar o APM

```cmd
:: Windows (Scoop)
scoop bucket add apm https://github.com/microsoft/scoop-apm
scoop install apm

:: Ou via pip
pip install apm-cli
```

### 2. Verificar instalação

```cmd
apm --version
```

---

## Instalação em Novo Projeto

### Passo 1: Criar arquivo `apm.yml`

No diretório raiz do seu projeto, crie o arquivo `apm.yml` com o seguinte conteúdo:

```yaml
name: squad_Developer
version: 1.0.0

agents:
  path: ekooreiji/squad_agents/agents/po_agent.md
  path: ekooreiji/squad_agents/agents/developer_agent.md
  path: ekooreiji/squad_agents/agents/architect_agent.md
  path: ekooreiji/squad_agents/agents/techlead_agent.md
  path: ekooreiji/squad_agents/agents/code_review_agent.md
  path: ekooreiji/squad_agents/agents/test_agent.md
  path: ekooreiji/squad_agents/agents/doc_writer_agent.md
  path: ekooreiji/squad_agents/agents/design_prototype_agent.md

skills:
  path: ekooreiji/squad_agents/skills/api/SKILL.md
  path: ekooreiji/squad_agents/skills/react/SKILL.md
  path: ekooreiji/squad_agents/skills/typescript/SKILL.md
```

### Passo 2: Executar instalação

```cmd
apm install
```

O APM irá baixar todos os agents e skills definidos no arquivo e configurá-los no projeto.

### Passo 3: Configurar no opencode.json

Após a instalação, configure no arquivo `opencode.json` do seu projeto:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "skills": {
    "paths": ["skills"]
  }
}
```

---

## Instalação Personalizada

Você pode criar uma squad personalizada selecionando apenas os agents e skills necessários para o seu projeto:

### Exemplo: Projeto Web (React + TypeScript)

```yaml
name: my-web-squad
version: 1.0.0

agents:
  path: ekooreiji/squad_agents/agents/developer_agent.md

skills:
  path: ekooreiji/squad_agents/skills/react/SKILL.md
  path: ekooreiji/squad_agents/skills/typescript/SKILL.md
  path: ekooreiji/squad_agents/skills/tailwind-css/SKILL.md
```

### Exemplo: Projeto Backend (FastAPI + PostgreSQL)

```yaml
name: my-api-squad
version: 1.0.0

agents:
  path: ekooreiji/squad_agents/agents/developer_agent.md
  path: ekooreiji/squad_agents/agents/architect_agent.md

skills:
  path: ekooreiji/squad_agents/skills/fastapi/SKILL.md
  path: ekooreiji/squad_agents/skills/postgresql/SKILL.md
  path: ekooreiji/squad_agents/skills/docker/SKILL.md
```

### Exemplo: Projeto Mobile (React Native)

```yaml
name: my-mobile-squad
version: 1.0.0

agents:
  path: ekooreiji/squad_agents/agents/agente-mobile-frontend/agent.md
  path: ekooreiji/squad_agents/agents/agente-mobile-backend/agent.md

skills:
  path: ekooreiji/squad_agents/skills/react-native/SKILL.md
  path: ekooreiji/squad_agents/skills/typescript/SKILL.md
```

---

## Comandos Úteis

| Comando | Descrição |
|---------|-----------|
| `apm install` | Instala todos os agents e skills definidos no apm.yml |
| `apm update` | Atualiza todos os packages para a latest versão |
| `apm list` | Lista todos os agents e skills instalados |
| `apm search <termo>` | Busca agents/skills por termo |

---

## Solução de Problemas

### Erro: "Repo not found"

Certifique-se de que o repositório está público no GitHub e que o caminho está correto.

### Erro: "Permission denied"

Some repositórios podem requerer autenticação. Use `apm login` para configurar seu token GitHub.

---

## Veja Também

- [README principal](../README.md) - Visão geral do squad_agents
- [APM_SETUP.md](./APM_SETUP.md) - Guia rápido de configuração