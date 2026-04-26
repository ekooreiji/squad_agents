# Material Patterns

Padrões Material Design.

---

## Button

```css
.md-btn {
    padding: 0 16px;
    height: 36px;
    border-radius: 4px;
    text-transform: uppercase;
}
.md-btn--contained { background: var(--md-primary); color: white; }
.md-btn--outlined { border: 1px solid var(--md-primary); }
.md-btn--text { background: transparent; }
```

---

## Card

```css
.md-card {
    border-radius: 4px;
    background: white;
}
.md-card__media { height: 200px; }
.md-card__title { font: 500 20sp/24sp Roboto; }
.md-card__supporting-text { font: 400 14sp/20sp Roboto; color: rgba(0,0,0,0.6); }
```

---

## Text Field

```css
.md-text-field__input {
    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.3);
}
.md-text-field__input:focus {
    border-bottom: 2px solid var(--md-primary);
}
```

---

## FAB

```css
.md-fab {
    width: 56px;
    height: 56px;
    border-radius: 16px;
    background: var(--md-secondary);
}
```

---

## Elevation

```css
.md-elevation--1 { box-shadow: 0 1px 3px rgba(0,0,0,0.12); }
.md-elevation--4 { box-shadow: 0 8px 16px rgba(0,0,0,0.15); }
.md-elevation--8 { box-shadow: 0 16px 24px rgba(0,0,0,0.2); }
```