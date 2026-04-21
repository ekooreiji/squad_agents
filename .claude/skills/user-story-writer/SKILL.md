---
name: user-story-writer
description: "User Story Writer: Estrutura histórias de usuário em formato padrão com critérios de aceitação em dois formatos (Given/When/Then e Checklist). Use para: criar user stories de requisitos, refinar histórias existentes, gerar critérios de aceitação, documentar fluxos de usuário."
argument-hint: "Descreva o requisito ou funcionalidade que deseja estruturar como user story"
---

# 📖 User Story Writer

## Quando Usar

Use `/user-story` quando precisar:
- 📝 **Criar** user stories estruturadas a partir de requisitos
- 🎯 **Refinar** histórias existentes com critérios de aceitação
- ✅ **Gerar** critérios de aceitação em múltiplos formatos
- 🔍 **Documentar** fluxos de usuário de forma padronizada
- 🤝 **Comunicar** requisitos de forma clara para dev + QA

---

## ⚙️ Modo de Operação

### Fase 1: Coleta
1. Receber requisito em **texto livre** ou **analisar arquivo**
2. Identificar:
   - Quem é o usuário (persona/role)
   - O que ele quer fazer (ação)
   - Por que quer fazer (valor/benefício)

### Fase 2: Estruturação
3. Estruturar em formato padrão:
   ```
   Como [persona]
   Quero [ação]
   Para [benefício]
   ```

### Fase 3: Critérios de Aceitação
4. Criar **dois formatos** de critérios:
   
   **Formato 1: Given/When/Then** (BDD, para dev)
   ```
   Dado [contexto inicial]
   Quando [ação do usuário]
   Então [resultado esperado]
   ```

   **Formato 2: Checklist** (QA/Simples)
   ```
   - [ ] Critério 1 testável e verificável
   - [ ] Critério 2
   ```

### Fase 4: Validação
5. Aplicar checklist de qualidade
6. Gerar arquivo `.md` pronto

---

## 📋 Entrada Flexível

A skill aceita:

- **Texto simples**: "Usuário deve poder fazer login com Google"
- **Arquivo existente**: Analisar `.md`, `.txt`, comentários no código
- **Requisito incompleto**: Preencher gaps automaticamente com sugestões
- **User story existente**: Refinar ou gerar critérios faltantes

---

## 📐 Estrutura de Output

Veja o template completo — a skill gera arquivo com essa estrutura:

```markdown
# US-XXX: [Título]

## User Story
Como [persona]
Quero [ação]
Para [benefício]

## Critérios de Aceitação

### Formato 1: Given/When/Then
Cenário: [Nome descritivo]
Dado [contexto]
Quando [ação]
Então [resultado]

### Formato 2: Checklist
- [ ] Critério 1
- [ ] Critério 2

## Notas & Dependências
- Dependências: (se houver)
- Regras de negócio: (se houver)
- Casos excepcionais: (se houver)

## Qualidade
✅ Passou no checklist de QA
```

---

## 📚 Referências

- Template Completo — estrutura pronta para copiar
- Exemplos de Boas User Stories — padrões reais
- Checklist de Qualidade — critérios de validação

---

## 🎯 Exemplo de Uso

**User:**
> `/user-story Usuário quer fazer login com OAuth do Google`

**Skill Output:**
1. Estrutura a US conforme padrão
2. Gera critérios Given/When/Then para dev
3. Gera checklist para QA
4. Valida com checklist de qualidade
5. Cria arquivo `user-stories/login-google.md` pronto
6. Sugere refinamentos se houver ambiguidades

---

##  Dicas de Uso

1. **Comece simples**: Forneça requisito básico, a skill expande
2. **Refine iterativamente**: "Adicione mais cenários" ou "Detalhe o caso X"
3. **Use ambos formatos**: BDD para dev, Checklist para QA comunicarem-se melhor
4. **Validação integrada**: Skill verifica qualidade automaticamente

---

## 📌 Palavras-chave para Descoberta

User story • Historia de usuario • Acceptance criteria • BDD • Gherkin • Dado/Quando/Então • Given/When/Then • Requisito • Feature • Caso de uso
