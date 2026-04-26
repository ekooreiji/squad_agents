# Acceptance Criteria Validation Checklist

Use esta checklist para validar a qualidade dos critérios de aceitação antes de finalizar.

## Verificabilidade

- [ ] Cada AC pode ser verificado por alguém (QA, tester, usuário)
- [ ] Critério não depende de interpretação subjetiva
- [ ] Resultado esperado está claramente descrito

## Mensurabilidade

- [ ] AC tem métrica ou comportamento observável
- [ ] É possível medir se passou ou falhou
- [ ] Threshold está definido (para NFRs)

## Testabilidade

- [ ] AC pode ser coberto por teste automatizado
- [ ] TC (test case) pode ser escrito para o AC
- [ ] Dado-When-Then está completo

## Completude

- [ ] Happy path coberto
- [ ] Pelo menos um caso de erro coberto
- [ ] Casos de borda considerados
- [ ] Fluxos alternativos mapeados

## Clareza

- [ ] Linguagem é objetiva, sem ambiguidade
- [ ] Termos técnicos são consistentes
- [ ] Não há frases como "deve funcionar bem", "deve ser rápido"
- [ ] Ação e resultado esperados estão claros

## Independência

- [ ] Cada AC pode ser testado independentemente
- [ ] AC não depende de outro AC para ser verificado
- [ ] Pré-condições estão explicitadas

## rastreabilidade

- [ ] AC está linkado à User Story
- [ ] ID único atribuído a cada AC
- [ ] Origem do requisito está mapeada

## Cobertura de Testes

| Tipo de AC | Cobertura Mínima |
|------------|-------------------|
| Happy Path | 100% |
| Erro | 80% |
| Borda | 60% |
| NFR | 100% |

## Issues Encontradas

| AC | Issue | Severidade | Correção |
|----|-------|-----------|-----------|
| | | | |