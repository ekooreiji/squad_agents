# Análise de Gaps

Guia para identificar gaps entre demanda e solução.

---

## 1. O que é Gap

Gap é a diferença entre o que o cliente pede e o que realmente precisa.

---

## 2. Tipos de Gaps

### 2.1 Gap de Entendimento

```
Cliente: "Quero um app."
Real: Precisa de uma landing page.

→ Cliente não sabe o que precisa
→ Pediu solução, não problema
```

### 2.2 Gap de Escopo

```
Cliente: "Só uma página."
Real: Necesita 10 páginas + admin + API.

→ Subestimou escopo
→ Não considerou dependências
```

### 2.3 Gap Técnico

```
Cliente: "Fazer em WordPress."
Real: Precisa de custom post types + API.

→ Tecnologia incompatível
→ Requisitos técnicos escondidos
```

### 2.4 Gap de Expectativa

```
Cliente: "Ficar pronto em 1 semana."
Real: Projeto leva 1 mês.

→ Expectativa irreal
→ Comunicação falha
```

---

## 3. Como Identificar Gaps

### 3.1 Técnica dos 5 Porquês

```
Pedido: "Quero um chatbot."
Por que?: "Para atender clientes."
Por que?: "Porque suporte está sobrecarregado."
Por que?: "Porque levam tempo respondendo perguntas simples."
Por que?: "Porque não tem FAQ claro."

→ Gap: Precisa de FAQ, não chatbot
```

### 3.2 Técnica de Inversão

```
Cliente pede X.
Perguntar: "E se não tiver X?"

Se cliente não souber responder → GAP
Se cliente demonstrar confusão → GAP
```

### 3.3 Análise de Stakeholders

| Stakeholder | O que pensa | Potencial Gap |
|-------------|------------|---------------|
| Dono do negócio |ROI | Foco errado |
| Gestor | Processos | Esquece usuário |
| Usuário | Facilidade | Ignorado |

---

## 4. Framework de Análise

### 4.1 Matriz de Gaps

| Pedido | Necessidade Real | Tipo Gap | Impacto |
|--------|----------------|----------|--------|
| Chatbot | FAQ | Entendimento | Alto |
| Site novo | Redesign | Escopo | Médio |

### 4.2 Steps

1. Listar todos os pedidos
2. Identificar necessidade por trás
3. Categorizar tipo de gap
4. Avaliar impacto
5. Propor solução

---

## 5. Gaps Comuns em Projetos

### 5.1 Design

| Pedido | Gap |
|-------|-----|
| "Logo moderno" | Não define estilo |
| "Site bonito" | Não define métricas |
| "Identidade" | Não define onde usar |

### 5.2 Desenvolvimento

| Pedido | Gap |
|-------|-----|
| "API REST" | Endpoints não definidos |
| "Sistema rápido" | Métricas não definidas |
| "Responsivo" | Dispositivos não definidos |

### 5.3 Produto

| Pedido | Gap |
|-------|-----|
| "Como Spotify" | Features não priorizadas |
| "Modo escuro" | Escopo não definido |
| "Notificações" | Frequência não definida |

---

## 6. como Resolver Gaps

### 6.1 Gap de Entendimento
- Fazer mais perguntas
- Usar framework 5W1H
- Validar necessidades

### 6.2 Gap de Escopo
- Mapear dependências
- Estimar esforço
- Priorizar features

### 6.3 Gap Técnico
- Análise técnica
- Propor alternativas
- Documentar limitations

### 6.4 Gap de Expectativa
- Criar timeline realista
- Definir marcos
- Comunicar frequentemente

---

## 7. Documentação

### 7.1 Formato

| # | Pedido | Necessidade | Gap | Solução |
|---|-------|-------------|-----|---------|
| 1 | Chatbot | FAQ | technology | Criar FAQ primeiro |

### 7.2 Validação

- Apresentar gaps ao cliente
- Propor soluções alternativas
- Registrar decisão

---

## Cross-refs

- [client-needs.md](client-needs.md) - Necessidades
- [requirements-clarify.md](requirements-clarify.md) - Clarificação
- [specification.md](specification.md) - Especificação