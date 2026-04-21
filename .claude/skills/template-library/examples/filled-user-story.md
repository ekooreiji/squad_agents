# Filled User Story Example

## Informações da User Story

| Campo | Conteúdo |
|-------|---------|
| **ID** | US-0231 |
| **Título** | Ativar/desativar notificações por tipo |
| **Épico** | EPIC-023 (Sistema de Notificações Push) |
| **Prioridade** | Must |
| **Estimativa** | M |

---

## User Story

**Como** usuário do app
**Eu quero** ativar ou desativar notificações por tipo (promoções, lembretes, atualizações)
**Para** que eu só receba notificações que são relevantes para mim

---

## Critérios de Aceite

### Happy Path
- [ ] Usuário consegue acessar configurações de notificação
- [ ] Cada tipo de notificação pode ser ativado/desativado individualmente
- [ ] Alteração é salva imediatamente
- [ ] Alteração é refletida nosenvios futuros

### Casos de Borda
- [ ] Quando todos os tipos estãodesativados, mostrar mensagem informativa
- [ ] Ao reativar, usuário recebe notificação de confirmação

### Casos de Erro
- [ ] Erro ao salvar = mostrar mensagem de erro + reverter UI
- [ ] Timeout = retry automático + mensagem

---

## Definition of Done

- [x] Código implementado
- [x] Testes unitários passando
- [x] Testes de integração passando
- [x] Code review aprovado
- [x] Documentação atualizada

---

## Notas Técnicas

- Necesario endpoint PATCH /api/notifications/preferences
- Usar Firebase Remote Config para default preferences
- Tracking de opt-in rate no Analytics

---

## Tasks Técnicas

| Task | Responsável | Status |
|------|-----------|--------|
| Implementar API preferences | @dev1 | Done |
| Criar UI de preferencias | @dev2 | Done |
| Configurar Analytics | @dev1 | Done |
| Testes QA | @qa | Done |