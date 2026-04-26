# APM Setup - Guia Rápido

Instalação rápida da squad_Developer via APM do opencode.

---

## 1. Instalar APM

```cmd
scoop install apm
:: ou
pip install apm-cli
```

---

## 2. Criar apm.yml

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

---

## 3. Instalar

```cmd
apm install
```

---

## Comandos

| Comando | Descrição |
|---------|-----------|
| `apm install` | Instalar |
| `apm update` | Atualizar |
| `apm list` | Listar instalados |

---

Para detalhes completos, consulte [SQUAD_INSTALL.md](./SQUAD_INSTALL.md).