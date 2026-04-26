# Prompt 02 - Estrutura

Prompt para definir estrutura da documentação.

---

## Objetivo

Definir a estrutura e organização da documentação.

---

## Instruções

Após o briefing, você deve definir a estrutura para o projeto.

### 1. Tipos de Documentação Necessária

| Tipo | Quando Usar |
|------|------------|
| README | Todo projeto |
| INSTALL | Se precisa de instalação |
| CONTRIBUTING | Se tem contribuições |
| CHANGELOG | Se tem versões |
| API | Se tem endpoints |
| ARCHITECTURE | Se é projeto complexo |

### 2. Estrutura de Diretórios

Criar a estrutura:

```
docs/
├── index.md              # Homepage
├── install.md           # Instalação
├── usage.md             # Uso
├── api/                 # Documentação de API
│   ├── index.md
│   └── endpoints.md
└── guides/
    └── tutorial.md
```

### 3. mkdocs.yml

Se usando MkDocs:

```yaml
site_name: [Nome do Projeto]
docs_dir: docs
repo_url: [URL do repo]

nav:
  - Home: index.md
  - Instalação: install.md
  - Uso: usage.md
```

---

## Checklist de Estrutura

- [ ] Tipos de documentação definidos
- [ ] Estrutura de diretórios criada
- [ ] Seções principais identificadas
- [ ] Navigation definida
- [ ] mkdocs.yml configurado (se aplicável)