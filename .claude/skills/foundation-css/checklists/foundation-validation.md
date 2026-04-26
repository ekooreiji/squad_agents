# Foundation Validation Checklist

Checklist para validar implementações Foundation.

---

## Configuração

- [ ] CDN Foundation carregado corretamente
- [ ] Meta viewport configurado
- [ ] jQuery carregado antes do Foundation
- [ ] $(document).foundation() chamado

---

## Grid

- [ ] Container usado (grid-container)
- [ ] Row usado (grid-x)
- [ ] Cells dentro da row
- [ ] Máximo 12 cells por row
- [ ] Breakpoints corretos (small-, medium-, large-)

---

## Componentes

- [ ] Navbar com data attributes
- [ ] Buttons com classes corretas
- [ ] Cards com card-section
- [ ] Modals (Reveal) abre/fecha
- [ ] Off-canvas funciona

---

## Forms

- [ ] Labels associados aos inputs
- [ ] Abide data-abide no form
- [ ] Required fields marcados
- [ ] form-error visível

---

## Responsive

- [ ] Mobile-first implementado
- [ ] Show/hide classes corretas
- [ ] Testado em mobile

---

## Acessibilidade

- [ ] Labels visíveis
- [ ] aria attributes usados
- [ ] Navegação por teclado

---

## Performance

- [ ] CSS minificado em produção
- [ ] jQuery no final do body
- [ ] Componentes necessários apenas

---

## Cross-browser

- [ ] Testado em Chrome
- [ ] Testado em Firefox
- [ ] Testado em Safari
- [ ] Testado em Edge