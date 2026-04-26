# Security Checklist

## Authentication

- [ ] Conexões exigem autenticação
- [ ] Usuários com privilégios mínimos
- [ ] Senhas fortes configuradas
- [ ] Rotação de senhas periódica

## Encryption

- [ ] SSL/TLS para conexões
- [ ] Dados sensíveis encryption at rest
- [ ] Secrets em variáveis de ambiente
- [ ] Keys de encryption protegidos

## Access Control

- [ ] Privilégio mínimo (least privilege)
- [ ] Roles específicas por aplicação
- [ ] Usuarios de leitura/escrita separados
- [ ] Acesso restrito a production DB

## Query Security

- [ ] Parameterized queries (evita SQL injection)
- [ ] Input validation
- [ ] Rate limiting em queries pesadas
- [ ] Log de queries suspeitas

## Network

- [ ] Firewall configurado
- [ ] Acesso só por whitelist
- [ ] DB não exposto diretamente
- [ ] Private subnets para DB

## Monitoring

- [ ] Log de tentativas de login falhas
- [ ] Alertas para queries suspeitas
- [ ] Auditoria de mudanças
- [ ] Backup verificationregular