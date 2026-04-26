# Exemplos - BEM

Exemplos práticos com Bootstrap.

---

## Button (Bootstrap)

```css
/* Block */
.btn {
    display: inline-flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
}

/* Elements */
.btn__icon {}
.btn__text {}
.btn__loading {}

/* Modifiers */
.btn--primary { background: #0d6efd; }
.btn--secondary { background: #6c757d; }
.btn--success { background: #198754; }
.btn--danger { background: #dc3545; }
.btn--outline-primary { border: 1px solid #0d6efd; color: #0d6efd; }
.btn--large { font-size: 1.25rem; padding: 0.5rem 1rem; }
.btn--small { font-size: 0.875rem; padding: 0.25rem 0.5rem; }
.btn--disabled { opacity: 0.65; pointer-events: none; }
```

---

## Card (Bootstrap)

```css
.card {
    border: 1px solid rgba(0,0,0,0.125);
    border-radius: 0.25rem;
}
.card__image {}
.card__body { padding: 1rem; }
.card__title { font-size: 1.25rem; margin-bottom: 0.5rem; }
.card__text { margin-bottom: 1rem; }
.card__footer { padding: 0.75rem 1rem; border-top: 1px solid rgba(0,0,0,0.125); }
.card--primary { border-color: #0d6efd; }
.card--horizontal { display: flex; flex-direction: row; }
.card--compact { padding: 0; }
```

---

## Form (Bootstrap)

```css
.form {}
.form__group { margin-bottom: 1rem; }
.form__field {}
.form__label { display: inline-block; margin-bottom: 0.5rem; }
.form__error { display: none; color: #dc3545; font-size: 0.875rem; }
.form__error--visible { display: block; }

.form--horizontal { display: flex; }
.form--inline .form__field { display: inline-flex; }
```

---

## Menu (Bootstrap)

```css
.menu {}
.menu__item {}
.menu__link { display: block; padding: 0.5rem 1rem; }
.menu__divider { height: 1px; margin: 0.5rem 0; background: #dee2e6; }

.menu--horizontal { display: flex; }
.menu--horizontal .menu__item { display: inline-flex; }
.menu--vertical { display: flex; flex-direction: column; }
```

---

## Modal (Bootstrap)

```css
.modal {}
.modal__dialog { max-width: 500px; margin: 1.75rem auto; }
.modal__content { border-radius: 0.375rem; }
.modal__header { padding: 1rem; border-bottom: 1px solid #dee2e6; }
.modal__title { font-size: 1.25rem; margin-bottom: 0; }
.modal__body { padding: 1rem; }
.modal__footer { padding: 0.75rem; border-top: 1px solid #dee2e6; }

.modal--lg .modal__dialog { max-width: 800px; }
.modal--sm .modal__dialog { max-width: 300px; }
.modal--center { display: flex; align-items: center; }
```

---

## Nav (Bootstrap)

```css
.nav {}
.nav__item {}
.nav__link { display: block; padding: 0.5rem 1rem; }
.nav__link--active { color: #0d6efd; }

.nav--horizontal { display: flex; }
.nav--horizontal .nav__item { display: inline-flex; }
.nav--tabs { border-bottom: 1px solid #dee2e6; }
.nav--pills .nav__link { border-radius: 0.25rem; }
```