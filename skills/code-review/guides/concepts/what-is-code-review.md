# O que é Code Review

## Definição

Code review é o processo sistemático de examinar código fonte por outros desenvolvedores antes de ser mesclado ao repositório principal. É uma prática de garantia de qualidade onde pelo menos um desenvolvedor que não o autor revisa o código.

## Por que fazer Code Review

| Benefício | Descrição |
|----------|-----------|
| **Detecção de bugs** | Bugs encontrados antes de produção |
| **Qualidade do código** | Código mais limpo e manutenível |
| **Compartilhamento de conhecimento** | Time conhece o codebase |
| **Consistência** | Padrões de código seguidos |
| **Segurança** | Vulnerabilidades identificadas |
| **Mentoria** | Desenvolvedores aprendem uns com os outros |

## O que acontece no Code Review

```
┌──────────────────────────────────────────────────────────┐
│              Fluxo de Code Review                       │
├──────────────────────────────────────────────────────────┤
│  1. Desenvolvedor escreve código                     │
│  2. Cria Pull Request                              │
│  3. Revisores recebem notificação                  │
│  4. Revisores analisam código                      │
│  5. Comentários são deixados                      │
│  6. Autor faz adjustments                         │
│  7. Mais reviews se necessário                    │
│  8. PR approved e mergeado                        │
└──────────────────────────────────────────────────────────┘
```

## Quem participa

### Autor do Código
- Escreve o código
- Responde dúvidas
- Faz ajustes solicitados
- Garante que testes passam

### Revisor
- Analisa o código
- Dá feedback construtivo
- Aprova ou solicita mudanças
- Testa localmente se necessário

### Mantenedor/Lead (opcional)
- Decide em casos de conflito
- Garante políticas seguidas
- Approve final

## Quando fazer Code Review

### Pré-commit (antes de push)
- Revisão por pares em pares
- Ferramentas como GitHub, GitLab

### Pós-commit (depois de push)
- Continuous integration
- Automated testing

## Diferença entre Code Review ePair Programming

| Code Review | Pair Programming |
|------------|-----------------|
| Assíncrono | Síncrono |
| Múltiplos revisores | Uma pessoa por vez |
| Documentado | Tempo real |
| Pode ser demorado | Requer agendamento |

## Referências

- [Google Engineering Practices](https://google.github.io/styleguide/)
- [Code Review Best Practices](https://www.evokely.com/blog/code-review-best-practices/)