# CSS Animation Validation Checklist

Checklist para validar animações CSS.

---

## Performance

- [ ] Usar transform/opacity
- [ ] Evitar width, height, top, left
- [ ] Animações curtas (0.2-0.5s)
- [ ] will-change moderado
- [ ] 60fps target

---

## Transitions

- [ ] Propriedade correta
- [ ] Duration apropriado
- [ ] Timing functionok
- [ ] Delay se necessário

---

## Keyframes

- [ ] Nome único
- [ ] Estados definidos
- [ ] fill-mode correto
- [ ] iteration-countok

---

## Transforms

- [ ] Translate, rotate, scale
- [ ] transform-originok
- [ ] Combinações funcionais

---

## Responsive

- [ ] prefers-reduced-motion
- [ ] Testado em mobile
- [ ] Touch eventsok

---

## Cross-browser

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

---

## Accessibility

- [ ] Reduced motion suporte
- [ ] Alternativas de cor
- [ ] Não causa vertigem