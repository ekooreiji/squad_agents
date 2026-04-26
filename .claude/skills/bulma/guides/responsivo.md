# Responsivo - Bulma

Design responsivo com Bulma.

---

## Breakpoints

| Breakpoint | Largura |
|------------|---------|
| mobile | < 768px |
| tablet | ≥ 768px |
| desktop | ≥ 1023px |
| widescreen | ≥ 1216px |
| fullhd | ≥ 1408px |

---

## Responsive Classes

```html
<!-- Hide -->
<div class="is-hidden-mobile">Hide mobile</div>
<div class="is-hidden-tablet">Hide tablet</div>
<div class="is-hidden-desktop">Hide desktop</div>

<!-- Visible -->
<div class="is-visible-mobile">Visible mobile</div>
<div class="is-visible-tablet-only">Visible tablet only</div>
```

---

## Column Responsive

```html
<div class="columns">
    <div class="column is-12-mobile is-6-tablet is-4-desktop">
        Coluna responsiva
    </div>
</div>
```

---

## Flexbox Responsive

```html
<div class="columns is-mobile">
    <div class="column">Mobile columns</div>
</div>
```

---

## Display Responsive

```html
<div class="is-block">Block</div>
<div class="is-flex">Flex</div>
<div class="is-inline">Inline</div>
<div class="is-inline-block">Inline-block</div>
```

---

## Spacing Responsive

```html
<div class="mx-2">Margin</div>
<div class="px-2">Padding</div>

<!-- Responsive -->
<div class="my-2-tablet">My 2</div>
```

---

## Notes

- Mobile-first
- Classes responsivas nativas