---
name: template-library
description: Oferece templates prontos (Épico, Release Notes, FAQs, Roadmap)
---

# Template Library

Biblioteca de templates prontos para documentação de produto e engenharia. Fornece templates estruturados com instruções de preenchimento.

## Como Usar

Informe o tipo de template desejado. A skill retornará o template com estrutura e instruções.

## Tipos de Templates Disponíveis

| Template | Descrição | Uso |
|----------|-----------|-----|
| **Épico** | Feature grande com múltiplas user stories | Features complexas |
| **Release Notes** | Notas de release para usuários | Lançamentos |
| **FAQ** | Perguntas frequentes por categoria | Documentação de suporte |
| **Roadmap** | Planejamento por trimestre/ano | Planejamento |
| **User Story** | História de usuário individual | Desenvolvimento |
| **Feature Spec** | Especificação técnica de feature | Engenharia |
| **Changelog** | Histórico de mudanças | Releases técnicas |

## Processo

1. Identificar tipo de template solicitado
2. Fornecer template com estrutura
3. Incluir instruções de preenchimento
4. Direcionar para exemplo correspondente
5. Disponibilizar checklist

## Templates

Localização: `templates/`

- `templates/epic.md` - Template de Épico
- `templates/release-notes.md` - Template de Release Notes
- `templates/faq.md` - Template de FAQ
- `templates/roadmap.md` - Template de Roadmap
- `templates/user-story.md` - Template de User Story
- `templates/feature-spec.md` - Template de Feature Spec
- `templates/changelog.md` - Template de Changelog

## Exemplos

Localização: `examples/`

- `examples/filled-epic.md` - Exemplo de Épico
- `examples/filled-release-notes.md` - Exemplo de Release Notes
- `examples/filled-faq.md` - Exemplo de FAQ
- `examples/filled-roadmap.md` - Exemplo de Roadmap
- `examples/filled-user-story.md` - Exemplo de User Story
- `examples/filled-feature-spec.md` - Exemplo de Feature Spec
- `examples/filled-changelog.md` - Exemplo de Changelog

## Checklist

Localização: `checklists/validation.md`

Use para validar cada documento antes de finalizar.

## Boas Práticas

- Preencher todas as seções obrigatórias
- Usar exemplos como referência
- Revisar com checklist
- Manter consistência de formato

---

## Skills Relacionadas

Esta skill complementa o workflow de produto:

- **[ux-design](../ux-design/SKILL.md)** - Para criar fluxos antes de documentar
- **[user-journey-mapper](../user-journey-mapper/SKILL.md)** - Para mapear jornadas antes da documentação
- **[stakeholder-impact-analyzer](../stakeholder-impact-analyzer/SKILL.md)** - Para identificar stakeholders
- **[gestao-projetos](../gestao-projetos/SKILL.md)** - Para gerenciar projetos após templates

### Fluxo de Integração

```
stakeholder-impact-analyzer → ux-design → user-journey-mapper → template-library → developer
```