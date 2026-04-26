# Component Template

Template para documentar componentes CSS.

---

## Estrutura

```markdown
---
title: Component - [Nome]
author: 
date: YYYY-MM-DD
version: 1.0.0
---

# Component: [Nome]

## Preview

[Descrição visual do componente]

---

## HTML

```html
<div class="[component-name]">
    <div class="[component-name]__header">
        <h3 class="[component-name]__title">Título</h3>
    </div>
    <div class="[component-name]__content">
        <p>Conteúdo</p>
    </div>
    <div class="[component-name]__footer">
        <button class="[component-name]__action">Ação</button>
    </div>
</div>
```

---

## CSS

```css
/* Base */
.[component-name] {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    overflow: hidden;
}

/* Elements */
.[component-name]__header {
    padding: 16px;
    border-bottom: 1px solid #eee;
}

.[component-name]__title {
    margin: 0;
    font-size: 1.125rem;
    font-weight: 600;
}

.[component-name]__content {
    padding: 16px;
    flex: 1;
}

.[component-name]__footer {
    padding: 16px;
    border-top: 1px solid #eee;
}

/* Variants */
.[component-name]--primary {
    border: 1px solid #2563eb;
}

.[component-name]--large {
    padding: 24px;
}
```

---

## Estados

| Estado | Descrição |
|--------|-----------|
| Default | Estado normal |
| Hover | Mouse sobre |
| Active | Clicando |
| Disabled | Indisponível |

---

## Propriedades CSS

| Propriedade | Padrão | Descrição |
|------------|--------|-----------|
| background | white | Cor de fundo |
| border-radius | 8px | Arredondamento |
| box-shadow | 0 2px 8px | Sombra |

---

## Usage

```html
<!-- Default -->
<div class="[component-name]">
    ...
</div>

<!-- Variant -->
<div class="[component-name] [component-name]--primary">
    ...
</div>
```

---

## Responsividade

| Breakpoint | Layout |
|-----------|--------|
| Mobile | Stack vertical |
| Desktop | Grid |

---

## Acessibilidade

- [ ] Keyboard navigable
- [ ] Focus states
- [ ] ARIA labels (se necessário)
- [ ] Color contrast
```