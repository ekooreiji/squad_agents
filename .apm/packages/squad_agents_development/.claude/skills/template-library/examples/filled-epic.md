# filled Épico Example

## Informações do Épico

| Campo | Conteúdo |
|-------|---------|
| **ID** | EPIC-023 |
| **Título** | Sistema de Notificações Push |
| **Versão** | 1.0 |
| **Data de Criação** | 15/04/2026 |
| **Produto** | Mobile App |
| **Epic Owner** | João Silva |
| **Responsável Técnico** | Maria Santos |

---

## Problema / Oportunidade

Usuários não recebem notificações em tempo real sobre atualizações importantes, resultando em baixa engajamento e lost de oportunidades.

### Contexto
- 40% dos usuários têm notificações desabilitadas
- Notificações atuais são apenas batch (digest diário)
- Sem personalização por tipo de notificação

### Impacto Esperado
- Increase em 25% no engajamento com notificações
- Redução de 15% em churn
- NPS increase de pontos

---

## Escopo

### Inside do Escopo
- [ ] Sistema de push notifications em tempo real
- [ ] Preferências de notificação por usuário
- [ ] Tipos de notificação configuráveis
- [ ] Console de administração para envios

### Outside do Escopo
- Notificações por email (épico separado)
- SMS notifications (épico separado)
- In-app messaging

---

## Hipóteses

| # | Hipótese | Como Validar |
|---|---------|-------------|
| 1 | Usuários que ativam notificações têm 30% mais engajamento | Analytics: engagement rate comparison |
| 2 | Notificações personalizadas têm 20% mais CTR | A/B test: personalized vs generic |

---

## User Stories

| ID | Título | Prioridade | Estimativa | Status |
|-----|-------|----------|-----------|--------|
| US-0231 | Ativar/desativar notificações por tipo | Must | M | Done |
| US-0232 | Receive push notification | Must | L | In Progress |
| US-0233 | Configurar horário de silêncio | Should | M | Todo |
| US-0234 | Preview de notificação antes de enviar | Should | L | Todo |
| US-0235 | Notificações agendadas | Could | XL | Todo |

---

## Dependências

### Dependências Internas
| ID | Dependency | Tipo |
|----|------------|------|
| EPIC-015 | Firebase Cloud Messaging | Técnica |

---

## Critérios de Aceite do Épico

- [ ] Todas as user stories Must completas
- [ ] Testes de integração passando
- [ ] Notificações funcionando em produção
- [ ] Analytics de opt-in configurados

---

## Métricas de Sucesso

| Métrica | Meta | Atual |
|---------|------|-------|
| Taxa de opt-in | 70% | 40% |
| CTR de notificações | 15% | 5% |
| Engajamento pós-notificação | +30% | Baseline |

---

## Riscos

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Push token expiration | Média | Alto | Renovation handling |
| Low opt-in rate | Alta | Alto | In-app prompts |

---

## Timeline

| Marcos | Data | Status |
|--------|------|--------|
| Kickoff | 01/04 | Done |
| Development Start | 08/04 | Done |
| Beta/QA | 20/04 | Upcoming |
| Launch | 01/05 | Planned |

---

## Comunicação

| Stakeholder | Canal | Frequência |
|------------|-------|-----------|
| Time de produto | Weekly sync | Semanal |
| stakeholders | Release email | Mensal |