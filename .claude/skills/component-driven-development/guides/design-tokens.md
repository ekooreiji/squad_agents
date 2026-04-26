# Design Tokens - CDD

Tokens de design.

---

## O que são Tokens

Valores de design:
- Cores
- Fontes
- Spacing
- Shadows

---

## Colors

```javascript
const tokens = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    background: '#ffffff',
    text: '#212529',
  }
};
```

---

## Typography

```javascript
const tokens = {
  fonts: {
    family: "'Inter', sans-serif",
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
    },
    weights: {
      regular: 400,
      medium: 500,
      bold: 700,
    }
  }
};
```

---

## Spacing

```javascript
const tokens = {
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  }
};
```

---

## Shadows

```javascript
const tokens = {
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.1)',
  }
};
```

---

## Border Radius

```javascript
const tokens = {
  radius: {
    none: '0',
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    full: '9999px',
  }
};
```

---

## Usage

```css
:root {
  --color-primary: #007bff;
  --font-family: 'Inter', sans-serif;
  --spacing-md: 1rem;
}

.btn {
  background: var(--color-primary);
  font-family: var(--font-family);
  padding: var(--spacing-md);
}
```

---

## Notes

- Single source
- Reutilizável