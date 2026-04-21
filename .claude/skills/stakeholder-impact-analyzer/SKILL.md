---
name: stakeholder-impact-analyzer
description: Mapeia quem é afetado por cada decisão ou feature
---

# Stakeholder Impact Analyzer

Analisa e mapeia todos os stakeholders afetados por uma decisão, regra de negócio ou feature, identificando impacto,dependencies e ações necessárias.

## Como Usar

Forneça uma regra de negócio, descrição de feature ou decisão de produto/engenharia. A skill gerará uma análise completa de stakeholders.

## Entrada

- Feature ou requisito de negócio
- Decisão de produto ou engenharia
- Mudança de processo ou política

## Processo

1. **Identificação de Stakeholders**
   - Listar todos os envolvidos e afetados
   - Categorizar por tipo (interno, externo, indireto)
   - Mapear nível de influência e interesse

2. **Análise de Impacto**
   - Tipo de impacto (positivo, negativo, neutro)
   - Magnitude (alto, médio, baixo)
   - Ações necessárias (comunicação, aprovação, treinamento)

3. **Mapeamento de Relacionamento**
   - Matriz de Influência x Interesse
   - Dependências entre stakeholders
   - Riscos e estratégias de mitigação

## Formato de Saída

```markdown
# Stakeholder Impact Analysis

## Feature: [Nome]

## Matriz de Stakeholders

| Stakeholder | Tipo | Impacto | Magnitude | Ação Necessária |
|-------------|------|---------|-----------|------------------|
| Usuário final | Externo | Positivo | Alto | Comunicação |
| Time de Suporte | Interno | Negativo | Médio | Treinamento |

## Matriz de Influência

| Stakeholder | Influência | Interesse | Estratégia |
|--------------|-------------|-----------|-------------|
| | | | |

## Riscos e Mitigações

| Risco | Stakeholder | Mitigação |
|-------|-------------|-----------|
| | | |
```

## Assets Disponíveis

- `templates/stakeholder-matrix.md` - Template de matriz
- `checklists/validation.md` - Checklist de validação
- `guides/stakeholder-guide.md` - Guia completo
- `examples/sample-analysis.md` - Exemplo completo
- `examples/templates-by-type.md` - Templates por tipo

## Boas Práticas

- Incluir stakeholders indiretos Often ignorados
- Ser honesto sobre impactos negativos
- Criar plano de comunicação para cada grupo
- Revisar com stakeholders afetados