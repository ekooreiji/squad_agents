# Information Architecture

Guia de arquitetura de informação para organizar conteúdo.

---

## 1. O que é Arquitetura de Informação

Arquitetura de Informação (AI) é a organização e estruturação de conteúdo.

---

## 2. Métodos de Organização

### 2.1 Por Tópico

```
Produtos
├── Eletrônicos
│   ├── Computadores
│   └── Acessórios
├── Roupas
│   ├── Feminino
│   └── Masculino
```

### 2.2 Por Tarefa

```
[Comprar]
  ├── Buscar produto
  ├── Comparar
  └── Finalizar compra

[Suporte]
  ├── FAQ
  └── Contato
```

### 2.3 Por Audiência

```
para Empresas
├── PMEs
└── Grandes Empresas
```

---

## 3. Técnicas de Descoberta

### 3.1 Content Audit

| Página | Tipo | Responsável |
|--------|------|-----------|
| /home | Landing | Marketing |
| /produtos | Lista | Produto |

### 3.2 Card Sorting

| Tipo | Descrição |
|------|----------|
| **Aberto** | Sem categorias pré-definidas |
| **Fechado** | Com categorias definidas |

---

## 4. Sistema de Navegação

### 4.1 Tipos

| Tipo | Uso |
|------|-----|
| **Global** | Todas as páginas |
| **Local** | Dentro de contexto |
| **Supplementary** | Footer, sitemap |

### 4.2 Padrões

| Padrão | Quando Usar |
|--------|-------------|
| Tab bar | Categorias mesmo nível |
| Hamburger menu | Muitas opções |
| Breadcrumb | Hierarquia profunda |

---

## Cross-refs

- [user-flows.md](user-flows.md) - Fluxos
- [wireframing.md](wireframing.md) - Wireframes