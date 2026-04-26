# Tipos de Testes

## Categorias Principais

### 1. Unit Tests

| Característica | Descrição |
|--------------|-----------|
| **Escopo** | Função, método, classe |
| **Dependências** | Mockadas |
| **Tempo** | Milissegundos |
| **Confiabilidade** | Alta |

```python
def test_add_numbers():
    assert add(2, 3) == 5
```

### 2. Integration Tests

| Característica | Descrição |
|--------------|-----------|
| **Escopo** | Múltiplos módulos |
| **Dependências** | Reais (banco, API) |
| **Tempo** | Segundos |
| **Confiabilidade** | Média |

```python
def test_create_user(db):
    user = create_user({"name": "John"}, db)
    assert user.id is not None
```

### 3. E2E Tests

| Característica | Descrição |
|--------------|-----------|
| **Escopo** | Aplicação completa |
| **Dependências** | Todas |
| **Tempo** | Minutos |
| **Confiabilidade** | Baixa (flaky) |

```python
def test_login_flow():
    page.goto("/login")
    page.fill("#email", "test@test.com")
    page.click("button[type='submit']")
    expect(page).to_have_url("/dashboard")
```

## Tipos por Objetivo

### Functional Tests
```python
def test_calculate_tax():
    assert calculate_tax(100, "CA") == 7.25
```

### Non-Functional Tests
```python
def test_response_time():
    start = time.time()
    api.get("/users")
    assert time.time() - start < 0.5
```

### Regression Tests
```python
def test_login_works():
    # Garante que login continua funcionando
    assert login("user", "pass") == True
```

### Smoke Tests
```python
def test_app_starts():
    response = api.get("/health")
    assert response.status == 200
```

### Sanity Tests
```python
def test_core_features():
    assert has_login()
    assert has_logout()
    assert has_signup()
```

## Comparação

| Tipo | Escopo | Frequência | Custo |
|------|-------|-----------|-------|
| Unit | Função | Alta | Baixo |
| Integration | Módulo | Média | Médio |
| E2E | Sistema | Baixa | Alto |