# Implementation Guide

CSS implementation guide for color systems with variables, dark mode, and theming.

---

## 1. CSS Variables

### 1.1 Base Setup

```css
:root {
  /* Primary */
  --color-primary-50: #EFF6FF;
  --color-primary-100: #DBEAFE;
  --color-primary-200: #BFDBFE;
  --color-primary-300: #93C5FD;
  --color-primary-400: #60A5FA;
  --color-primary-500: #3B82F6;
  --color-primary-600: #2563EB;
  --color-primary-700: #1D4ED8;
  --color-primary-800: #1E40AF;
  --color-primary-900: #1E3A8A;

  /* Secondary */
  --color-secondary-500: #8B5CF6;
  
  /* Accent */
  --color-accent-500: #F59E0B;

  /* Neutrals */
  --color-neutral-50: #FAFAFA;
  --color-neutral-100: #F5F5F5;
  --color-neutral-200: #E5E5E5;
  --color-neutral-300: #D4D4D4;
  --color-neutral-400: #A3A3A3;
  --color-neutral-500: #737373;
  --color-neutral-600: #525252;
  --color-neutral-700: #404040;
  --color-neutral-800: #262626;
  --color-neutral-900: #171717;

  /* Semantic */
  --color-success-500: #22C55E;
  --color-warning-500: #EAB308;
  --color-error-500: #EF4444;
  --color-info-500: #3B82F6;
}
```

---

## 2. Semantic Mapping

### 2.1 Design Tokens

```css
:root {
  /* Text colors */
  --text-primary: var(--color-neutral-900);
  --text-secondary: var(--color-neutral-600);
  --text-tertiary: var(--color-neutral-400);
  --text-inverse: var(--color-neutral-50);

  /* Background colors */
  --bg-primary: #FFFFFF;
  --bg-secondary: var(--color-neutral-50);
  --bg-tertiary: var(--color-neutral-100);
  
  /* Border colors */
  --border-default: var(--color-neutral-300);
  --border-muted: var(--color-neutral-200);
  
  /* Interactive */
  --interactive-default: var(--color-primary-600);
  --interactive-hover: var(--color-primary-700);
  --interactive-active: var(--color-primary-800);
  --interactive-disabled: var(--color-neutral-300);
}
```

---

## 3. Dark Mode

### 3.1 CSS Variables

```css
:root {
  /* Light mode (default) */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F5F5F5;
  --text-primary: #171717;
  --text-secondary: #525252;
}

[data-theme='dark'] {
  --bg-primary: #171717;
  --bg-secondary: #262626;
  --text-primary: #FAFAFA;
  --text-secondary: #A3A3A3;
}
```

### 3.2 Media Query

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #171717;
    --bg-secondary: #262626;
    --text-primary: #FAFAFA;
    --text-secondary: #A3A3A3;
  }
}
```

### 3.3 Dark Mode Palette

```css
[data-theme='dark'] {
  /* Surface colors - lighter than black */
  --bg-primary: #0F172A;
  --bg-secondary: #1E293B;
  --bg-tertiary: #334155;
  
  /* Text - avoid pure white */
  --text-primary: #F8FAFC;
  --text-secondary: #CBD5E1;
  --text-muted: #64748B;
  
  /* Borders */
  --border-default: #334155;
}
```

---

## 4. Tailwind Integration

### 4.1 Config

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          // ...
          500: '#3B82F6',
          // ...
          900: '#1E3A8A',
        },
      },
    },
  },
}
```

### 4.2 With CSS Variables

```css
/* utils.css */
@layer base {
  :root {
    --color-primary-500: #3B82F6;
  }
  
  .bg-primary {
    background-color: var(--color-primary-500);
  }
}
```

---

## 5. Opacity

### 5.1 Alpha Variants

```css
:root {
  --color-primary: #3B82F6;
  --color-primary-light: rgba(59, 130, 246, 0.1);
  --color-primary-medium: rgba(59, 130, 246, 0.5);
  --color-primary-subtle: rgba(59, 130, 246, 0.1);
}
```

### 5.2 CSS opacity

```css
/* Use with caution */
.button {
  background: blue;
  opacity: 0.5; /* Affects text too! */
}

/* Better - use rgba */
.button {
  background: rgba(0, 0, 255, 0.5);
}
```

---

## 6. Fallbacks

### 6.1 For Old Browsers

```css
/* Old browsers */
.button {
  background: #2196F3;
  background: var(--primary-500);
}

/* Variables need fallback first */
.button {
  background: #2196F3;
}

.button {
  background: var(--primary-500, #2196F3);
}
```

---

## Cross-refs

- [palettes.md](palettes.md) - Palettes
- [accessibility.md](accessibility.md) - A11y