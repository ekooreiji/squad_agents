# Hexagonal Architecture - Checklist de Validação

Use esta checklist para validar implementações de Arquitetura Hexagonal.

---

## 1. Estrutura de Diretórios

- [ ] Existe separação clara entre camadas
- [ ] Domínio está no centro (sem dependências externas)
- [ ] Ports são definidas pelo domínio (não por adapters)
- [ ] Adapters implementam Ports (não o contrário)
- [ ] Nomes seguem convenção estabelecida

---

## 2. Dependências

- [ ] Domínio não importa frameworks externos
- [ ] Domínio não importa ORMs
- [ ] Domínio não importa libs HTTP
- [ ] Use cases dependem apenas de Ports (interfaces)
- [ ] Dependency Injection é usado para conectar adapters

---

## 3. Domain

- [ ] Entities têm identidade única
- [ ] Value Objects são imutáveis
- [ ] Domain Services contêm lógica de negócio pura
- [ ] Não há dependências externas nas entities
- [ ] Entities têm comportamento (methods)

---

## 4. Ports

- [ ] Input Ports (use case interfaces) estão definidas
- [ ] Output Ports (repository interfaces) estão definidas
- [ ] Ports são interfaces abstratas (Protocol/ABC)
- [ ] Nomes terminam com "Port" ou "Interface"
- [ ] Domínio define as Ports (não adapters)

---

## 5. Use Cases (Application)

- [ ] Use cases orquestram domínio
- [ ] Não contêm lógica de negócio (apenas coordenação)
- [ ] Recebem Ports via injeção de dependência
- [ ] Command/Query objects estão separados
- [ ] Retornam entities/domain objects

---

## 6. Adapters

### Input Adapters (Driving)

- [ ] Recebem requisições externas
- [ ] Convertem entrada para Commands
- [ ] Chamam Use Cases
- [ ] Convertem resposta para formato外部
- [ ]Tratam erros apropriadamente

### Output Adapters (Driven)

- [ ] Implementam Output Ports
- [ ] Conhecem infraestrutura (DB, API, etc)
- [ ] São injetados em Use Cases
- [ ] Podem ser trocados sem mudar domínio

---

## 7. Composition Root

- [ ] Todas as dependências são conectadas
- [ ] DI container ou função de wiring existe
- [ ] Adapters concretos são instanciados aqui
- [ ] Frameworks são configurados aqui
- [ ] Aplicação é bootstrappada aqui

---

## 8. Testabilidade

- [ ] Domínio pode ser测试ado sem DB
- [ ] Use cases podem ser testados com mocks
- [ ] Adapters podem ser trocados para testes
- [ ] Testes não dependem de frameworks

---

## 9. naming Conventions

| Componente | Padrão | Exemplo |
|------------|--------|---------|
| Entities | PascalCase | `User` |
| Value Objects | PascalCase | `Email` |
| Use Cases | *UseCase | `CreateUserUseCase` |
| Input Ports | *Port | `CreateUserPort` |
| Output Ports | *Port | `UserRepositoryPort` |
| Input Adapters | Tipo + Adapter | `RESTAdapter` |
| Output Adapters | Tecno + Adapter | `SQLAlchemyAdapter` |

---

## 10. Erros Comuns

| Erro | Correção |
|------|----------|
| Domain importa SQLAlchemy | Use Ports abstraction |
| Use case tem SQL | Mova para Repository |
| Entity é dict | Use classe com methods |
| Controller tem lógica | Forward to Use Case |
| Múltiplas camadas | Simplifique |
| tight coupling | Use DI |

---

## 11. Quick Test

Execute este teste rápido:

```bash
# O domínio pode ser importado standalone?
cd src
python -c "from domain.entities import User"

# Use case funciona sem frameworks?
python -c "
from domain.entities import User
from application.use_cases import CreateUserUseCase
# não deve falhar
"
```

Se qualquer um falhar, a arquitetura não está correta.

---

## Referências

- [Alistair Cockburn - Hexagonal](https://alistair.cockburn.us/hexagonal-architecture/)
- [Ports and Adapters - Wikipedia](https://en.wikipedia.org/wiki/Hexagonal_architecture)