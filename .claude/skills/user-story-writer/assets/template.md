# 📋 Template — User Story Completa

Copie este template para começar sua user story. Preencha os `[placeholders]` com seus dados.

---

## Cabeçalho

```markdown
# US-XXX: [Título Descritivo da Historia]

**Status**: Draft / Ready for Dev / In Progress / Done  
**Prioridade**: Must Have / Should Have / Nice to Have  
**Estimativa**: [Pontos/Horas - opcional]  
**Assignado**: [Responsável - opcional]
```

---

## User Story (Essencial)

```markdown
## 📖 User Story

Como **[persona/role]**  
Quero **[ação/funcionalidade]**  
Para **[benefício/valor]**

**Contexto**: [Background opcional — por que é importante]
```

**Exemplo:**
```
Como **usuário novo**
Quero **fazer login com minha conta do Google**
Para **acessar o app sem criar outra senha**

Contexto: Reduzir atrito no onboarding
```

---

## Critérios de Aceitação — Formato 1: BDD (Given/When/Then)

```markdown
## ✅ Critérios de Aceitação — BDD

### Cenário 1: [Nome Descritivo]
```
Dado [contexto/precondição]
Quando [ação do usuário]
Então [resultado esperado]
```

### Cenário 2: [Nome Descritivo]
```
Dado [contexto]
Quando [ação]
Então [resultado]
```

### Cenário 3: Caso Excepcional [Descrição]
```
Dado [contexto]
Quando [ação que falha/diverge]
Então [comportamento esperado em exceção]
```
```

---

## Critérios de Aceitação — Formato 2: Checklist (QA-Friendly)

```markdown
## ☑️ Critérios de Aceitação — Checklist

- [ ] [Critério 1 — objetivo e testável]
- [ ] [Critério 2 — objetivo e testável]
- [ ] [Critério 3 — regra de negócio]
- [ ] [Critério 4 — caso excepcional]
- [ ] [Critério 5 — performance/UX]
```

---

## Exemplo Completo Pronto para Usar

```markdown
# US-042: Login com Google OAuth

**Status**: Ready for Dev  
**Prioridade**: Must Have  
**Estimativa**: 5 pontos

## 📖 User Story

Como **usuário novo**  
Quero **fazer login com minha conta do Google**  
Para **acessar o app sem criar outra senha**

Contexto: Reduzir atrito no onboarding

---

## ✅ Critérios de Aceitação — BDD

### Cenário 1: Login bem-sucedido
```
Dado que o usuário está na página de login
Quando clica em "Login com Google"
E autoriza o acesso
Então é redirecionado para o dashboard
```

### Cenário 2: Usuário nega autorização
```
Dado que o usuário está na página de login
Quando clica em "Login com Google"
E nega a autorização
Então permanece na página de login
```

## ☑️ Critérios de Aceitação — Checklist

- [ ] Botão "Login com Google" visível e funcional
- [ ] Dialog de OAuth abre corretamente
- [ ] Token armazenado com segurança
- [ ] Sessão persiste após reload
- [ ] Funciona em mobile e desktop
```

---

**Salve este template em seu projeto e customize conforme necessário! ✨**
