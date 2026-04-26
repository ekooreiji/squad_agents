# Unit Test Example - Python

```python
# tests/unit/test_calculator.py
import pytest
from myapp.calculator import Calculator

class TestCalculator:
    @pytest.fixture
    def calc(self):
        return Calculator()
    
    def test_add(self, calc):
        assert calc.add(2, 3) == 5
    
    def test_subtract(self, calc):
        assert calc.subtract(5, 3) == 2
    
    def test_multiply(self, calc):
        assert calc.multiply(3, 4) == 12
    
    def test_divide(self, calc):
        assert calc.divide(10, 2) == 5
    
    def test_divide_by_zero(self, calc):
        with pytest.raises(ZeroDivisionError):
            calc.divide(1, 0)
```