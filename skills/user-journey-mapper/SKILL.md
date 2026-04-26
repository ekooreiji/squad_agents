---
name: user-journey-mapper
description: Mapeia jornada do usuário com touchpoints, pain points e oportunidades
---

# User Journey Mapper

Mapeia a jornada completa do usuário identificando estágios, touchpoints, emoções, pain points e oportunidades de melhoria.

## Como Usar

Forneça uma descrição de persona e o objetivo que o usuário quer alcançar. A skill gerará um journey map completo.

## Entrada

- Persona: perfil, características, objetivos, frustrações
- Objetivo do usuário a alcançar
- Contexto de produto/serviço

## Processo

1. **Mapeamento da Jornada**
   - Identificar estágios da jornada
   - Mapear ações do usuário em cada estágio
   - Documentar touchpoints (canais de contato)
   - Registrar sentimentos/emocões

2. **Análise de Pontos**
   - **Pain Points**: Frustrações e obstáculos
   - **Delight Points**: Momentos positivos
   - **Opportunities**: Melhorias identificadas

3. **Priorização**
   - Impacto x Esforço
   - ROI estimado
   - Quick wins identificados

## Formato de Saída

```markdown
# User Journey Map: [Nome]

## Persona
- **Perfil**: [descrição]
- **Objetivo**: [objetivo principal]
- **Contexto**: [informações adicionais]

## Estágios da Jornada

| Estágio | Ação | Touchpoint | Sentimento | Pain Point | Opportunity |
|--------|------|-----------|-----------|-----------|--------------|
| Descoberta | ... | ... | 😐 | ... | ... |
```

## Assets Disponíveis

- `templates/journey-map.md` - Template de journey map
- `checklists/validation.md` - Checklist de validação
- `guides/journey-guide.md` - Guia de análise de jornada
- `examples/sample-journey.md` - Exemplo completo
- `examples/templates-by-domain.md` - Templates por domínio

## Boas Práticas

- Validar com usuários reais
- Usar dados reais (analytics, suporte)
- Iterar o mapa conforme descobertas
- Manter foco no usuário, não no processo

## Skills Relacionadas

Esta skill complementa o workflow de Produto:

- **[template-library](../template-library/SKILL.md)** - Templates para Feature Spec e Épico
- **[stakeholder-impact-analyzer](../stakeholder-impact-analyzer/SKILL.md)** - Análise de stakeholders antes do mapeamento
- **[ux-design](../ux-design/SKILL.md)** - Pesquisa e validação antes do mapeamento
- **[briefing-demandas](../briefing-demandas/SKILL.md)** - Entender necessidades do cliente antes do mapeamento
- **[design-thinking](../design-thinking/SKILL.md)** - Abordagem DT para problemas complexos

### Fluxo de Integração

```
stakeholder-impact-analyzer → ux-design → user-journey-mapper → template-library
```

### Workflow

1. **Stakeholders**: Primeiro use stakeholder-impact-analyzer
2. **Jornada**: Depois use user-journey-mapper para mapear experiência
3. **Documente**: Use template-library para criar documentação