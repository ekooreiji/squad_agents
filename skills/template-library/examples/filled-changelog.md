# Filled Changelog Example

## Informações

| Campo | Conteúdo |
|-------|---------|
| **Produto** | TaskApp |
| **Versão** | 2.5.0 |
| **Data** | 21/04/2026 |

---

## [2.5.0] - 21/04/2026

### Added
- Assistente de Prioridade com IA (#423)
- Modo Focus (#415)
- Widgets melhorados na home screen (#431)

### Changed
- Sincronização offline 3x mais rápida (#445)
- Novo design do widget de tarefas (#456)
- Cálculo de produtividade now considera tempo de foco (#467)

### Fixed
- Tarefas concluídas não apareciam no histórico (#452)
- Crash ao adicionar mais de 20 tags (#478)
- Notificações não disparavam no Android 14 (#489)

### Security
- Atualização de bibliotecas de criptografia para TLS 1.3 (#461)

---

## [2.4.1] - 15/03/2026

### Fixed
- Erro ao exportar tarefas para PDF (#441)
- Crash em devices com Android 12 (#448)

---

## [2.4.0] - 01/03/2026

### Added
- Compartilhamento de tarefas por link (#420)
- Tags coloridas (#422)

### Changed
- Interface de busca reformada (#435)
- Performance de sync melhorada 2x (#440)

### Deprecated
- Export CSV legado (#425)
- Histórico de tarefas antigo (#430)

---

## [2.3.2] - 15/02/2026

### Fixed
- Notificações duplicadas (#410)
- Erro ao usar emojis em tarefas (#415)

---

## [2.3.1] - 01/02/2026

### Fixed
- Crash ao criar tarefa vazia (#401)
- Sincronização falhava com conexão lenta (#405)

---

## Legenda de Tipos de Mudança

| Tipo | Descrição |
|------|-----------|
| Added | Nova feature adicionada |
| Changed | Feature existente alterada |
| Deprecated | Feature marcada para remoção futura |
| Removed | Feature removida |
| Fixed | Bug corrigido |
| Security | Atualização de segurança |

---

## Formato de Commits (Conventional Commits)

```
<tipo>(<escopo>): <descrição>

Tipos:
- feat: Nova feature
- fix: Bugfix
- docs: Documentação
- style: Formatação
- refactor: Refatoração
- test: Testes
- chore: Manutenção
```

---

## Links Úteis

- Todas as releases: github.com/taskapp/releases
- Comparar mudanças: github.com/taskapp/compare
- Tag comparison: github.com/tags