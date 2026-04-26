# Unit Tests - Java

## Frameworks

| Framework | Uso |
|----------|-----|
| **JUnit 5** | Padrão, moderno |
| **TestNG** | Mais features |

## Dependências Maven

```xml
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.10.0</version>
    <scope>test</scope>
</dependency>
```

## Estrutura

```
src/test/java/
└── com/example/
    └── MathServiceTest.java
```

## Testes Básicos

```java
package com.example;

import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

class MathServiceTest {
    
    private MathService mathService;
    
    @BeforeEach
    void setUp() {
        mathService = new MathService();
    }
    
    @Test
    void testAdd() {
        assertEquals(5, mathService.add(2, 3));
    }
    
    @Test
    void testAddNegative() {
        assertEquals(0, mathService.add(-1, 1));
    }
    
    @Test
    void testDivide() {
        assertThrows(ArithmeticException.class, 
            () -> mathService.divide(1, 0));
    }
}
```

## Display Names

```java
@DisplayName("Math Service Tests")
class MathServiceTest {
    
    @DisplayName("adds two positive numbers")
    @Test
    void testAddPositive() {
        assertEquals(5, mathService.add(2, 3));
    }
}
```

## Parametrização

```java
@ParameterizedTest
@CsvSource({
    "2, 3, 5",
    "-1, 1, 0",
    "0, 0, 0"
})
void testAdd(int a, int b, int expected) {
    assertEquals(expected, mathService.add(a, b));
}
```

## Mocking

```java
import org.mockito.junit.jupiter.MockitoExtension;
import org.junit.jupiter.api.extension.ExtendWith;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {
    
    @Mock
    private UserRepository userRepository;
    
    @Test
    void testSaveUser() {
        when(userRepository.save(any())).thenReturn(new User());
        User user = userService.save("John");
        assertNotNull(user);
    }
}
```

## Assertions

```java
// Basic
assertEquals(5, result);
assertTrue(isValid);
assertNull(user);
assertNotNull(user);

// With message
assertEquals(5, result, "Result should be 5");

// Array
assertArrayEquals(expected, actual);
```