# Programação Funcional - Checklist de Validação

Use esta checklist para verificar implementações funcionais.

---

## 1. Conceitos Fundamentais

### Funções Puras
- [ ] Não modifica estado externo
- [ ] Não depende de estado externo
- [ ] Mesmo input = mesmo output
- [ ] Sem side effects (print, I/O, etc)

### Imutabilidade
- [ ] Dados não mudam após criação
- [ ] Updates criam novos objetos
- [ ] Uso de spread/rest operators
- [ ] freeze/Object.freeze quando aplicável

### High-Order Functions
- [ ] Funções passadas como argumentos
- [ ] Funções retornadas de funções
- [ ] Closures capturam ambiente corretamente

### Closure
- [ ] Função "lembra" variáveis do escopo externo
- [ ] Escopo é preservado corretamente
- [ ] Sem vazamento de memória

---

## 2. Operações com Coleções

### map
- [ ] Aplica função a cada elemento
- [ ] Preserva estrutura original
- [ ] Não tem side effects

### filter
- [ ] Mantém elementos que satisfazem predicado
- [ ] Remove elementos falsy se usar filter(Boolean)
- [ ] Criar nova lista (não modifica)

### reduce
- [ ] Valor inicial fornecido
- [ ] Acumulador é imutável
- [ ] Uma única passagem quando possível

### find/some/every
- [ ] find: retorna primeiro ou undefined
- [ ] some: retorna boolean
- [ ] every: verifica todos

---

## 3. Composition

### Pipe
- [ ] Executa left to right
- [ ] Resultado de uma é input da próxima
- [ ] Funções são pequenas e reutilizáveis

### Compose
- [ ] Executa right to left
- [ ] Equivalent ao pipe
- [ ] Clareza na ordem de execução

### Partial Application
- [ ] Argumentos parcialmente aplicados
- [ ] Função retornada para completar
- [ ] Currying quando apropriado

---

## 4. Currying

- [ ] Função de N args → N funções de 1 arg
- [ ] encadeamento funciona corretamente
- [ ] Sem aridade fixa, usar variádico

---

## 5. Monads e Functors

### Functor (map)
- [ ] Aplica função sobre valor wrapper
- [ ] Retorna novo Functor do mesmo tipo
- [ ] Não unwraps o valor

### Monad (flatMap/bind)
- [ ] Encadeia operações que retornam Monad
- [ ] Não unwraps automaticamente
- [ ] Preserva estrutura de controle

### Either/Maybe
- [ ] Representa sucesso ou falha
- [ ] Tratamento funcional de erros
- [ ] Sem exceptions imperativas

---

## 6. Lazy Evaluation

### Generators/Iterables
- [ ] Avalia apenas quando necessário
- [ ] Sem criação de listas intermediárias
- [ ] Memória eficiente

### Transducers
- [ ] Composição eficiente
- [ ] Uma única passagem
- [ ] Funciona com múltiplas estruturas

---

## 7. JavaScript/TypeScript

- [ ] Arrow functions para hofs
- [ ] Destructuring para inputs
- [ ] Spread operator para outputs
- [ ] async/await funcional

---

## 8. Python

- [ ] Lambda para hofs simples
- [ ] map/filter/reduce funcionais
- [ ] dataclasses com frozen=True
- [ ] Typing hints completos

---

## 9. React

- [ ] Componentes são funções puras
- [ ] Estado é imutável
- [ ] useCallback para callbacks
- [ ] useMemo para cálculos
- [ ] Selectors para extrair dados

---

## 10. Angular + RxJS

- [ ] Observables ao invés de Promises
- [ ] pipe para composition
- [ ] Imutabilidade no estado
- [ ] Reducers para updates
- [ ] Operators customizados

---

## 11. Estrutura de Projeto

- [ ] Separação clara de camadas
- [ ] Funções pequenas e reutilizáveis
- [ ] Sem dependências circulares
- [ ] Composition sobre inheritance

---

## Quick Test

### Teste de Pureza

```python
# A função pode ser testada sem mockar?
def pure_function(input) -> output:
    # Sem import de módulos externos
    # Sem acesso a globals
    return transform(input)
```

### Teste de Imutabilidade

```javascript
// Nãomodifica o original?
const updated = original.map(x => x * 2);
original // ainda tem valores originais
```

---

## Erros Comuns

| Erro | Correção |
|-------|--------|
| Mutação de estado | Criar novo objeto |
| Side effects | Mover para edge da aplicação |
| Funções gigantes | Decompor em funções menores |
| Monads aninhados | flatMap em vez de map |
| Lista intermediária | Usar transducers |