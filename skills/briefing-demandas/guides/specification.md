# Transformar em Especificação

Guia para transformar demandas em especificações técnicas.

---

## 1. O que é Especificação

Especificação é um documento que define exatamente o que será construído.

---

## 2. Elementos da Especificação

### 2.1 Estrutura Básica

```
## Projeto
## Escopo
## Requisitos Funcionais
## Requisitos Não-Funcionais
## wireframes/Protótipos
## Cronograma
## Critérios de Aceitação
```

### 2.2 Requisitos Funcionais

| Campo | Descrição |
|-------|-----------|
| ID | Identifier único |
| Descrição | O que faz |
| Prioridade | Alta/Média/Baixa |
| Critério | Como validar |

### 2.3 Requisitos Não-Funcionais

| Campo | Descrição |
|-------|-----------|
| Performance | Tempo de resposta |
| Segurança | Autenticação, HTTPS |
| Acessibilidade | WCAG |
| Compatibilidade | Browsers, devices |

---

## 3. Processo de Transformação

### 3.1 De Necessidade para Requisito

```
Necessidade: "Quero que clientes me encontrem online"

Requisito Funcional:
- RF01: Landing page com formulário de contato
- RF02: Página "Sobre nós"
- RF03: Integração com Google Maps

Requisito Não-Funcional:
- RNF01: Lighthouse score > 90
- RNF02: Tempo de carregamento < 3s
```

### 3.2 De Pedido para Feature

```
Pedido: "Quero um site moderno"

Feature Especificada:
- Design minimalista
- Cores: Primary #1E3A8A, Secondary #F5F5F5
- Tipografia: Inter
- Homepage com hero + 3 features + CTA
```

---

## 4. Tipos de Especificação

### 4.1 Para Design

| Seção | Conteúdo |
|------|----------|
| wireframes | Layouts em baixa fidelidade |
| Mockups | Designs em alta fidelidade |
| Style Guide | Cores, tipografia, espacamento |
| Assets | Logos, ícones, imagens |

### 4.2 Para Desenvolvimento

| Seção | Conteúdo |
|------|----------|
| Arquitetura | Stack, databases, APIs |
| APIs | Endpoints, payloads |
| Componentes | Estrutura, props, estados |
| Testes | Unit, integración, E2E |

### 4.3 Para Produto

| Seção | Conteúdo |
|------|----------|
| Features | Lista com priorização |
| User Stories | Formato: Como X, preciso Y |
| Critérios | Definição de pronto |
| Métricas | KPIs a medir |

---

## 5. Critérios de Aceitação

### 5.1 Formato

```
CENÁRIO: [Contexto]
QUANDO [Ação]
ENTÃO [Resultado esperado]

Exemplo:
CENÁRIO: Usuário preenche formulário
QUANDO clica em "Enviar"
ENTÃO mostra mensagem de sucesso
```

### 5.2 Checklist de Bom Critério

- [ ] Testável (pode ser verificado)
- [ ] Objetivo (não ambíguo)
- [ ] Completo (todos os casos)
- [ ] Validado (cliente aprova)

---

## 6. Templates de Especificação

### 6.1 Design Spec

```
## Página: [Nome]
### Estrutura
- Header: [logo] [nav] [CTA]
- Hero: [título] [subtítulo] [botão]
- Content: [colunas]
- Footer: [links] [copyright]

### Estilo
- Cores: [ primaries]
- Tipografia: [font-family]
- Espaçamento: [grid]
- Responsivo: [breakpoints]
```

### 6.2 Tech Spec

```
## Feature: [Nome]
### Descrição
[O que faz]

### API
- Endpoint: POST /api/[recurso]
- Input: { [campos] }
- Output: { [resposta] }

### Casos de Erro
- [ ] 400: [erro]
- [ ] 401: [erro]
- [ ] 500: [erro]
```

---

## 7. Validação

### 7.1 Checklist de Especificação

- [ ] Todos os pedidos mapeados
- [ ] Requisitos priorizados
- [ ] Critérios de aceitação definidos
- [ ] Dependências identificadas
- [ ] timeline definida
- [ ] Cliente aprova

### 7.2 Revisão

- Revisão técnica
- Revisão de design
- Revisão com cliente
- Aprovação formal

---

## Cross-refs

- [intro-briefing.md](intro-briefing.md) - Introdução
- [requirements-clarify.md](requirements-clarify.md) - Clarificação
- [gap-analysis.md](gap-analysis.md) - Análise de gaps
- [requirements-analyzer](../requirements-analyzer/SKILL.md) - Análise de requisitos