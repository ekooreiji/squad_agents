# Bootstrap Validation Checklist

Checklist para validar implementações Bootstrap.

---

## Configuração

- [ ] CDN Bootstrap carregado corretamente
- [ ] Meta viewport configurado
- [ ] Ordem correta: CSS antes do JS

---

## Grid System

- [ ] Container usado corretamente
- [ ] Row dentro do container
- [ ] Cols dentro da row
- [ ]最多12 colunas por row
- [ ] breakpoints corretos (col-md, col-lg, etc)

---

## Componentes

- [ ]Navbar responsivo com toggler
- [ ]Buttons com classes corretas
- [ ]Cards com estrutura válida
- [ ]Modais com backdrop

---

## Formulários

- [ ]Labels associados aos inputs
- [ ]Validação HTML5 (required, type)
- [ ]Form-control em todos os inputs
- [ ]Feedback visual para erros

---

## Responsividade

- [ ]Mobile-first implementado
- [ ]Imagens responsivas (img-fluid)
- [ ]Textos quebram corretamente
- [ ]Navbar cola no topo

---

## Acessibilidade

- [ ]Contraste suficiente
- [ ]Alt textos em imagens
- [ ]Labels visíveis
- [ ]Foco visível em elementos

---

## Performance

- [ ]CSS minificado em produção
- [ ]JS no final do body
- [ ]Fonts carregados async (opcional)

---

## Cross-browser

- [ ]Testado em Chrome
- [ ]Testado em Firefox
- [ ]Testado em Safari
- [ ]Testado em Edge