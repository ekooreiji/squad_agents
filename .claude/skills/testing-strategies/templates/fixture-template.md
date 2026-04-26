# Fixture Template - Python (pytest)

## Simple Fixture

```python
@pytest.fixture
def user():
    return User(name="Test", email="test@example.com")
```

## Fixture with Parameters

```python
@pytest.fixture
def user_factory():
    def _create(name, email):
        return User(name=name, email=email)
    return _create
```

## Fixture with Database

```python
@pytest.fixture
def db_session():
    engine = create_engine("sqlite:///:memory:")
    Session = sessionmaker(bind=engine)
    session = Session()
    yield session
    session.close()
```

## Fixture for API Client

```python
@pytest.fixture
def api_client():
    return TestClient(app)
```

## Fixture for Browser (Playwright)

```javascript
// fixtures/worker.ts
import { test as base } from '@playwright/test';

export const test = base.extend({
  page: async ({ browser }, use) => {
    const page = await browser.newPage();
    await use(page);
    await page.close();
  },
});
```