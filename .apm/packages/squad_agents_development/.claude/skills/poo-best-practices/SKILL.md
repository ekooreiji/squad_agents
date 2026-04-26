---
name: poo-best-practices
description: Guia de boas práticas de Programação Orientada a Objetos (POO) com exemplos em Python, JavaScript e TypeScript
---

# Boas Práticas de Programação Orientada a Objetos (POO)

Referência rápida de boas práticas de POO com exemplos práticos.

---

## Princípios Fundamentais

| Princípio | Descrição |
|-----------|-----------|
| **Encapsulamento** | Esconder detalhes internos, expor interface pública |
| **Herança** | Reutilizar código através de especialização |
| **Polimorfismo** | Um tipo, múltiplas formas de comportamento |
| **Abstração** | Simplificar complexidade, focar no essencial |
| **Responsabilidade Única** | Cada classe faz uma coisa bem feita |

---

## Guias

| Tópico | Arquivo |
|--------|--------|
| **Nomenclatura** | `guides/naming.md` |
| **Classes e Objetos** | `guides/classes-objects.md` |
| **Encapsulamento** | `guides/encapsulamento.md` |
| **Herança** | `guides/heranca.md` |
| **Polimorfismo** | `guides/polimorfismo.md` |
| **SOLID** | `guides/solid.md` |
| **Anti-Patterns** | `guides/anti-patterns.md` |

---

## Exemplos Rápidos

| Conceito | Python | TypeScript |
|---------|--------|-----------|
| Classe simples | `examples/python-classes.md` | `examples/typescript-classes.md` |
| Herança | `examples/python-inheritance.md` | `examples/typescript-inheritance.md` |
| Interfaces | - | `examples/typescript-interfaces.md` |

---

## Checklist

- `checklists/validation.md` - Checklist de validação POO

---

## Referências

- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)
- [GRASP Principles](https://en.wikipedia.org/wiki/GRASP_(object-oriented_design))
- [Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns)

## Skills Relacionadas

Esta skill complementa o workflow de Implementação:

- **[design-patterns](../design-patterns/SKILL.md)** - Padrões de projeto GoF
- **[software-architecture](../software-architecture/SKILL.md)** - Guia de arquitetura

### Fluxo de Integração

```
software-architecture → design-patterns → poo-best-practices
```

### Workflow

1. **Padrões**: Use design-patterns para escolher solução arquitetural
2. **BOAS Práticas**: Aplique poo-best-practices na implementação
3. **Valide**: Use SOLID e GRASP para boas práticas