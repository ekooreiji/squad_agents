# Transformações Práticas

Como transformar Acceptance Criteria vagos em critérios SMART.

---

## Autenticação

### Antes (Vago)
> O sistema deve autenticar usuários de forma segura

### Depois (SMART)
```markdown
| ID | Tipo | Critério | Critério de Teste |
|----|------|----------|--------------------|
| AC-001 | Happy | Login com email/senha válidos | Redireciona ao dashboard em < 500ms |
| AC-002 | Erro | Senha incorreta | Exibe erro, limpa campo senha |
| AC-003 | Erro | 5 tentativas falhas | Bloqueia conta por 15 min |
| AC-004 | Borda | Email em maiúsculas | Converte para minúsculas |
| AC-005 | NFR | Sessão | Expira após 30 min inatividade |
```

---

## Upload

### Antes (Vago)
> O sistema deve aceitar uploads de arquivos grandes

### Depois (SMART)
```markdown
| ID | Tipo | Critério | Critério de Teste |
|----|------|----------|--------------------|
| AC-001 | Happy | Arquivo até 10MB | Upload concluído com sucesso |
| AC-002 | Erro | Arquivo > 10MB | Exibe erro "Tamanho máx 10MB" |
| AC-003 | Erro | Tipo .exe, .bat | Exibe "Tipo não permitido" |
| AC-004 | Borda | Nome > 255 chars | Trunca para 255 chars |
| AC-005 | Erro | Arquivo病毒的 | Exibe "Arquivo bloqueado" |
```

---

## Busca

### Antes (Vago)
> A busca deve ser rápida e retornar resultados relevantes

### Depois (SMART)
```markdown
| ID | Tipo | Critério | Critério de Teste |
|----|------|----------|--------------------|
| AC-001 | Happy | Busca termo existente | Retorna ≤ 100 resultados em < 300ms |
| AC-002 | Happy | Busca vazia | Exibe "Digite um termo" |
| AC-003 | Erro | Busca SQL injection | Escape e trata como texto |
| AC-004 | Borda | Busca "*" | Exibe wildcard error |
| AC-005 | NFR | Busca 100k registros | < 1s |
```

---

## Notificações

### Antes (Vago)
> O sistema deve enviar notificações aos usuários

### Depois (SMART)
```markdown
| ID | Tipo | Critério | Critério de Teste |
|----|------|----------|--------------------|
| AC-001 | Happy | Novo pedido criado | Notificação em < 5 min | Must |
| AC-002 | Happy | Email enabled | Envia email em < 30s | Should |
| AC-003 | Erro | Email falha | Retry 3x, luego marcar falha | Should |
| AC-004 | Borda | Usuário offline | Enfileira e envia quando online | Could |
| AC-005 | NFR | Throughput | 1000 notif/min por servidor | Should |
```

---

## Checkout

### Antes (Vago)
> O checkout deve ser fluido e intuitivo

### Depois (SMART)
```markdown
| ID | Tipo | Critério | Critério de Teste |
|----|------|----------|--------------------|
| AC-001 | Happy | Checkout 1-click para saved cards | Concluído em < 3 cliques |
| AC-002 | Happy | Endereço novo |Salva para próximas compras |
| AC-003 | Erro | Cartão expirado | Exibe "Verifique validade" |
| AC-004 | Erro | CEP inválido | Exibe "CEP não encontrado" |
| AC-005 | Borda | Carrinho vazio | Redirect ao carrinho |
| AC-006 | NFR | Timeout payment | 10 min para completar |
| AC-007 | Erro | Payment falha 3x | Bloqueia método por 24h |
```

---

## Padrão de Transformação

| Vago | → | SMART |
|------|---|-------|
| "ser rápido" | | "< 500ms" |
| "arquivos grandes" | | "> 10MB" |
| "intuitivo" | | "< 3 cliques" |
| "relevantes" | | "contém termo no título ou descrição" |
| "deve funcionar" | | Happy + Erro + Borda |
| "seguro" | | TLS 1.3, hash bcrypt, rate limit |
| "vários formatos" | | ".pdf, .doc, .docx, .txt" |