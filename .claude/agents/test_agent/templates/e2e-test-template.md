# E2E Test Template

## Metadata
| Campo | Valor |
|-------|-------|
| Data | {YYYY-MM-DD} |
| Autor | Test Agent |
| Versão | 1.0.0 |
| Skill Associada | jest-integration-testing |

---

## Playwright

import { test, expect } from '@playwright/test';

test.describe('{Nome do Fluxo}', () => {
  test('deve {ação} com sucesso', async ({ page }) => {
    // Arrange
    await page.goto('{url}');

    // Act
    await page.fill('{selector_input}', '{value}');
    await page.click('{selector_button}');

    // Assert
    await expect(page).toHaveURL('{expected_url}');
    await expect(page.locator('{selector_result}')).toBeVisible();
  });

  test('deve exibir erro quando {condição}', async ({ page }) => {
    // Arrange
    await page.goto('{url}');
    await page.fill('{selector_input}', '{invalid_value}');

    // Act
    await page.click('{selector_button}');

    // Assert
    await expect(page.locator('{selector_error}')).toBeVisible();
    await expect(page.locator('{selector_error}')).toContainText('{error_message}');
  });

  test('deve navegar para {página} após {ação}', async ({ page }) => {
    // Arrange
    await page.goto('{url}');

    // Act
    await page.click('{selector_link}');

    // Assert
    await expect(page).toHaveURL('{expected_url}');
  });
});

test.describe('{Nome do Fluxo} com autenticação', () => {
  test.beforeEach(async ({ page }) => {
    // Login
    await page.goto('/login');
    await page.fill('#email', '{email}');
    await page.fill('#password', '{password}');
    await page.click('button[type="submit"]');
  });

  test('deve acessar {recurso} após login', async ({ page }) => {
    // Assert
    await expect(page).toHaveURL('{dashboard_url}');
  });
});

---

## Cypress

describe('{Nome do Fluxo}', () => {
  it('deve {ação} com sucesso', () => {
    // Arrange
    cy.visit('{url}');

    // Act
    cy.get('{selector_input}').type('{value}');
    cy.get('{selector_button}').click();

    // Assert
    cy.url().should('include', '{expected_url}');
    cy.get('{selector_result}').should('be.visible');
  });

  it('deve exibir erro quando {condição}', () => {
    // Arrange
    cy.visit('{url}');
    cy.get('{selector_input}').type('{invalid_value}');

    // Act
    cy.get('{selector_button}').click();

    // Assert
    cy.get('{selector_error}').should('be.visible');
    cy.get('{selector_error}').should('contain', '{error_message}');
  });
});

---

## Melhores Práticas

| Prática | Descrição |
|--------|----------|
| Use page objects | Separe selectors |
| Use fixtures | Dados compartilhados |
| Use hooks | beforeEach, afterEach |
| Screenhots on fail | Para debug |
| Wait for elements | Não use sleep |
| Use assertions | Verifique comportamento |

---

## Dúvidas em Aberto ❓
| # | Pergunta |
|----|---------|
| 1 | ... |

---

## Próximos Passos
- [ ] Aplicar template
- [ ] Executar testes
- [ ] Configurar CI