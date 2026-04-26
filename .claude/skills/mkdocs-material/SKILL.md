---
name: mkdocs-material
description: Skill para criar documentação com MkDocs Material (theme profissional Python)
---

# MkDocs Material Skill

Skill especializada em criar documentação profissional usando MkDocs com theme Material Design.

---

## Visão Geral

MkDocs é um gerador de sites estáticos Python rápidos e simples, ideal para documentação de projetos. O theme Material adiciona polish profissional.

---

## Guias por Categoria

### Setup e Configuração
- `guides/setup.md` - Instalação e criação de projeto
- `guides/configuration.md` - mkdocs.yml completo

### Customização
- `guides/theming.md` - Temas, cores, fontes
- `guides/extensions.md` - Extensões Markdown

### Deploy
- `guides/deploy.md` - Deploy e CI/CD

---

## Templates

| Template | Descrição |
|----------|-----------|
| templates/doc-page.md | Template de página de documentação |
| templates/api-doc.md | Template de documentação de API |
| templates/multi-language.md | Template para i18n |

---

## Checklists

| Checklist | Descrição |
|-----------|-----------|
| checklists/doc-validation.md | Checklist de validação de docs |

---

## O que esta skill pode fazer

| # | Ação | Descrição |
|---|------|------------|
| 1 | Criar projeto MkDocs | Setup com Material theme |
| 2 | Configurar mkdocs.yml | Configuração completa |
| 3 | Customizar tema | Cores, fontes, logo |
| 4 | Adicionar extensões | Mermaid, code blocks |
| 5 | Configurar i18n | Múltiplos idiomas |
| 6 | Deploy automático | GitHub Pages, CI/CD |

---

## Skills Relacionadas

| Skill | Quando usar |
|-------|-------------|
| [documentation](../documentation/SKILL.md) | Guias gerais de documentação |
| [documentation-docusaurus](../documentation-docusaurus/SKILL.md) | Alternativa em Node.js |
| [doc_writer_agent](../doc_writer_agent/agent.md) | Para agent gerar docs |

---

## Fluxo de Trabalho

```
Develop + Test → Doc Writer → mkdocs-material → Deploy
```

---

## Estrutura de Diretórios

```
mkdocs-material/
├── guides/
│   ├── setup.md
│   ├── configuration.md
│   ├── theming.md
│   ├── extensions.md
│   └── deploy.md
├── templates/
├── checklists/
└── examples/
```

---

## Comparação: MkDocs vs Docusaurus

| Aspecto | mkdocs-material | Docusaurus |
|--------|--------------|------------|
| Linguagem | Python | Node.js |
| Conteúdo | Markdown | MDX |
| Busca | Local (offline) | Algolia/Local |
| Theming | Material Design | Facebook style |
| i18n | Plugin | Built-in |

---

## Referências

- [MkDocs](https://www.mkdocs.org/)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [MkDocs Material Changelog](https://squidfunk.github.io/mkdocs-material/changelog/)