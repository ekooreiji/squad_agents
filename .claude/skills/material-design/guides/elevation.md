# Elevação - Material Design

Sistema de elevação.

---

## Sistema de Elevação

| Level | Shadow | dp |
|-------|--------|-----|
| 0 | none | 0dp |
| 1 | shadow(1) | 1dp |
| 2 | shadow(2) | 2dp |
| 3 | shadow(3) | 3dp |
| 4 | shadow(4) | 4dp |
| 6 | shadow(6) | 6dp |
| 8 | shadow(8) | 8dp |
| 12 | shadow(12) | 12dp |
| 16 | shadow(16) | 16dp |
| 24 | shadow(24) | 24dp |

---

## CSS Shadows

```css
.md-elevation--1 { box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); }
.md-elevation--2 { box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); }
.md-elevation--3 { box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); }
.md-elevation--4 { box-shadow: 0 15px 25px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.22); }
.md-elevation--6 { box-shadow: 0 20px 40px rgba(0,0,0,0.22), 0 10px 20px rgba(0,0,0,0.22); }
.md-elevation--24 { box-shadow: 0 25px 50px rgba(0,0,0,0.25), 0 20px 30px rgba(0,0,0,0.15); }
```

---

## Aplicação

```html
<button class="md-btn md-elevation--1">Flat</button>
<button class="md-btn md-elevation--2">Raised</button>
<button class="md-btn md-elevation--6">FAB</button>
```

---

## Interativo

```css
.md-card {
    transition: box-shadow 200ms ease;
}

.md-card:hover {
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}
```

---

## Notes

- dp = density pixels
- Mais alto = mais importante