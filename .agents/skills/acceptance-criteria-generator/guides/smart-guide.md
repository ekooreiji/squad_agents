# SMART Guide for Acceptance Criteria

Guia completo para criar Acceptance Criteria usando a metodologia SMART.

---

## S - Specific (Específico)

**O que significa**: O critério deve descrever exatamente o que acontece, sem margens para interpretação.

### Como aplicar
- Defina claramente a ação
- Identifique o ator envolvido
- Especifique o objeto/ Dado

### Mau exemplo
> "O sistema deve ser rápido"

### Bom exemplo
> "A página deve carregar em menos de 2 segundos"

### Maus sinais
- "deve funcionar bem"
- "deve ser rápido"
- "deve ser intuitivo"
- "normalmente"
- "geralmente"

---

## M - Measurable (Mensurável)

**O que significa**: Deve ser possível medir se o critério foi atendido ou não.

### Como aplicar
- Defina uma métrica concreta
- Estableça um threshold/limite
- Use números sempre que possível

### Mau exemplo
> "O sistema deve responder rapidamente"

### Bom exemplo
> "O tempo de resposta deve ser < 200ms"

### Por tipo de critério

| Tipo | Métrica |
|------|---------|
| Performance | Tempo (ms), Throughput (req/s) |
| Segurança | Tentativas bloqueadas, tempo de lockout |
| Usabilidade | Cliques até objetivo |
| dados | Tamanho máx, precisão |

---

## A - Achievable (Alcançável)

**O que significa**: O critério deve ser realizável com os recursos e tecnologia disponíveis.

### Como aplicar
- Considere limitações técnicas
- Avalie recursos disponíveis
- Considere tempo de desenvolvimento

### Questions a fazer
- É possível implementar com a tech stack atual?
-Temos os dados necessários?
- Há dependências externas?

---

## R - Relevant (Relevante)

**O que significa**: O critério deve estar alinhado ao objetivo da user story e ao benefício para o usuário.

### Como aplicar
- Trace o critério ao "Para que" da US
- Pergunte: "Isso realmente importa?"
- Remova critérios que não agregam valor

### Mau exemplo (irrelevante)
> "O arquivo deve ser salvo em formato XML"

### Bom exemplo (relevante)
> "O arquivo deve serexportável para planilha Excel"

---

## T - Time-bound (Tempo)

**O que significa**: Quando aplicável, defina o prazo ou momento em que o critério deve ser atendido.

### Como apply
- Defina quando o comportamento deve ocorrer
- Estabeleza timeout limits
- Considere deadlines do projeto

### Mau exemplo
> "O sistema deve enviar notificação"

### Bom exemplo
> "O sistema deve enviar notificação em até 5 minutos"

---

## Por Tipo de Acceptance Criteria

### Happy Path

O comportamento Esperado quando tudo funciona:

```markdown
- [ ] AC-001: Usuário faz login com credenciais válidas
  - Given: usuário está na tela de login
  - When: insere email e senha válidos
  - Then: é redirecionado ao dashboard
```

### Erro

Comportamento quando algo falha:

```markdown
- [ ] AC-002: Senha incorreta
  - Given: usuário está na tela de login
  - When: insere senha incorreta
  - Then: exibe mensagem "Senha incorreta"
  - And: campo senha é limpo
```

### Borda

Condições limite:

```markdown
- [ ] AC-003: Login com email maiúsculas
  - Given: usuário insere email em maiúsculas
  - When: tenta fazer login
  - Then: trata como case-insensitive
```

### NFR

Requisitos não-funcionais:

```markdown
- [ ] AC-004: Performance
  - Given: usuário tenta fazer login
  - When: submete credenciais
  - Then: resposta em < 500ms
```

---

## Checklist de Qualidade

| Critério |Pergunta |
|----------|----------|
| Específico | Posso descrever exatamente o que vai acontecer? |
| Mensurável | Como vou medir se passou ou falhou? |
| Alcançável | Tenho recursos para implementar? |
| Relevante | Isso realmente importa para o usuário? |
| Tempo | Quando deve acontecer? |