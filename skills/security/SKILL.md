# Security

Skill para práticas de segurança - OWASP, autenticação, criptografia com Python, JavaScript/TypeScript e Java.

---

## Visão Geral

Esta skill oferece guias, exemplos, templates e checklists para implementar segurança em aplicações.

## Arquitetura de Diretórios

```
security/
├── guides/
│   ├── concepts/        # Conceitos fundamentais
│   ├── owasp/        # OWASP Top 10
│   ├── authentication # Autenticação segura
│   ├── cryptography  # Criptografia
│   ├── secure-coding # Codificação segura
│   └── tools/       # Ferramentas
├── structures/      # Estruturas
├── templates/       # Templates
├── examples/       # Exemplos
└── checklists/    # Checklists
```

## Guias por Categoria

### Conceitos
- `guides/concepts/security-basics.md` - Fundamentos
- `guides/concepts/threats.md` - Ameaças

### OWASP
- `guides/owasp/owasp-top-10.md` - OWASP Top 10 (2021)
- `guides/owasp/injection.md` - Injection
- `guides/owasp/broken-auth.md` - Broken Authentication
- `guides/owasp/sensitive-data.md` - Sensitive Data Exposure

### Autenticação
- `guides/authentication/password-storage.md` - Senhas
- `guides/authentication/secure-sessions.md` - Sessões
- `guides/authentication/mfa.md` - MFA

### Criptografia
- `guides/cryptography/encryption.md` - Criptografia
- `guides/cryptography/hashing.md` - Hashing

### Ferramentas
- `guides/tools/static-analysis.md` - SAST
- `guides/tools/dependency-check.md` - Dependency scanning

## Templates
- `templates/security-checklist.md`

## Checklists
- `checklists/owasp-prevention.md`
- `checklists/code-review-security.md`

## Integração com Skills

Esta skill integra com todas as outras skills para garantir segurança em todas as etapas.

### Fluxo

```
security ←→ software-architecture
       ↓                    ↓
database-architecture    api-design
       ↓                    ↓
       devops ←← testing-strategies
```