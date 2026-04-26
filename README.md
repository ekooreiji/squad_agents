# Squad Agents

Repositório de agentes e skills para OpenCode e Claude Code.

---

## Estrutura

```
squad_agents/
├── agents/                  ← Agentes para OpenCode
├── skills/                 ← Skills para OpenCode
├── .claude/               ← Estrutura para Claude Code
│   ├── agents/
│   └── skills/
├── opencode.json           ← Configuração OpenCode
└── README.md            ← Este arquivo
```

---

## Conteúdo Incluído

| # | Tipo | Quantidade |
|---|------|-----------|
| 1 | Agentes | 13 |
| 2 | Skills | 73+ |

### Agentes Incluídos

| # | Agente | Descrição |
|---|-------|----------|
| 1 | developer_agent | Desenvolvimento de código |
| 2 | architect_agent | Arquitetura de software |
| 3 | code_review_agent | Revisão de código |
| 4 | test_agent | Testes |
| 5 | techlead_agent | Liderança técnica |
| 6 | po_agent | Product Owner |
| 7 | doc_writer_agent | Documentação |
| 8 | design_prototype_agent | Design/Protótipos |
| 9 | agente-web-frontend | Frontend Web |
| 10 | agente-mobile-frontend | Frontend Mobile |
| 11 | agente-desktop-frontend | Frontend Desktop |
| 12 | agente-web-backend | Backend Web |
| 13 | agente-mobile-backend | Backend Mobile |
| 14 | agente-desktop-backend | Backend Desktop |

### Skills Incluídas

Inclui skills para:
- Frameworks: React, Vue, Next.js, Django, Flask, FastAPI, Node.js, Flutter
- CSS: Tailwind, Bootstrap, Bulma, Materialize
- Database: PostgreSQL, MongoDB, Redis
- DevOps: Docker
- Testing: Jest, Pytest
- UI/UX: Design Thinking, Atomic Design, BEM
- E muitas outras...

---

## Como Usar com OpenCode

### PowerShell

```powershell
# PowerShell (sessão atual)
$env:OPENCODE_CONFIG_DIR = "C:\Users\thiag\squad_agents"

# PowerShell (permanente)
[System.Environment]::SetEnvironmentVariable(
  "OPENCODE_CONFIG_DIR", 
  "C:\Users\thiag\squad_agents", 
  "User"
)
```

### CMD

```cmd
:: CMD (sessão atual)
set OPENCODE_CONFIG_DIR=C:\Users\thiag\squad_agents

:: CMD (permanente - definir permanentemente)
setx OPENCODE_CONFIG_DIR "C:\Users\thiag\squad_agents"
```

### Linux / macOS / WSL

```bash
# Linux/macOS (sessão atual)
export OPENCODE_CONFIG_DIR="/c/Users/thiag/squad_agents"

# Linux/macOS (permanente - adicionar ao ~/.bashrc ou ~/.zshrc)
echo 'export OPENCODE_CONFIG_DIR="/c/Users/thiag/squad_agents"' >> ~/.bashrc
source ~/.bashrc

# WSL (caminho estilo Unix)
export OPENCODE_CONFIG_DIR="/mnt/c/Users/thiag/squad_agents"
```

### Alternativa: Via opencode.json do projeto

```json
{
  "skills": {
    "paths": [
      "C:\\Users\\thiag\\squad_agents\\skills"
    ]
  }
}
```

---

## Como Usar com Claude Code

### PowerShell

```powershell
# Criar link para agents
New-Item -ItemType SymbolicLink -Path "$HOME\.claude\agents-squad" -Target "C:\Users\thiag\squad_agents\.claude\agents"

# Criar link para skills
New-Item -ItemType SymbolicLink -Path "$HOME\.claude\skills-squad" -Target "C:\Users\thiag\squad_agents\.claude\skills"

# Ou copiar (mais seguro para Windows)
Copy-Item -Path "C:\Users\thiag\squad_agents\.claude\agents\*" -Destination "$HOME\.claude\agents\" -Recurse
Copy-Item -Path "C:\Users\thiag\squad_agents\.claude\skills\*" -Destination "$HOME\.claude\skills\" -Recurse
```

### CMD

```cmd
:: Criar links simbólicos (CMD requer privilégios de administrador)
mklink /D "%USERPROFILE%\.claude\agents-squad" "C:\Users\thiag\squad_agents\.claude\agents"
mklink /D "%USERPROFILE%\.claude\skills-squad" "C:\Users\thiag\squad_agents\.claude\skills"

:: Ou copiar (sem necessidade de admin)
xcopy "C:\Users\thiag\squad_agents\.claude\agents\*" "%USERPROFILE%\.claude\agents\" /E /I
xcopy "C:\Users\thiag\squad_agents\.claude\skills\*" "%USERPROFILE%\.claude\skills\" /E /I
```

### Linux / macOS / WSL

```bash
# Criar link simbólico (recomendado)
ln -s "/c/Users/thiag/squad_agents/.claude/agents" "$HOME/.claude/agents-squad"
ln -s "/c/Users/thiag/squad_agents/.claude/skills" "$HOME/.claude/skills-squad"

# WSL (caminho estilo Unix)
ln -s "/mnt/c/Users/thiag/squad_agents/.claude/agents" "$HOME/.claude/agents-squad"
ln -s "/mnt/c/Users/thiag/squad_agents/.claude/skills" "$HOME/.claude/skills-squad"

# Ou copiar (mais seguro)
cp -r "/c/Users/thiag/squad_agents/.claude/agents/"* "$HOME/.claude/agents/"
cp -r "/c/Users/thiag/squad_agents/.claude/skills/"* "$HOME/.claude/skills/"

# macOS
cp -r "~/squad_agents/.claude/agents/"* "$HOME/.claude/agents/"
cp -r "~/squad_agents/.claude/skills/"* "$HOME/.claude/skills/"
```

---

## Estrutura de Arquivos

### Agente (OpenCode)

```
agente-web-frontend/
├── agent.md           ← Definição principal
├── system-prompt.md  ← Prompt do sistema
├── prompts/          ← Prompts numerados
└── templates/       ← Templates de saída
```

### Skill (OpenCode)

```
react/
├── SKILL.md          ← Definição principal
├── guides/          ← Guias
├── templates/       ← Templates
└── checklists/     ← Checklists
```

---

## Criar Novo Agente

Para criar um novo agente, siga a estrutura:

```markdown
---
name: nome-do-agente
description: Descrição do agente
type: Conversacional
version: 1.0.0
---

# Nome do Agente

## Visão Geral
...

## Primeira Pergunta
Sempre pergunte: "?"
```

---

## Criar Nova Skill

Para criar uma nova skill, siga a estrutura:

```markdown
---
name: nome-da-skill
description: Descrição da skill
---

# Nome da Skill

## Visão Geral
...

## Guias
- `guides/intro.md` - Introdução
- `guides/setup.md` - Setup

## Templates
- `templates/pattern.md` - Pattern
```

---

## Referências

- [Documentação OpenCode](https://docs.opencode.ai)
- [Documentação Claude Code](https://docs.claude.com/claude-code/)
- [Agent Skills Anthropic](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)

---

## Licença

MIT

---

## Contato

Para dúvidas ou contribuições, abra um issue no repositório.