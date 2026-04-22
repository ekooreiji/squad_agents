# POO - Checklist de Validação

Use esta checklist para validar implementações POO.

---

## 1. Classes e Objetos

- [ ] Classe tem responsabilidade única?
- [ ] Nome é descritivo e específico?
- [ ] Construtor é simples?
- [ ] Atributos estão encapsulados?
- [ ] Classe não faz demais?

---

## 2. Nomenclatura

- [ ] Classe em PascalCase?
- [ ] Método em camelCase?
- [ ] Atributo privado tem _?
- [ ] Constante em UPPER_CASE?
- [ ] Interface sem sufixo desnecessário?

---

## 3. Encapsulamento

- [ ] Atributos sensíveis são privados?
- [ ] Getters/setters para atributos?
- [ ] Validação nos setters?
- [ ] Métodos auxiliares privados?
- [ ] Interface pública mínima?

---

## 4. Herança

- [ ] Relação "é-um" clara?
- [ ] Herança não é para reutilização?
- [ ] Nível de herança raso (≤3)?
- [ ] super() chamado corretamente?
- [ ] Override faz sentido?

---

## 5. Polimorfismo

- [ ] Interface definida corretamente?
- [ ] Classes implementam contrato?
- [ ] Sem instanceof/cast?
- [ ] Sobrecarga quando necessário?

---

## 6. SOLID

### Single Responsibility
- [ ] Classe tem uma razão para mudar?

### Open/Closed
- [ ] Pode estender sem modificar?
- [ ] Usa abstraction?

### Liskov Substitution
- [ ] Subclasse substitui pai?
- [ ] Contrato preservado?

### Interface Segregation
- [ ] Interfaces pequenas?
- [ ] Sem métodos não usados?

### Dependency Inversion
- [ ] Depende de abstrações?
- [ ] Não de concretos?

---

## 7. Anti-Patterns

- [ ] Sem God Object?
- [ ] Sem Primitive Obsession?
- [ ] Sem Data Class?
- [ ] Sem Circular Dependency?
- [ ] Sem Feature Envy?

---

## 8. Coesão e Acoplamento

### Coesão
- [ ] Atributos relacionados?
- [ ] Métodos usam atributos?
- [ ] Um propósito?

### Acoplamento
- [ ] Baixo acoplamento?
- [ ] Dependencies injetadas?
- [ ] Sem globals?

---

## Checklist Rápido

```python
# Teste rápido de design

# 1. Consegue descrever a classe em uma frase?
class User:
    """Representa um usuário do sistema."""
    pass

# 2. Se usar "e" ou "ou", separe
# ✗ UserValidatorAndSaver
# ✓ UserValidator, UserSaver

# 3. Se a classe tivesse 5 linhas, ainda faria sentido?
class OrderCalculator:  # ✗ muitas responsabilidades
class PriceCalculator:  # ✓ foco

# 4. A classe pode ser testada isoladamente?
```

---

## Dicas Finais

| Problema | Solução |
|---------|--------|
| Nome vago | Seja específico |
| Classe grande | Divida |
| Muitos attrs | Agrupe |
| Herança profunda | Flatten |
| acoplamento alto | Injete deps |
| Sem comportamento | Adicione lógica |