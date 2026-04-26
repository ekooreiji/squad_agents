# Teste Template

## Basic Test Structure

```python
# tests/unit/test_math.py
import pytest

class TestMathOperations:
    """Math operations test suite"""
    
    def test_add_positive_numbers(self):
        """Test adding two positive numbers"""
        # Arrange
        a, b = 2, 3
        
        # Act
        result = a + b
        
        # Assert
        assert result == 5
    
    def test_add_negative_numbers(self):
        """Test adding negative numbers"""
        result = -1 + 1
        assert result == 0
```

## JavaScript

```javascript
// tests/unit/math.test.js
describe('Math', () => {
  describe('add', () => {
    test('adds two numbers', () => {
      expect(add(2, 3)).toBe(5);
    });
  });
});
```

## Naming Conventions

| Type | Convention |
|------|-----------|
| Test file | `test_*.py` or `*_test.py` |
| Test class | `TestClassName` |
| Test function | `test_method_name` |
| Describe block | `describe('feature', () => {})` |