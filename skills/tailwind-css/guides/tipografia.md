# Tipografia em Tailwind CSS

Guia sobre tipografia e textos.

---

## 1. Fontes

### 1.1 Font Family

| Classe | Descrição |
|--------|-----------|
| font-sans | Fonte sem serifa |
| font-serif | Fonte serifada |
| font-mono | Fonte monoespaçada |

### 1.2 Aplicação

```html
<p class="font-sans">Texto sans-serif</p>
<p class="font-serif">Texto serif</p>
<p class="font-mono">Texto mono</p>
```

---

## 2. Tamanhos

### 2.1 Escala

| Classe | Tamanho |
|--------|---------|
| text-xs | 0.75rem (12px) |
| text-sm | 0.875rem (14px) |
| text-base | 1rem (16px) |
| text-lg | 1.125rem (18px) |
| text-xl | 1.25rem (20px) |
| text-2xl | 1.5rem (24px) |
| text-3xl | 1.875rem (30px) |
| text-4xl | 2.25rem (36px) |

### 2.2 Exemplo

```html
<h1 class="text-4xl font-bold">Título</h1>
<p class="text-base">Parágrafo</p>
<p class="text-sm text-gray-500">Legenda</p>
```

---

## 3. Peso

| Classe | Peso |
|--------|------|
| font-thin | 100 |
| font-extralight | 200 |
| font-light | 300 |
| font-normal | 400 |
| font-medium | 500 |
| font-semibold | 600 |
| font-bold | 700 |
| font-extrabold | 800 |
| font-black | 900 |

---

## 4. Alinhamento

| Classe | Alinhamento |
|--------|------------|
| text-left | Esquerda |
| text-center | Centro |
| text-right | Direita |
| text-justify | Justificado |

---

## 5. Cores de Texto

```html
<p class="text-gray-900">Texto escuro</p>
<p class="text-gray-700">Texto principal</p>
<p class="text-gray-500">Texto secundário</p>
<p class="text-gray-400">Texto pequeno</p>
<p class="text-blue-600">Texto em destaque</p>
```

---

## 6. Decorações

### 6.1 Style

```html
<p class="underline">Texto sublinhado</p>
<p class="overline">Texto sobrelinhado</p>
<p class="line-through">Texto riscado</p>
```

### 6.2 Transform

```html
<p class="uppercase">MAIÚSCULAS</p>
<p class="lowercase">minúsculas</p>
<p class="capitalize">Primeira Maiúscula</p>
```

---

## Cross-refs

- [cores.md](cores.md) - Cores
- [layout.md](layout.md) - Layout