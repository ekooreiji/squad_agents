---
name: functional-programming
description: Referência completa de Programação Funcional com exemplos em Python, TypeScript e JavaScript
---

# Programação Funcional

Referência completa de conceitos, padrões e técnicas de Programação Funcional com exemplos práticos em múltiplas linguagens.

---

## Conceitos Fundamentais

| Conceito | Descrição |
|----------|----------|
| **Funções Puras** | Sem side effects, mesmo input = mesmo output |
| **Imutabilidade** | Dados não mudam após criação |
| **High-Order Functions** | Funções que recebem/retornam funções |
| **Currying** | Função com múltiplos args → cadeia de funções |
| **Composition** | Combinar funções pequenas |
| **Functors** | Objetos que mapeiam sobre valores |
| **Monads** | Padrão para encadear operações |
| **Transducers** | Composição de transforms eficiente |
| **Lazy Evaluation** | Avaliar apenas quando necessário |

---

## Guias de Conceitos

### Conceitos Básicos
- `guides/fundamentals.md` - Funções puras, imutabilidade, HOFs, closures, pipe, lazy

### Conceitos Avançados
- `guides/advanced.md` - Functors, Monads, Either, Applicatives, Transducers

---

## Exemplos por Conceito

| Conceito | Arquivo |
|---------|---------|
| **map** | `examples/map.md` |
| **filter** | `examples/filter.md` |
| **reduce** | `examples/reduce.md` |
| **composition** | `examples/composition.md` |
| **currying** | `examples/currying.md` |

Cada arquivo contém exemplos em **Python**, **TypeScript** e **JavaScript**.

---

## Estruturas por Framework

### Frontend
| Framework | Arquivo |
|-----------|---------|
| **React** | `structures/react-functional.md` |
| **Angular + RxJS** | `structures/angular-functional.md` |

### Backend
| Framework | Arquivo |
|-----------|---------|
| **FastAPI** | `structures/fastapi-functional.md` |
| **Express** | `structures/express-functional.md` |

---

## Validação

- `checklists/validation.md` - Checklist completo de validação FP

---

## Referências

- [Functional Programming Principles](https://en.wikipedia.org/wiki/Functional_programming)
- [Ramda.js](https://ramdajs.com/)
- [fp-ts (TypeScript)](https://gcanti.github.io/fp-ts/)
- [Python functools](https://docs.python.org/3/library/functools.html)