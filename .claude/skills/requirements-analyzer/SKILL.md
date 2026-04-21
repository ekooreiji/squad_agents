---
name: requirements-analyzer
description: Extrai requisitos de documentos e comentários, identifica falhas lógicas
---

# Requirements Analyzer

Extrai requisitos de documentos, arquivos ou comentários de código, e identifica falhas lógicas e inconsistências.

## Como Usar

Forneça um arquivo (`.md`, `.txt`, código fonte) ou descrição textual de requisitos. A skill analisará e gerará um relatório estruturado.

## Entrada

- Arquivo (markdown, texto, código com comentários)
- Descrição textual de requisitos
- Documentação deFeature

## Processo

1. **Extração de Requisitos**
   - Identificar sentenças que expressam regras de negócio
   - Classificar por tipo: funcional, não-funcional, restrição, UI/UX
   - Usar templates disponíveis para estruturar

2. **Análise de Falhas Lógicas**
   - **Inconsistências**: Requisitos que contradizem outros
   - **Ambigüidades**: Linguagem vaga ("deve ser rápido", "normalmente")
   - **Requisitos Faltantes**: Casos de borda não cobertos
   - **Contradições**: Condições mutuamente exclusivas

3. **Verificação com Checklist**
   - Aplicar checklists review.md para validar qualidade

4. **Saída**
   - Relatório estruturado em Markdown (`requirements-report.md`)
   - Lista no chat com issues categorizadas
   - Sugestões de melhoria

## Formato de Saída

```markdown
# Requirements Analysis Report

## Extracted Requirements
| ID | Type | Description |
|----|------|------------|

## Issues Found
### Inconsistencies
- [ ]

### Ambiguities
- [ ]

### Missing Cases
- [ ]

### Contradictions
- [ ]

## Suggestions
- [ ]
```

## Assets Disponíveis

- `templates/functional.md` - Template de requisito funcional
- `templates/non-functional.md` - Template de NFR
- `templates/user-story.md` - Template deUser Story
- `checklists/review.md` - Checklist de revisão de requisitos
- `examples/analysis.md` - Exemplos de análise

## Boas Práticas

- Usar templates para garantir completude
- Sempre rodar checklist antes de finalizar
- Documentar suposições (assumptions)
- Incluir casos de erro e borda