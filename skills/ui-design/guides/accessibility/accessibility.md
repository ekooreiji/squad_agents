# Acessibilidade WCAG

## Introdução

Diretrizes para criar interfaces acessíveis para todos os usuários.

---

## Princípios WCAG

### Perceptível
- Informações apresentáveis de forma perceptível

### Operável
- Interface operável por todos os usuários

### Compreensível
- Informações e operação compreensíveis

### Robusto
- Conteúdo robusto para interpretações diversas

---

## Níveis de Conformidade

| Nível | Requisito |
|-------|-----------|
| A | Básico |
| AA | Intermediário |
| AAA | Avançado |

### Meta Recomendada
- Minimum: AA
- Ideal: AAA

---

## Checklist de Acessibilidade

### Imagens
- [ ] Todas as imagens têm alt text
- [ ] Alt text descritivo para imagens importantes
- [ ] Decorative images têm alt=""

### Cores
- [ ] Contraste mínimo 4.5:1 (texto normal)
- [ ] Contraste mínimo 3:1 (texto grande)
- [ ] Não usar cor como único meio de informação

### Navegação
- [ ] Tab order é lógica
- [ ] Focus é visível
- [ ] Skip links disponíveis
- [ ] Menus são acessíveis via teclado

### Formulários
- [ ] Labels associados aos campos
- [ ] Mensagens de erro descritivas
- [ ] Campos obrigatórios marcados

### Multimídia
- [ ] Vídeos têm legendas
- [ ] Áudios têm transcrição

---

##ARIA Basics

### Roles
```html
<nav role="navigation">
<main role="main">
<aside role="complementary">
<footer role="contentinfo">
```

### Estados
```html
<button aria-expanded="false">
<input aria-invalid="true">
<div aria-hidden="true">
```

### Propriedades
```html
<input aria-label="Email">
<input aria-describedby="error-msg">
<button aria-controls="menu">
```

---

## Teste de Acessibilidade

### Ferramentas Automatizadas
- WAVE
- Axe
- Lighthouse

### Teste Manual
- Navegação via teclado
- Screen reader (NVDA, VoiceOver)
- Zoom 200%

---

## Boas Práticas

- Sempre testar com teclado
- Usar semantic HTML
- Manter hierarquia de títulos
- Garantir contraste adequado
- Fornecer alternativas para conteúdo complexo