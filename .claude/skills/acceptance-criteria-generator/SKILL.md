---
name: acceptance-criteria-generator
description: Gera critérios de aceitação bem-formados (SMART)
---

# Acceptance Criteria Generator

Gera critérios de aceitação bem estruturados e verificáveis para histórias de usuário.

## Como Usar

Forneça uma história de usuário no formato "Como [ator], Eu quero [ação], Para que [benefício]" ou uma descrição de funcionalidade. A skill gerará Acceptance Criteria SMART.

## Entrada

- User Story: "Como... Eu quero... Para que..."
- Descrição de funcionalidade
- Requisito de negócio

## Processo

1. **Análise da User Story**
   - Identificar ator, ação e benefício
   - Decompor em passos do fluxo
   - Mapear atores e dados envolvidos

2. **Geração de ACs SMART**
   - **Specific**: critérios claros e objetivos
   - **Measurable**: verificáveis com métrica
   - **Achievable**: realizáveis
   - **Relevant**: alinhados ao objetivo
   - **Time-bound**: quando aplicável

3. **Categorização**
   - Happy Path (fluxo principal)
   - Casos de Borda (condições limite)
   - Casos de Erro (exceções)
   - NFRs relacionados (performance, security)

4. **Validação**
   - Aplicar checklist de validação

## Formato de Saída

```markdown
## Acceptance Criteria

| ID | Tipo | Critério | Critério de Teste | Prioridade |
|----|------|----------|--------------------|------------|
| AC-001 | Happy | ... | ... | Must |
| AC-002 | Erro | ... | ... | Should |

### Happy Path
- [ ] AC-001: Verificação detail

### Casos de Erro
- [ ] AC-002: Erro específico = mensagem esperada

### Casos de Borda
- [ ] AC-003: Condição limite handling

## Definition of Done
- [ ] Todos os ACs passando
- [ ] Cobertura de testes aprovada
- [ ] Code review aprovado
```

## Assets Disponíveis

- `templates/acceptance-criteria.md` - Template de AC
- `checklists/validation.md` - Checklist de validação
- `guides/smart-guide.md` - Guia de boas práticas
- `examples/good-vs-bad.md` - Bons vs Maus critérios
- `examples/transformations.md` - Transformações práticas

## Boas Práticas

- Cada AC deve ser verificável independentemente
- Usar linguagem objetiva sem ambiguidade
- Incluir sempre happy path, erros e bordas
- Validar com checklist antes de finalizar