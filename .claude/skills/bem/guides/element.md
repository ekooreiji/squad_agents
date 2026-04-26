# Elements - BEM

Partes de um block.

---

## O que é Element

Parte dependente de um block:
- Não faz sentido standalone
- Pertence a um block específico
- Referenciado pelo block-pai

---

## Sintaxe

```css
.block__element {}
```

---

## Exemplos

### Button Elements

```css
.btn {}
.btn__icon {}
.btn__text {}
.btn__loading {}
```

```html
<button class="btn">
    <span class="btn__icon">+</span>
    <span class="btn__text">Texto</span>
</button>
```

### Card Elements

```css
.card {}
.card__image {}
.card__title {}
.card__description {}
.card__actions {}
.card__footer {}
```

```html
<article class="card">
    <img class="card__image" src="img.jpg" alt="">
    <div class="card__body">
        <h3 class="card__title">Título</h3>
        <p class="card__description">Descrição</p>
    </div>
    <div class="card__actions">
        <button class="btn">Ação</button>
    </div>
</article>
```

### Menu Elements

```css
.menu {}
.menu__item {}
.menu__link {}
.menu__divider {}
```

---

## Características

- Tem dupla underline (__)
- Sempre conectado ao block
- Pode ter modifiers

---

## Notes

- Elemento = parte do block