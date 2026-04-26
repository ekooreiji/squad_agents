# Introdução ao BEM

Metodologia de nomenclatura CSS criada pela Yandex.

---

## O que é BEM

Block Element Modifier:
- **Block**: componente independente
- **Element**: parte do block
- **Modifier**: variação

---

## Sintaxe

```css
.block {}
.block__element {}
.block--modifier {}
```

---

## Origem

Criado pela Yandex (2009) para desenvolvimento escala

---

## Exemplo Bootstrap

```css
.btn {}
.btn__icon {}
.btn--primary {}
```

---

## Comparações

| Metodologia | Prós | Contras |
|-------------|------|---------|
| BEM | Estrutura clara | Nomes longos |
| CSS Modules | Escopo local | Build tool |
| SMACSS | Organizado | Flexível |
| OOCSS | Reutilizável | Abstrato |

---

## BEM vs CSS Modules

```css
/* BEM */
.btn {}
.btn__text {}

/* CSS Modules */
.Button__text__3kTs {}
```

---

## BEM vs Styled Components

```css
/* BEM */
.btn {}
.btn__text {}

/* Styled Components */
const ButtonText = styled.span`
  font-size: 16px;
`;
```

---

## Quando usar

- Projetos grandes
- Equipes distribuídas
- Design systems