# Contributing Guide

Obrigado pelo seu interesse em contribuir! Este documento fornece diretrizes para contribuições.

---

## Código de Conduta

Ao participar deste projeto, você concorda em seguir nosso [Código de Conduta](https://example.com/coc).

---

## Como Contribuir

### 1. Reporting Bugs

Se você encontrar um bug:

1. Checks se o bug já foi reportado
2. Se não, abra uma issue com:
   - Título claro
   - Descrição do problema
   - Passos para reproduzir
   - ambiente info

### 2. Sugerindo Features

Para sugerir:

1. Abra uma issue com título "Feature: [descrição]"
2. Explique o caso de uso
3. Descreva a solução proposta
4. Inclua exemplos

### 3. Pull Requests

Para submeter PRs:

1. Fork o projeto
2. Clone localmente: `git clone https://github.com/{owner}/{project}.git`
3. Crie branch: `git checkout -b feature/nova-funcionalidade`
4. Desenvolva e teste
5. Commit: `git commit -m 'feat: nova funcionalidade'`
6. Push: `git push origin feature/nova-funcionalidade`
7. Abra PR no GitHub

---

## Estilo de Código

### JavaScript / TypeScript

Seguimos js-standard-style:

- 2 espaços de indentação
- Ponto e vírgula opcional
- Aspas simples

```javascript
// ✓ Correto
const foo = function (bar) {
  return bar
}

// ✗ Incorreto
const foo = function(bar){
return bar
}
```

### Python

Seguimos pep8:

- 4 espaços de indentação
- snake_case para funções

```python
# ✓ Correto
def minha_funcao(param):
    return param

# ✗ Incorreto
def minhaFuncao(param):
return param
```

---

## Git Commit Messages

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

| Tipo | Descrição |
|------|-----------|
| feat | Nova funcionalidade |
| fix | Correção de bug |
| docs | Documentação |
| style | Estilo (formatação) |
| refactor | Refatoração |
| test | Testes |
| chore | Tarefas |

Exemplos:

```bash
git commit -m "feat(auth): add login with OAuth2"
git commit -m "fix(api): resolve user validation error"
git commit -m "docs(readme): update installation instructions"
```

---

## Testes

### Executando Testes

npm:
```bash
npm test
npm run test:coverage
```

Python:
```bash
pytest
pytest --cov
```

### Escrevendo Testes

- Nomeie descritivamente: `it('deve fazer algo quando...')`
- Cubra happy path e casos de erro
- Mantenha testes independentes

---

## Review Process

Após submeter:

1. CI/CD executa automaticamente
2. Revisores analisa código
3. Forneça feedback
4. Aplique correções se necessário
5. Após aprovado, merge será realizado

---

## Dúvidas?

- Abra uma issue
- Entre em contato pelo email maintainer

---

## Agradecimentos

{Agradecimentos especiais para contribuidores}