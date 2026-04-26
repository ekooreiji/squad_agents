# E2E Tests - Cypress

## Instalação

```bash
npm install --save-dev cypress
```

## Configuração

```javascript
// cypress.config.js
module.exports = {
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
  },
};
```

## Teste Básico

```javascript
// cypress/e2e/login.cy.js
describe('Login', () => {
  it('successful login', () => {
    cy.visit('/login');
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('password');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });

  it('failed login', () => {
    cy.visit('/login');
    cy.get('#email').type('wrong@example.com');
    cy.get('#password').type('wrong');
    cy.get('button[type="submit"]').click();
    cy.get('.error').should('be.visible');
  });
});
```

## Comandos Personalizados

```javascript
// cypress/support/commands.js
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('#email').type(email);
  cy.get('#password').type(password);
  cy.get('button[type="submit"]').click();
});

// Uso
it('login with command', () => {
  cy.login('test@example.com', 'password');
  cy.url().should('include', '/dashboard');
});
```

## Fixtures

```javascript
// cypress/fixtures/user.json
{
  "valid": {
    "email": "test@example.com",
    "password": "password"
  }
}

// Uso
it('login with fixture', () => {
  cy.fixture('user').then((user) => {
    cy.login(user.valid.email, user.valid.password);
  });
});
```

## Run

```bash
npx cypress open
npx cypress run
```