# Unit Test Template

## Metadata
| Campo | Valor |
|-------|-------|
| Data | {YYYY-MM-DD} |
| Autor | Test Agent |
| Versão | 1.0.0 |
| Skill Associada | jest-unit-testing |

---

## JavaScript / TypeScript - Jest

### describe + it pattern

describe('{Nome da Função/Classe}', () => {
  beforeEach(() => {
    // Setup before each test
  });

  it('deve retornar {expected} quando {condição}', () => {
    // Arrange
    const input = {valor};

    // Act
    const result = {function}(input);

    // Assert
    expect(result).toBe({expected});
  });

  it('deve lançar erro quando {condição de erro}', () => {
    // Arrange
    const invalidInput = {valor inválido};

    // Act & Assert
    expect(() => {function}(invalidInput)).toThrow({errorType});
  });

  it('deve retornar {expected} para múltiplos valores', () => {
    // Table-driven test
    const testCases = [
      { input: {value1}, expected: {expected1} },
      { input: {value2}, expected: {expected2} },
    ];

    testCases.forEach(({ input, expected }) => {
      expect({function}(input)).toBe(expected);
    });
  });
});

describe('{Nome da Classe}', () => {
  let {instance};

  beforeEach(() => {
    {instance} = new {Class}();
  });

  it('deve {comportamento}', () => {
    // Arrange
    const param = {value};

    // Act
    const result = {instance}.{method}(param);

    // Assert
    expect(result).toBeDefined();
    expect(result).toEqual({expected});
  });
});

---

## Python - Pytest

import pytest
from {module} import {function}, {Class}

class Test{Function}:
    def test_{nome}_quando_{condicao}:
        # Arrange
        input = {value}

        # Act
        result = {function}(input)

        # Assert
        assert result == {expected}

    def test_{nome}_lanca_erro_{condicao}:
        # Arrange
        invalid_input = {invalid_value}

        # Act & Assert
        with pytest.raises({error}):
            {function}(invalid_input)

class Test{Class}:
    @pytest.fixture
    def instance(self):
        return {Class}()

    def test_{method}_retorna_{expected}(self, instance):
        # Arrange
        param = {value}

        # Act
        result = instance.{method}(param)

        # Assert
        assert result == {expected}

---

## Melhores Práticas

| Prática | Descrição |
|--------|----------|
| Arrange-Act-Assert | Estrutura clara |
| Nome descritivo | it('deve retornar...') |
| Um assertions por teste | Foco em um caso |
| use .toEqual() para objetos | Comparação profunda |
| use .toBe() para primitivos | Comparação exata |
| Teste casos de erro | Sempre teste erros |

---

## Dúvidas em Aberto ❓
| # | Pergunta |
|----|---------|
| 1 | ... |

---

## Próximos Passos
- [ ] Aplicar template
- [ ] Executar testes