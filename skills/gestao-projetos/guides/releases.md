# Gestão de Releases

Guia sobre como gerenciar entregas e releases.

---

## 1. O que é Release

Release é a entrega de funcionalidades ao cliente/usuário.

---

## 2. Tipos de Release

### 2.1 Por Frequência

| Tipo | Descrição | Frequência |
|------|-----------|-----------|
| Hotfix | Correção crítica | Imediato |
| Patch | Correção menor | Semanal |
| Minor | Novas features | Quinzenal/Mensal |
| Major | Grandes mudanças | Trim/Major |

### 2.2 Por Ambiente

| Ambiente | Descrição |
|----------|----------|
| Development | Dev local |
| Staging | Homologação |
| Production | Produção |

---

## 3. Release Planning

### 3.1 Definir Escopo

```
## Release X.Y

### Features Incluídas
- [ ] Feature 1
- [ ] Feature 2

### Correções Incluídas
- [ ] Bug 1
- [ ] Bug 2

### Excluído
- [ ] Feature 3

### Data de Release: DD/MM
```

### 3.2 Critérios de-ready

| Critério | Descrição |
|----------|----------|
| Tests passing | 100% testes passando |
| Code review | Aprovado |
| Documentation | Atualizado |
| Deploy | Feito |
| Sign-off | Aprovado |

---

## 4. Processo de Release

### 4.1 Checklist Pré-Release

- [ ] Todos os testes passando
- [ ] Code review aprovado
- [ ] Changelog atualizado
- [ ] Documentação atualizada
- [ ] Migration planready
- [ ] Rollback plan ready
- [ ] Monitoramento configurado
- [ ] Equipe de plantão notificada

### 4.2 Passo a Passo

1. **Freeze de código**: Não aceitar novas features
2. **Feature freeze**: Só correções
3. **Code freeze**: Só bugs críticos
4. **Deploy para staging**:Testar
5. **Deploy para produção**: Release
6. **Monitorar**: Verificar erros
7. **Comunicar**: Anunciar release

---

## 5. Versionamento

### 5.1 Semantic Versioning

```
MAJOR.MINOR.PATCH
1.2.3
  |  |  |
  |  |  Patch: Correção
  |  Minor: Nova feature (backwards compatible)
  MAJOR: Breaking change
```

### 5.2 Exemplos

| Mudança | Nova Versão |
|---------|------------|
| Bug fix | 1.0.0 → 1.0.1 |
| Nova feature | 1.0.0 → 1.1.0 |
| Breaking change | 1.0.0 → 2.0.0 |

---

## 6. Communication

### 6.1 Release Notes

```
## Release Notes v1.2.0

### Novidades
- Nova feature de busca
- Melhoria de performance

### Correções
- Bug no login corrigido
- Performance melhorada

### Known Issues
- Alguns usuários relatam slowdown no Firefox

### Upgrade
- Recomendamos fazer upgrade em 30 dias
```

### 6.2 Comunicação Interna

| Quando | Canal |
|---------|-------|
| Pre-release | Team chat |
| Post-deploy | Slack/Teams |
| Problemas | Alert channel |

---

## 7. Rollback

### 7.1 Quando Executar

- Erros críticos em produção
- Performance degradada
- Dados corrompidos

### 7.2 Processo

```
1. Identificar problema
2. Confirmar que é rollback
3. Executar rollback (via git/tag)
4. Verificar funcionamento
5. Comunicar equipe
6. Analisar root cause
```

---

## Cross-refs

- [planning.md](planning.md) - Planejamento
- [rastreamento.md](rastreamento.md) - Rastreamento
- [retrospectivas.md](retrospectivas.md) - Melhoria