# Boas Práticas - Foundation CSS

Boas práticas ao usar Foundation.

---

## Estrutura HTML

- Usar semantic markup
- Manter ordem: grid-container → grid-x → cell
- sempre incluir viewport meta

---

## Grid

- Máximo 12 colunas por row
- Não aninhar mais de 2 níveis
- Usar breakpoints corretos (small-, medium-, large-)

---

## CSS

- Manter imports em ordem
- Não sobrescrever classes core
- Usar variáveis Sass

---

## JavaScript

- Carregar jQuery antes do Foundation
- Inicializar: $(document).foundation()
- Usar data attributes

---

## Performance

- Incluir apenas componentes usados
- Minificar em produção
- Usar grid flex quando possível

---

## Acessibilidade

- Labels sempre visíveis
- Usar aria attributes
- Testar com teclado

---

## Responsive

- Mobile-first
- Testar todos os breakpoints
- Usar Interchange para imagens

---

## Forms

- Usar Abide validation
- Labels associados aos inputs
- Required fields marcados

---

## Cross-browser

- Testar Chrome, Firefox, Safari, Edge
- Usar prefixos se necessário