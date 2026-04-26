# Unit Test Checklist

## Test Structure

- [ ] Nome segue convenção (`test_*` ou `*_test`)
- [ ] Test tem nome descritivo
- [ ] Tem comments ou docstring

## AAA Pattern

- [ ] Arrange: dados preparados
- [ ] Act: ação executada
- [ ] Assert: resultado verificado

## Assertions

- [ ] Assertions específicas
- [ ] Não usa asserts genéricos

## Mocking

- [ ] Dependências externas mockingadas
- [ ] Não testa serviços externos diretamente

## Coverage

- [ ] Paths principais cobertos
- [ ] Edge cases incluídos
- [ ] Error handling coberto