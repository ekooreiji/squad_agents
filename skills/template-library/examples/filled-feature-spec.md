# Filled Feature Spec Example

## Informações da Feature

| Campo | Conteúdo |
|-------|---------|
| **ID** | FEATURE-0231 |
| **Título** | Sistema de Preferências de Notificação |
| **Épico** | EPIC-023 (Push Notifications) |
| **Versão** | 1.0 |
| **Data** | 15/04/2026 |
| **Responsável** | Maria Santos - Tech Lead |

---

## Visão Geral

Permitir que usuários ativem/desativem tipos específicos de notificações push, aumentando relevance e opt-in rate.

---

## Contexto

### Problema Atual
- Usuários recebem todas as notificações ou nenhuma
- 40% desativam todas as notificações devido a irrelevância
- Sem granularidade nos tipos de notificação

### Solução Proposta
- Criar sistema de preferências por tipo
- Tipos: promotions, reminders, updates, social
- Salvar preferências no backend
- Usar como filtro no envio de notificações

---

## Requisitos Funcionais

### RF-001: Listar Tipos de Notificação
**Descrição**: Exibir lista de tipos de notificação disponíveis
**Entrada**: -
**Processamento**: Buscar tipos do Remote Config
**Saída**: Lista de {id, name, description, isEnabled}

### RF-002: Atualizar Preferência
**Descrição**: Ativar/desativar um tipo específico
**Entrada**: {typeId, isEnabled}
**Processamento**: Validar → Salvar no backend → Atualizar analytics
**Saída**: Sucesso/Erro

### RF-003: Resetar Preferências
**Descrição**: Resetar todas para padrão
**Entrada**: -
**Processamento**: Resetar → Salvar → Confirmar
**Sucesso**: Sucesso/Erro

---

## Requisitos Não-Funcionais

| Requisito | Critério | Threshold |
|----------|---------|-----------|
| Latência | Tempo de resposta API | < 200ms |
| Disponibilidade | Uptime | 99.9% |
| Persistência | Dados salvos por 30 dias | 30 dias |

---

## Diseño

### Arquitetura Proposta
- Backend: Node.js + PostgreSQL
- Armazenar preferências na tabela user_notification_prefs
- Usar Remote Config para definição de tipos
- Firebase Cloud Messaging para envio

### Fluxo de Dados
```
UI → API → Database → Firebase Config (filter)
```

### Componentes Envolvidos

| Componente | Responsabilidade | Tipo |
|------------|----------------|------|
| Notification Preferences API | Gerenciar preferências | Novo |
| User Notification Prefs Table | Armazenar estado | Novo |
| Notification Service | Ler preferências no envio | Existing |

---

## Interface

### API Endpoints

| Método | Path | Descrição | Body |
|--------|------|----------|------|
| GET | /api/v1/notifications/prefs | Listar preferências | - |
| PATCH | /api/v1/notifications/prefs | Atualizar | {typeId, isEnabled} |
| POST | /api/v1/notifications/prefs/reset | Resetar | - |

### UI Components
- NotificationSettingsScreen
- NotificationTypeToggle (reusable)
- ConfirmationDialog

---

## Dados

### Novos Campos

| Campo | Tipo | Descrição |
|-------|------|-----------|
| user_id | UUID | ID do usuário |
| notification_type_id | VARCHAR | ID do tipo |
| is_enabled | BOOLEAN | Estado |
| updated_at | TIMESTAMP | Última atualização |

### Tabelas Afetadas

| Tabela | Operação |
|--------|----------|
| user_notification_prefs | Create |

---

## Casos de Borda e Erro

| Caso | Handling |
|------|----------|
| Usuário não existe | Retornar 401 |
| TypeId inválido | Retornar 400 |
| Banco indisponível | Retry 3x, retorna 503 |
| Timeout | Retry com exponential backoff |

---

## Testing

### Testes Unitários
- testToggleNotificationType
- testListPreferences
- testResetPreferences

### Testes de Integração
- integrationTogglePreferences
- integrationSyncWithRemoteConfig

### Testes E2E
- e2eUserTogglesNotification
- e2eUserResetsAllNotifications

---

## Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação |
|-------|--------------|---------|-----------|
| Config desatualizada | Baixa | Alto | Cache + fallback default |
| Performance no fetch | Média | Médio | Async + cache local |

---

## Dependências

| ID | Dependency | Tipo |
|----|------------|------|
| EPIC-015 | Firebase Cloud Messaging | Técnica |

---

## Timeline

| Marcos | Data |
|--------|------|
| Development Start | 01/04 |
| Code Complete | 10/04 |
| QA Complete | 15/04 |
| Deploy | 18/04 |