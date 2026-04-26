# Color Accessibility

Complete guide to WCAG color requirements and accessibility implementation.

---

## 1. WCAG Requirements

### 1.1 Success Criteria

| Criteria | Level | Requirement |
|---------|-------|-------------|
| 1.4.3 | AA | Contrast ratio 4.5:1 |
| 1.4.11 | AA | Non-text contrast 3:1 |
| 1.4.6 | AAA | Contrast ratio 7:1 |
| 1.4.7 | AAA | User contrast style 4.5:1 |

### 1.2 Contrast Ratios

| Ratio | Text Type | Score |
|-------|----------|-------|
| 21:1 | Black on white | Perfect |
| 15:1 | Dark on light | AAA ✓ |
| 7:1 | Normal text | AAA ✓ |
| 4.5:1 | Normal text | AA ✓ |
| 3:1 | Large text, UI | AA ✓ |
| < 3:1 | Insufficient | ✗ |

---

## 2. Accessibility Checklist

### 2.1 Text Contrast

```css
/* FAIL: Insufficient */
.fail {
  color: #999;
  background: white;
  /* 2.93:1 - FAIL */
}

/* PASS: AA */
.aa {
  color: #666;
  background: white;
  /* 7.73:1 - PASS ✓ */
}

/* PASS: AAA */
.aaa {
  color: #333;
  background: white;
  /* 12.63:1 - PASS ✓ */
}
```

### 2.2 Non-text Contrast

| Element | Minimum |
|---------|---------|
| Icons, graphics | 3:1 |
| Focus indicators | 3:1 |
| Button borders | 3:1 |
| Input borders | 3:1 |

---

## 3. Color Blindness

### 3.1 Types

| Type | Affected | Percentage |
|------|----------|-------------|
| Protanopia | Red | 1% males |
| Deuteranopia | Green | 1% males |
| Tritanopia | Blue | 0.003% |
| Achromatopsia | All | 0.003% |

### 3.2 Solutions

**Don't rely on color alone:**

```
┌─────────────────────────────────────┐
│                                     │
│  ✗ WRONG            ✓ CORRECT        │
│                                     │
│  • Success         • ✓ ✓ Success    │
│  • Error          • ✗ ✗ Error     │
│  • Waiting        • ● Waiting      │
│                                     │
│  (color only)      (color + icon)   │
│                                     │
└─────────────────────────────────────┘
```

**Use patterns too:**

- Add icons/symbols
- Add labels
- Add patterns

---

## 4. Implementation

### 4.1 CSS Variables

```css
:root {
  /* Semantic - Accessible by default */
  --text-primary: #1E293B;   /* 15:1 on white */
  --text-secondary: #475569; /* 7.5:1 on white */
  --text-muted: #94A3B8;     /* 4.5:1 on white */
  
  /* Functional */
  --success: #16A34A;     /* Green */
  --warning: #CA8A04;      /* Yellow/Orange */
  --error: #DC2626;         /* Red */
  --info: #2563EB;         /* Blue */
  
  /* With icons (not color alone) */
  --success-bg: #DCFCE7;
  --success-icon: #16A34A;
}
```

### 4.2 Focus States

```css
/* Visible focus - required */
:focus-visible {
  outline: 2px solid #2563EB;
  outline-offset: 2px;
  /* 4.5:1 with dark backgrounds */
}
```

---

## 5. Testing

### 5.1 Tools

| Tool | Test |
|------|------|
| WebAIM Contrast Checker | Automático |
| axe DevTools | Automático |
| Color Blindness Simulator | visão affected |
| Lighthouse | Automático |

### 5.2 Manual Tests

| Test | How |
|------|-----|
| Turn on high contrast mode | System settings |
| Use screen reader | Teste real |
| Check in grayscale | Browser dev tools |
| Zoom to 200% | Browser zoom |

---

## Cross-refs

- [implementation.md](implementation.md) - CSS variables
- [contrast.md](contrast.md) - Contraste details