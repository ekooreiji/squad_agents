# Design Patterns - Checklist de Validação

Use esta checklist para verificar uso correto de Design Patterns.

---

## 1. Padrões de Criação (Creational)

### Singleton
- [ ] Construtor privado?
- [ ] Instância única global?
- [ ] Thread-safe (se necessário)?
- [ ] Lazy initialization (se aplicável)?

### Factory Method
- [ ] Creator abstrato?
- [ ] Product abstrato?
- [ ] Subclasses criam concretas?
- [ ] Não conhece classe concreta?

### Abstract Factory
- [ ] Família de produtos?
- [ ] Produtos relacionados?
- [ ] Troca família?
- [ ] Isolamento de classes concretas?

### Builder
- [ ] Builder separado?
- [ ] Etapas fluentes?
- [ ]build() no final?
- [ ] Objeto imutável result?

### Prototype
- [ ]clone() profundo?
- [ ] Cópia independente?
- [ ] Registro de prototypes (opcional)?
- [ ]clone() preserva estado?

---

## 2. Padrões Estruturais (Structural)

### Adapter
- [ ] Interface incompatível convertida?
- [ ] Wrapper ao redor de adaptee?
- [ ] Client não conhece adaptee?
- [ ] Bidirectional (opcional)?

### Bridge
- [ ] Abstração separada de implementação?
- [ ] Herança não fixada?
- [ ] Extensões independentes?
- [ ] Prevents explosion of classes?

### Composite
- [ ] Estrutura árvore?
- [ ] Leaf e Composite tratados igual?
- [ ] Uniform interface?
- [ ] Transparência?

### Decorator
- [ ] Responsabilidades adicionadas dinamicamente?
- [ ] Composição sobre herança?
- [ ] Múltiplos decorators possíveis?
- [ ] Decorator não muda interface?

### Facade
- [ ] Subsystem complexo abstrato?
- [ ] Interface simples?
- [ ] Cliente usa só facade?
- [ ] Não viola encapsulamento?

### Flyweight
- [ ] Objetos compartilhados?
- [ ] Estado intrínseco vs extrínseco?
- [ ] Factory para flyweights?
- [ ] Memória economizada?

### Proxy
- [ ] Objeto surrogado?
- [ ] Controle de acesso?
- [ ] Lazy loading (se aplicável)?
- [ ] Transparent ao cliente?

---

## 3. Padrões Comportamentais (Behavioral)

### Observer
- [ ] Subscribe/unsubscribe?
- [ ] Notificação automática?
- [ ] Loose coupling?
- [ ] Pub/sub implícito?

### Strategy
- [ ] Família de algoritmos?
- [ ] Intercambiáveis?
- [ ] Context não conhece algoritmo?
- [ ] Sem conditionals?

### Command
- [ ] Comando encapsulado?
- [ ] Undo/redo possível?
- [ ] Filas de comandos?
- [ ] Transações?

### State
- [ ] Estado interno muda comportamento?
- [ ] Transitions explícitas?
- [ ] Estado atual encapsulated?
- [ ] Context não sabe estados?

### Template Method
- [ ] Esqueleto algoritmo?
- [ ] Steps abstratos?
- [ ] Hooks (opcional)?
- [ ] Herança não composition?

### Chain of Responsibility
- [ ] Handler em corrente?
- [ ] Passa para próximo?
- [ ] Decisão adiada?
- [ ] Sem conhecer predecessor?

### Mediator
- [ ] Comunicação centralizada?
- [ ] Colleagues não se conhecem?
- [ ] Loose coupling?
- [ ] Lógica de interação no mediator?

### Iterator
- [ ] Interface traversal?
- [ ] Position tracking?
- [ ] Abstração de estrutura?
- [ ] Suporte a reverse (opcional)?

### Memento
- [ ] Estado salvo?
- [ ] Encapsulamento violado?
- [ ] Originator não conhece caretaker?
- [ ] Histórico implementado?

---

## 4. Padrões Empresariais

### Repository
- [ ] Interface abstrata?
- [ ] Separa persistência?
- [ ] Query methods?
- [ ] In-memory ready?

### Unit of Work
- [ ] Dirty tracking?
- [ ] atomic commit?
- [ ] Rollback (se aplicável)?
- [ ] Transparência?

### Service Layer
- [ ] Lógica de negócio?
- [ ] Transações?
- [ ] Coordenação?
- [ ] Thin controllers?

### DTO
- [ ] Dados transferidos?
- [ ] Sem lógica?
- [ ] Mapeamento explícito?
- [ ] Validation (opcional)?

### CQRS
- [ ] Separação leitura/escrita?
- [ ] Models diferentes?
- [ ] Consistent reads (opcional)?
- [ ] Commands stateless?

---

## 5. Quando NÃO Usar

| Situação | Padrão | Problema |
|---------|--------|---------|
| Herança resolve | Decorator | Sobrecarga |
| Simples | Singleton | Global state |
| Sem variação | Strategy | YAGNI |
| Tudo em uma | Facade | God class |
| Herança rasa | Flyweight | Complexidade |

---

## 6. Checklist Geral

### Design
- [ ] Problema claramente definido?
- [ ] Padrão resolve problema?
- [ ] Consequences aceptáveis?
- [ ] Alternativas considered?

### Implementação
- [ ] Interface mínima?
- [ ] Sem violação de SOLID?
- [ ] Testável?
- [ ] Documentado?

### Performance
- [ ] Sem overhead desnecessário?
- [ ] Memory leak evitado?
- [ ] Thread-safe se necessário?
- [ ] Lazy when applicable?

---

## 7. Sinais de Problema

| Sintoma | Problema |
|---------|----------|
| Muitos ifs | Strategy/State |
| Classe gigante | Facade/Bridge |
| Objeto único global | Singleton overused |
| Herança profunda | Composite/Flyweight |
| Objetos clonados com problemas | Prototype deep copy |
| Muitos observers | Mediator/Observer too many |
| Commands sem undo | Command incomplete |
| Repositório com lógica | Service Layer missing |

---

## Referências Rápidas

### Criação
| Padrão | Use When |
|--------|----------|
| Singleton | Uma instância |
| Factory Method | Delegar criação |
| Abstract Factory | Famílias de produtos |
| Builder | Construção complexa |
| Prototype | Clonar objetos |

### Estrutural
| Padrão | Use When |
|--------|----------|
| Adapter | Converter interface |
| Bridge | Separar abstração |
| Composite | Estruturas árvore |
| Decorator | Adicionar动态amente |
| Facade | Simplificar sistema |
| Flyweight | Poupar memória |
| Proxy | Controlar acesso |

### Comportamental
| Padrão | Use When |
|--------|----------|
| Observer | Eventos/notificações |
| Strategy | Trocar algoritmos |
| Command | Undo/transações |
| State | Máquinas estado |
| Template Method | Esqueleto fixo |
| Chain of Resp. | Cascata |
| Mediator | Comunicação central |
| Iterator | Traversing |
| Memento | Undo |