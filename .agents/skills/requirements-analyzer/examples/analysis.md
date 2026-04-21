# Examples de Análise

## Exemplo 1: Requisito com Ambigüidade

### Entrada
"O sistema deve ser rápido e responsivo. O carregamento deve ser rápido.

### Issues Encontradas

| Tipo | Problema | Correção |
|------|----------|----------|
| Ambigüidade | "rápido" - sem定義 de tempo | Definir threshold: "tempo < 2s" |
| Ambigüidade | "responsivo" - subjectivo | Especificar comportamento: "feedback em < 200ms" |
| Redundância | "rápido" mencionado duas vezes | Consolidar em único requisito |

### Saída Corrigida
```markdown
## Requisito de Performance

- Tempo de carregamento inicial < 2 segundos
- Tempo de resposta de API < 200ms
- UI deve mostrar loading state em < 100ms
```

---

## Exemplo 2: Requisito com Contradição

### Entrada
- "Usuários podem excluir suas próprias publicações"
- "Publicações não podem ser excluídas após 24h"

### Issues Encontradas

| Tipo | Problema |
|------|----------|
| Contradição | Regra 1 permite exclusão, Regra 2 proíbe após 24h |

### Correção Sugerida
```markdown
- Usuários podem excluir suas publicações dentro de 24h
- Após 24h, apenas admins podem excluir
- Exclusão gera log de auditoria
```

---

## Exemplo 3: Requisito Faltante

### Entrada
"Login deve funcionar com email e senha"

### Issues Encontradas

| Tipo | Problema | Suggestão |
|------|----------|-----------|
| Missing | Caso de senha incorreta não especificado | Adicionar mensagem de erro |
| Missing | Caso de usuário não encontrado | Adicionar handling |
| Missing | Lockout após tentativas falhas | Adicionar regra de segurança |

### Saída Completa

```markdown
## Authentication

### Happy Path
- Dado que usuário existe no sistema
- E senha está correta
- Quando usuário faz login
- Então acesso é concedido

### Erro: Senha Incorreta
- Dado que usuário existe
- E senha está incorreta
- Quando tenta login
- Então exibe "Senha incorreta"
- E incrementa contador de tentativas

### Erro: Usuário Inexistente
- Dado que email não está registrado
- Quando tenta login
- Então exibe "Usuário não encontrado"

### Lockout
- Após 5 tentativas falhas
- Conta é bloqueada por 15 minutos
- Admin recebe notificação
```