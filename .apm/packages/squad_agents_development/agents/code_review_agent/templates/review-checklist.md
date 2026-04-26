# Code Review Checklist

## Visão Geral

Checklist usado pelo Code Review Agent para verificar todos os aspectos do código e testes.

---

## 1. Estilo de Código

### JavaScript / TypeScript
| Item | Status | Observações |
|------|--------|-----------|
| Naming conventions (camelCase) | ☐ | |
| Naming constants (UPPER_SNAKE_CASE) | ☐ | |
| Arquivos (kebab-case) | ☐ | |
| Classes (PascalCase) | ☐ | |
| Funções (camelCase) | ☐ | |
| Indentação (2 espaços) | ☐ | |
| Linhas < 80/100 caracteres | ☐ | |
| Trailing commas | ☐ | |

### Python
| Item | Status | Observações |
|------|--------|-----------|
| Naming (snake_case) | ☐ | |
| Classes (PascalCase) | ☐ | |
| Funções (snake_case) | ☐ | |
| Indentação (4 espaços) | ☐ | |
| Linhas < 79 caracteres | ☐ | |

---

## 2. Boas Práticas

| Item | Status | Observações |
|------|--------|-----------|
| SOLID principles | ☐ | |
| DRY (Don't Repeat Yourself) | ☐ | |
| Funções pequenas (< 30 linhas) | ☐ | |
| Funções com responsabilidade única | ☐ | |
| Nomes descritivos | ☐ | |
| Sem código morto | ☐ | |
| Tratamento de erros adequado | ☐ | |

---

## 3. Testes

| Item | Status | Observações |
|------|--------|-----------|
| Testes unitários | ☐ | |
| Testes de integração | ☐ | |
| Cobertura > 80% | ☐ | |
| Casos de borda | ☐ | |
| Casos de erro | ☐ | |
| Assertions significativas | ☐ | |
| Sem testes vazios | ☐ | |
| Naming descritivo (it('deve...')) | ☐ | |

---

## 4. Segurança

| Item | Status | Observações |
|------|--------|-----------|
| Input validation | ☐ | |
| Password hashing | ☐ | |
| SQL injection prevention | ☐ | |
| XSS prevention | ☐ | |
| CSRF protection | ☐ | |
| No secrets no código | ☐ | |
| Rate limiting | ☐ | |
| HTTPS only | ☐ | |

---

## 5. Performance

| Item | Status | Observações |
|------|--------|-----------|
| No N+1 queries | ☐ | |
| Indexes em banco | ☐ | |
| Limites de dados (pagination) | ☐ | |
| Caching quando apropriado | ☐ | |
| Lazy loading | ☐ | |
| Batch operations | ☐ | |

---

## 6. Documentação

| Item | Status | Observações |
|------|--------|-----------|
| README | ☐ | |
| Docstrings funções públicas | ☐ | |
| Comentários em código complexo | ☐ | |
| API documentation | ☐ | |
| CHANGELOG | ☐ | |
| Configuração documentada | ☐ | |

---

## 7. Git / Commits

| Item | Status | Observações |
|------|--------|-----------|
| Commits atômicos | ☐ | |
| Mensagens descritivas | ☐ | |
| Conventional Commits | ☐ | |
| Branches organizados | ☐ | |
| Code review antes de merge | ☐ | |

---

## Resumo da Verificação

| Categoria | Qtd Issues |
|-----------|------------|
| Critical | {N} |
| High | {N} |
| Medium | {N} |
| Low | {N} |
| **Total** | **{N}** |

---

## Próximos Passos
- [ ] Revisar todos os itens marcados ☐
- [ ] Corrigir issues encontrados
- [ ] Executar revisão novamente