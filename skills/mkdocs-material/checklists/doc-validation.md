# Documentation Validation Checklist

Checklist para validar documentação MkDocs Material.

---

## 1. Conteúdo

| Item | Status | Observação |
|------|--------|----------|
| Título claro e descritivo | [ ] | |
| Descrição no frontmatter | [ ] | |
| Seção de overview | [ ] | |
| Pré-requisitos mencionados | [ ] | |
| Passo a passo claro | [ ] | |
| Exemplos funcionais | [ ] | |
| Próximos passos/linkados | [ ] | |

---

## 2. Código

| Item | Status | Observação |
|------|--------|----------|
| Code blocks com linguagem | [ ] | |
|语法高亮 | [ ] | |
| Linhas destacadas quando necessário | [ ] | |
| Title em code blocks | [ ] | |
| Sem credenciais expostas | [ ] | |

---

## 3. Estrutura

| Item | Status | Observação |
|------|--------|----------|
|Frontmatter completo | [ ] | |
| Navegação consistente | [ ] | |
| Tabelas formatadas | [ ] | |
| Listas ordenadas | [ ] | |
| Imagens com alt text | [ ] | |

---

## 4. MkDocs

| Item | Status | Observação |
|------|--------|----------|
| mkdocs.yml válido | [ ] | |
| Build sem erros | [ ] | |
| build --strict passa | [ ] | |
| Links internos funcionand | [ ] | |
| Imagens carregando | [ ] | |

---

## 5. Acessibilidade

| Item | Status | Observação |
|------|--------|----------|
| Contraste adequado | [ ] | |
| Texto descritivo em links | [ ] | |
| Headings em ordem | [ ] | |
| Imagens com alt | [ ] | |

---

## 6. SEO

| Item | Status | Observação |
|------|--------|----------|
| Description no frontmatter | [ ] | |
| URL amigável | [ ] | |
| Canonical URLs | [ ] | |

---

## 7. i18n

| Item | Status | Observação |
|------|--------|----------|
| Todos os idiomas completos | [ ] | |
| Navegação traduzida | [ ] | |
| Botão de idioma funciona | [ ] | |

---

## 8. Deploy

| Item | Status | Observação |
|------|--------|----------|
| CI/CD configurado | [ ] | |
| Deploy automatizado | [ ] | |
| URL funciona | [ ] | |
| HTTPSOK | [ ] | |

---

## Score Final

| Seção | Score |
|------|-------|
| Conteúdo | _/7 |
| Código | _/5 |
| Estrutura | _/5 |
| MkDocs | _/5 |
| Acessibilidade | _/4 |
| SEO | _/3 |
| i18n | _/3 |
| Deploy | _/4 |
| **Total** | _/36 |

---

## ações

| Prioridade | O que fazer |
|-----------|-------------|
| Crítica | Corrigir imediatamente |
| Alta | Corrigir na próxima iteração |
| Média | Planejar para próxima release |
| Baixa | Manter como está |