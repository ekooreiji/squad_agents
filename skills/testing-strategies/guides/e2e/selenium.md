# E2E Tests - Selenium

## Instalação

```bash
pip install selenium pytest
# E chromedriver
```

## Teste Básico

```python
# tests/e2e/test_login.py
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

@pytest.fixture
def driver():
    options = Options()
    options.add_argument('--headless')
    driver = webdriver.Chrome(options=options)
    yield driver
    driver.quit()

def test_login(driver):
    driver.get('http://localhost:3000/login')
    
    email = driver.find_element(By.ID, 'email')
    password = driver.find_element(By.ID, 'password')
    submit = driver.find_element(By.CSS_SELECTOR, 'button[type="submit"]')
    
    email.send_keys('test@example.com')
    password.send_keys('password')
    submit.click()
    
    assert '/dashboard' in driver.current_url
```

## Page Object

```python
# pages/login_page.py
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class LoginPage:
    def __init__(self, driver):
        self.driver = driver
    
    def goto(self):
        self.driver.get('http://localhost:3000/login')
    
    def login(self, email, password):
        self.driver.find_element(By.ID, 'email').send_keys(email)
        self.driver.find_element(By.ID, 'password').send_keys(password)
        self.driver.find_element(By.CSS_SELECTOR, 'button[type="submit"]').click()
    
    def get_error(self):
        return self.driver.find_element(By.CLASS_NAME, 'error').text

# Uso
def test_login(driver):
    page = LoginPage(driver)
    page.goto()
    page.login('test@example.com', 'password')
    assert '/dashboard' in driver.current_url
```

## Run

```bash
pytest tests/e2e/ -v
```