# Information Architecture

Guia para arquitetura da informação, organizando conteúdo de forma intuitiva e encontrável.

---

## O que é AI

Estrutura organizacional que define como conteúdo é:
- Catalogado
- Rotulado
- Navegado
- Procurado

Bom Al:
- Organize: Categorias claras
- Label: Termos compreensíveis
- Navigate: Caminhos intuitivos
- Search: Busca eficaz

---

## Métodos de Organização

### Por Tópico
Agrupar por assunto.

```
Produtos
├── Eletrônicos
│   ├── Computadores
│   └── Acessórios
├── Roupas
│   ├── Feminino
│   └── Masculino
```

### Por Tarefa
Agrupar por objetivo do usuário.

```
[Comprar]
  ├── Buscar produto
  ├── Comparar
  └── Finalizar compra

[Suporte]
  ├── FAQ
  └── Contato
```

### Temporal
Agrupar por momento.

```
 onboarding
├── Passo 1: Cadastro
├── Passo 2: Configuração
└── Passo 3: Uso
```

### Auditório
Agrupar por público.

```
para Empresas
├── PMEs
└── Grandes Empresas
```

---

## Técnicas de Descoberta

### 1. Content Audit

```markdown
## Content Audit: [Área]

| Página | Tipo | Responsável | Última Atualização |
|--------|------|-------------|---------------------|
| /home | Landing | Marketing | 2024-01 |
| /produtos | Lista | Produto | 2024-02 |
```

### 2. Card Sorting

Participantes organizam cartões com nomes de conteúdo.

**Aberto**: Sem categorias pré-definidas.

**Fechado**: Com categorias definidas.

### 3. Tree Testing

Testar estrutura com usuários.

### 4. Busca

Análise de termos de busca.

---

## Labeling

### Tipos de Labels

| Tipo | Exemplo |
|------|---------|
| Categoria | "Produtos" |
| Ação | "Comprar agora" |
| Navegação | "Menu" |

### Boas Práticas

- Usar linguagem do usuário
- Ser consistente
- Evitar jargão técnico
--testar com usuários

---

## Sistema de Busca

### Elementos

1. **Campo de busca**: Visível e acessível
2. **Índice**: Conteúdoindexado
3. **Ranking**: Resultados ordenados
4. **Filtros**: Refinar resultados

### Melhorias

- Autocomplete
- Correção ortográfica
- Sinônimos
- Highlights

---

## Navigation Systems

### Global
Em todas as páginas.

### Local
Dentro de contexto.

### Supplementary
Auxiliar (footer, sitemap).

---

## Avaliação de Al

### CARD Sorting

| Métrica | Meta |
|---------|------|
| Acordo | > 60% |
| Tempo | < 10 min |

### Tree Testing

| Métrica | Meta |
|---------|------|
| Sucesso | > 70% |
| Tempo | < 30s |

---

## Templates

Ver `templates/card-sorting.md`

---

## Cross-refs

- [user-journey-mapper](../user-journey-mapper/SKILL.md) - Structurar jornada
- [user-research](../user-research.md) - Validar com usuários