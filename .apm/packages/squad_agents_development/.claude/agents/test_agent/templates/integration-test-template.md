# Integration Test Template

## Metadata
| Campo | Valor |
|-------|-------|
| Data | {YYYY-MM-DD} |
| Autor | Test Agent |
| Versão | 1.0.0 |
| Skill Associada | jest-integration-testing |

---

## JavaScript / TypeScript - Jest + Supertest

import request from 'supertest';
import app from '../src/app';

describe('{METHOD} {endpoint}', () => {
  it('deve retornar {status} quando {condição}', async () => {
    // Arrange
    const payload = {data};

    // Act
    const response = await request(app)
      .{method}({endpoint})
      .send(payload);

    // Assert
    expect(response.status).toBe({status});
    expect(response.body).toEqual({expected});
  });

  it('deve retornar {status} com {condição de erro}', async () => {
    // Arrange
    const invalidPayload = {invalidData};

    // Act
    const response = await request(app)
      .{method}({endpoint})
      .send(invalidPayload);

    // Assert
    expect(response.status).toBe({errorStatus});
    expect(response.body).toHaveProperty('error');
  });

  it('deve validar {campo} obrigatório', async () => {
    // Arrange
    const payload = {missingField};

    // Act
    const response = await request(app)
      .{method}({endpoint})
      .send(payload);

    // Assert
    expect(response.status).toBe(400);
  });
});

describe('{METHOD} {endpoint} with auth', () => {
  let token;

  beforeAll(async () => {
    // Login to get token
    const loginResponse = await request(app)
      .post('/auth/login')
      .send({ validCredentials });

    token = loginResponse.body.token;
  });

  it('deve retornar {status} quando autenticado', async () => {
    // Act
    const response = await request(app)
      .{method}({endpoint})
      .set('Authorization', `Bearer ${token}`);

    // Assert
    expect(response.status).toBe({status});
  });
});

---

## Python - Pytest + Requests

import pytest
import requests

BASE_URL = 'http://localhost:3000'

class Test{Endpoint}:
    def test_{metodo}_{condicao}_retorna_{status}:
        # Arrange
        payload = {data}

        # Act
        response = requests.{method}(f'{BASE_URL}{endpoint}', json=payload)

        # Assert
        assert response.status_code == {status}
        assert response.json() == {expected}

    def test_{metodo}_{condicao}_retorna_{errorStatus}:
        # Arrange
        invalid_payload = {invalid_data}

        # Act
        response = requests.{method}(f'{BASE_URL}{endpoint}', json=invalid_payload)

        # Assert
        assert response.status_code == {errorStatus}
        assert 'error' in response.json()

---

## Melhores Práticas

| Prática | Descrição |
|--------|----------|
| Use async/await | API calls são async |
| Teste status code | 200, 201, 400, 404, 500 |
| Teste response body | Verifique dados |
| Teste auth | Sempre teste autenticado |
| Teste validation | Campos obrigatórios |
| Use fixtures | Dados compartilhados |

---

## Dúvidas em Aberto ❓
| # | Pergunta |
|----|---------|
| 1 | ... |

---

## Próximos Passos
- [ ] Aplicar template
- [ ] Executar testes
- [ ] Verificar cobertura