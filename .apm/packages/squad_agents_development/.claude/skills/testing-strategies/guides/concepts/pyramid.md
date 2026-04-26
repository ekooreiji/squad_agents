# Testing Pyramid

## Estrutura

```
              ╱╲
             ╱  ╲
            ╱ E2E╲
           ╱──────╲
          ╱Integration╲
         ╱────────────╲
        ╱    Unit      ╲
       ╱────────────────╲
```

| Camada | Qtd | Tempo | Custo | Escopo |
|--------|-----|-------|-------|--------|
| **E2E** | 10-20% | Minutos | Alto | Fluxo completo |
| **Integration** | 20-30% | Segundos | Médio | Módulos |
| **Unit** | 50-70% | ms | Baixo | Funções/classes |

## Proporção Ideal

```
100% de testes
├── 70% Unit tests
├── 20% Integration tests  
└── 10% E2E tests
```

## Por que a pirâmide?

| Motivo | Explicação |
|-------|-----------|
| **Velocidade** | Unit tests são极速 |
| **Custo** | Unit tests são baratos |
| **Confiabilidade** | Unit tests são estáveis |
| **Debug** | Unit tests localizam bugs rápido |

## Exemplos por Camada

### Unit Test
```python
def test_calculate_total():
    assert calculate_total([10, 20, 30]) == 60
```

### Integration Test
```python
def test_get_user_with_orders(db):
    user = get_user(1, db)
    orders = get_orders_by_user(1, db)
    assert len(orders) > 0
```

### E2E Test
```python
def test_user_login_and_purchase():
    page.goto("/login")
    page.fill("#email", "user@example.com")
    page.click("button[type='submit']")
    assert page.url == "/dashboard"
```

## Quando usar cada tipo

| Cenário | Teste recomendado |
|--------|-----------------|
| Lógica de função | Unit |
| API endpoint | Integration |
| Fluxo UI | E2E |
| Banco de dados | Integration |
| Autenticação | E2E + Integration |

## Anti-patterns

| Anti-pattern | Problema |
|-------------|----------|
| Iceberg de testes | Muitos E2E, poucos unit |
| Copa de árvore | só unit, sem integração |
| Mille-feuille | Camadas desbalanceadas |

## Referências

- [Test Pyramid - Martin Fowler](https://martinfowler.com/bliki/TestPyramid.html)