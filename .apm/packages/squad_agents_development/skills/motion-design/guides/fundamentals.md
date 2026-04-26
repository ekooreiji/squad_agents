# Motion Design Fundamentals

Guia dos fundamentos de motion design.

---

## 1. O que é Motion Design

Motion design é a arte de criar movimento e animação para comunicar ideias e Enhancing experiências.

---

## 2. Por que Motion

| Razão | Impacto |
|------|----------|
| **Comunicação** | Explica conceitos rapidamente |
| **Engajamento** | Mantém atenção do usuário |
| **Feedback** | Indica resultados de ações |
| **Hierarquia** | Guia atenção para elementos importantes |
| **Personalidade** | Adiciona character à marca |

---

## 3. Elementos do Motion

### 3.1 Timing

| Duração | Uso |
|---------|-----|
| < 200ms | Instant response |
| 200-400ms | UI feedback padrão |
| 400-600ms | Transições médias |
| 600ms+ | Animações complexas |

### 3.2 Easing

```
Linear:     ═════════════════════════════

Ease-in:    ═════════════════════

Ease-out:   ═════════════════════

Ease-in-out:═══════╱
```

### 3.3 physics

- **Físico**: Movimento natural baseado em physics real
- **Inércia**:Objetos continuam em movimento
- **Bounce**: Rebater após colisão

---

## 4. Tipos de Animações

| Tipo | Descrição | Exemplo |
|------|-----------|----------|
| **Feedback** | Indicates resultado | Button ripple |
| **Transição** | Move entre estados | Page change |
| **Decorative** | Adiciona interesse | Loading spinner |
| **Orientation** | Guides attention | Hero animation |

---

## 5. CSS Animation Properties

```css
.element {
  animation-name: slideIn;
  animation-duration: 300ms;
  animation-timing-function: ease-out;
  animation-delay: 0;
  animation-iteration-count: 1;
  animation-direction: normal;
}
```

---

## Cross-refs

- [principles-easing.md](principles-easing.md) - Timing e easing details
- [micro-interactions.md](micro-interactions.md) - Aplicações