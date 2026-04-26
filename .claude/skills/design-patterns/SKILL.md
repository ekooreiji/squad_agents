---
name: design-patterns
description: Guia completo de Design Patterns (GoF) com exemplos em Python, JavaScript, TypeScript, Ruby, Java e C# - tanto em POO quanto Funcional
---

# Design Patterns

Referência completa dos principais Design Patterns com implementação em múltiplas linguagens e paradigmas.

---

## Categorias (GoF)

| Categoria | Descrição | Padrões |
|-----------|----------|--------|
| **Criação (Creational)** | Como criar objetos | Singleton, Factory Method, Abstract Factory, Builder, Prototype |
| **Estrutural (Structural)** | Como organizar classes | Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy |
| **Comportamental (Behavioral)** | Como comunicar objetos | Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor |

---

## Guias

| Guia | Descrição |
|------|---------|
| `guides/creational.md` | Padrões de criação (Singleton, Factory, etc.) |
| `guides/structural.md` | Padrões estruturais (Adapter, Decorator, etc.) |
| `guides/behavioral.md` | Padrões comportamentais (Observer, Strategy, etc.) |
| `guides/enterprise.md` | Padrões empresariais (Repository, Unit of Work, etc.) |

---

## Exemplos por Linguagem

| Linguagem | Paradigma | Diretório |
|---------|---------|---------|
| **Python** | OOP + Funcional | `examples/python/` |
| **JavaScript** | OOP + Funcional | `examples/javascript/` |
| **TypeScript** | OOP + Funcional | `examples/typescript/` |
| **Ruby** | OOP + Funcional | `examples/ruby/` |
| **Java** | OOP + Funcional | `examples/java/` |
| **C#** | OOP + Funcional | `examples/csharp/` |

---

## Templates

| Categoria | Template |
|-----------|---------|
| Criação | `templates/creational.md` |
| Estrutural | `templates/structural.md` |
| Comportamental | `templates/behavioral.md` |

---

## Quando Usar

| Situação | Padrão Recomendado |
|---------|---------------|
| Garantir uma única instância | Singleton |
| Criar objetos complexos | Builder, Factory Method |
| Proteger criação | Factory Method, Abstract Factory |
| Adicionar responsabilidades dinamicamente | Decorator |
| Simplificar sistema complexo | Facade |
| Organizar objetos em árvore | Composite |
| Manter estado de objeto | Memento |
| Notificar mudanças | Observer |
| Trocar comportamento em runtime | Strategy, State |
| Encapsular requisição | Command |
| Encadear обработка | Chain of Responsibility |

---

## Paradigmas Suportados

### POO (Programação Orientada a Objetos)
- Herança, polimorfismo, encapsulamento
- Classes, interfaces, herança

### Funcional
- Funções de primeira classe
- Imutabilidade
- Composition, pipe

---

## Referências

- [GoF Design Patterns](https://en.wikipedia.org/wiki/Design_Patterns)
- [Gamma's Patterns](https://www.oodesign.com/)
- [SourceMaking Design Patterns](https://sourcemaking.com/design-patterns)

## Skills Relacionadas

Esta skill complementa o workflow de Arquitetura:

- **[software-architecture](../software-architecture/SKILL.md)** - Guia completo de arquitetura de software
- **[poo-best-practices](../poo-best-practices/SKILL.md)** - Boas práticas de POO
- **[hexagonal-architecture](../hexagonal-architecture/SKILL.md)** - Arquitetura Hexagonal (Ports & Adapters)

### Fluxo de Integração

```
software-architecture → design-patterns → poo-best-practices
                           ↘
                    hexagonal-architecture
```

### Workflow

1. **Arquitetura**: Escolha tipo de arquitetura (software-architecture)
2. **Padrões**: Aplique design-patterns para implementar soluções
3. **POO**: Siga boas práticas (poo-best-practices)
4. **Estruture**: Use hexagonal-architecture para isolar domínio