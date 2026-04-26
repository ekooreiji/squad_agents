# Iconografia

Guia sobre uso de ícones e ilustrações na comunicação visual.

---

## 1. O que são Ícones

Ícones são símbolos visuais que comunicam conceitos de forma rápida.

---

## 2. Tipos de Ícones

### 2.1 Por Estilo

| Tipo | Característica | Uso |
|------|----------------|-----|
| Line | Contorno | Moderno, minimalista |
| Filled | Sólido | Forte, legível |
| Duotone | 2 cores | Equilíbrio |
| Outlined | Peso médio | Dashboard |

### 2.2 Por Função

| Tipo | Propósito |
|------|-----------|
| Functional | Ação (click) |
| Informational | Explicar conceito |
| Decorative | Visual appeal |

---

## 3. Princípios de Uso

### 3.1 Tamanho

```
Mobile: 24px minimum
Desktop: 16-20px ideal
```

### 3.2 Espaçamento

```
Ícone ↔ Texto: 8px minimum
Entre ícones: Mínimo spacing
```

### 3.3 Consistência

```
✓ Mesmo estilo por contexto
✗ Misturar line + filled
```

---

## 4. Criando Ícones

### 4.1 Quando Criar Custom

| Necessidade | Solução |
|-------------|---------|
| Conceito único | Custom |
| Nenhum existente | Custom |
| Estilo diferente | Custom |

### 4.2 Bibliotecas Gratuitas

| Biblioteca | Estilo | Uso |
|------------|-------|-----|
| Heroicons | Line + Filled | UX |
| Phosphor | Line + Fill | Moderno |
| Feather | Line minimal | Clean |

---

## 5. Ilustrações

### 5.1 Quando Usar

| Contexto | Uso |
|----------|-----|
| Onboarding | Explicar processo |
| Landing | Humanizar |
| Error | Tornar amigável |

### 5.2 Estilos

| Estilo | Sensação |
|-------|-----------|
| Flat | Clean, moderno |
| Isométrico | Tech, detail |
| Illustrated | Human, friendly |
| Abstract | Artistic |

---

## 6. Aplicação Prática

### 6.1 Icon + Label

```
[Icon] Label
  ↕ 8px
```

### 6.2 Icon-only (quandoclaro)

```
✓ Contexto claro = ✓ Icon only
✗ Contextoambíguo = ✗ Icon only
```

### 6.3 Status Icons

```
✓ [✓] Success
✓ [!] Warning  
✓ [×] Error
✓ [i] Info
```

---

## 7. Accessibility

### 7.1 Required

- `aria-label` para icons alone
- `role="img"` quando decorativo

### 7.2 Teste

- Verificar legibilidade em size mínimo
- Testar em light mode + dark mode

---

## Cross-refs

- [intro-comunicacao.md](intro-comunicacao.md) - Introdução
- [composicao.md](composicao.md) - Composição
- [visual-identity](../visual-identity/SKILL.md) - Identidade visual