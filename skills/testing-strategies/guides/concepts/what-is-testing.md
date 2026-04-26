# O que é Testing

## Definição

Testing é o processo de verificar se o código funciona corretamente através de tests automatizados.

## Por que testar

| Benefício | Descrição |
|-----------|-----------|
| **Confiança** | Mudanças não quebram funcionalidades existentes |
| **Documentação** | Testes mostram como o código deve funcionar |
| **Regressão** | Bugs são detectados antes de produção |
| **Qualidade** | Código mais robusto e manutenível |

## Testing Pyramid

```
        ╱╲
       ╱  ╲
      ╱ E2E╲        ←─ Few, Slow, Expensive
     ╱──────╲
    ╱Integration╲    ←─ Medium quantity
   ╱────────────╲
  ╱    Unit      ╲   ←─ Many, Fast, Cheap
 ╱────────────────╲
```

| Nível | Qtd | Velocidade | Custo |
|-------|-----|------------|-------|
| Unit | Muitos | Rápido | Baixo |
| Integration | Médios | Médio | Médio |
| E2E | Poucos | Lento | Alto |

## O que testar

| Tipo | O que testar |
|------|--------------|
| Unit | Funções, métodos, classes |
| Integration | Módulos, APIs, banco |
| E2E | Fluxos completos, UI |

## Quando testar

```python
# Desenvolvimento
- Antes de codar (TDD)
- Durante o desenvolvimento
- Após completar feature

# CI/CD
- A cada push
- Antes de merge
- Após deploy
```

## Referências

- [Testing Pyramid](https://martinfowler.com/bliki/TestPyramid.html)
- [Google Testing Blog](https://testing.googleblog.com/)