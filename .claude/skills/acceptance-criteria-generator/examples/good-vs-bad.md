# Bons vs Maus Acceptance Criteria

Comparação de Acceptance Criteria bem e mal formulados.

---

## Login

### Mau Exemplo
```markdown
## Acceptance Criteria

- O sistema deve fazer login
- Deve ser rápido
- Deve funcionar bem
```

**Problemas:**
- Não especifica o que é "fazer login"
- "rápido" e "bem" são subjetivos
- Não há casos de erro

### Bom Exemplo
```markdown
## Acceptance Criteria

| ID | Tipo | Critério | Critério de Teste | Prioridade |
|----|------|----------|--------------------|------------|
| AC-001 | Happy | Login com credenciais válidas | Redireciona ao dashboard | Must |
| AC-002 | Erro | Login com senha incorreta | Exibe "Senha incorreta" | Must |
| AC-003 | Erro | Login com email inexistente | Exibe "Usuário não encontrado" | Must |
| AC-004 | Borda | Login com email maiúsculo | Trata case-insensitive | Should |
| AC-005 | NFR | Tempo de resposta | < 500ms | Must |

### Happy Path
- [ ] AC-001: Given usuário na página de login, when insere email/senha válidos, then redireciona ao dashboard

### Casos de Erro
- [ ] AC-002: Given senha incorreta, when login, then exibe "Senha incorreta"
- [ ] AC-003: Given email inexistente, when login, then exibe "Usuário não encontrado"
```

---

## Upload de Arquivo

### Mau Exemplo
```markdown
## Acceptance Criteria

- Usuário pode fazer upload de arquivos
- Arquivos devem ser grandes
- Precisa ter validação
```

**Problemas:**
- "arquivos grandes" - quanto é grande?
- "validação" - qual?
- Não especifica tipos de arquivo

### Bom Exemplo
```markdown
## Acceptance Criteria

| ID | Tipo | Critério | Critério de Teste |
|----|------|----------|--------------------|
| AC-001 | Happy | Upload arquivo válido | Arquivo salvo com sucesso |
| AC-002 | Erro | Arquivo > 10MB | Exibe "Arquivo excede limite de 10MB" |
| AC-003 | Erro | Tipo não allowed | Exibe "Tipo de arquivo não permitido" |
| AC-004 | Borda | Arquivo com nome duplicado | Adiciona sufixo (1), (2) |
| AC-005 | Erro | Arquivo vazio | Exibe "Arquivo vazio não permitido" |

### Happy Path
- [ ] AC-001: Given arquivo válido, when faz upload, then arquivo salvo no sistema

### Casos de Erro
- [ ] AC-002: Given arquivo 15MB, when upload, then exibe erro de limite
- [ ] AC-003: Given arquivo .exe, when upload, then exibe tipo não permitido
```

---

## Busca

### Mau Exemplo
```markdown
## Acceptance Criteria

- Busca deve funcionar
- Resultados devem ser relevantes
- Deve ser rápida
```

**Problemas:**
- "funcionar" - vague
- "relevantes" - subjetivo
- "rápida" - sem métrica

### Bom Exemplo
```markdown
## Acceptance Criteria

| ID | Tipo | Critério | Critério de Teste |
|----|------|----------|--------------------|
| AC-001 | Happy | Busca por termo existente | Retorna resultados relacionados |
| AC-002 | Happy | Busca por termo inexistente | Retorna "Nenhum resultado" |
| AC-003 | Borda | Busca com termo vazio | Ignora busca ou sugere termos |
| AC-004 | Borda | Busca com caractere especial | Escape e trata como literal |
| AC-005 | NFR | Tempo de busca | < 300ms para 10k registros |

### Happy Path
- [ ] AC-001: Given termo "python", when busca, then retorna cursos com "python"

### Casos de Borda
- [ ] AC-003: Given busca vazia, when submete, then exibe mensagem informativa
```

---

## Resumo

| Mau | Bom |
|-----|-----|
| Linguagem vaga | Métrica concreta |
| Um AC para tudo | Um AC por comportamento |
| Sem casos de erro | Happy + Erro + Borda |
| Não testável | Testável automaticamente |
| Sem threshold | Threshold definido |