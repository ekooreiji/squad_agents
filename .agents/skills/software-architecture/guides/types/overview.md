# Tipos de Arquitetura de Software

Visão geral dos principais tipos de arquitetura.

---

## 1. Monolítica

### Definição
- Tudo em um único deploy
- Aplicação única e autocontida
- Todas as funcionalidades no mesmo processo

### Quando Usar
- Projetos pequenos/médios
- Times pequenos
- MVP rápido
- Quando escalabilidade não é prioridade

### Vantagens
- Simples de desenvolver
- Simples de testar
- Deploy único
- Baixa complexidade

### Desvantagens
- Escala difícil
- Atualização risky
- Um ponto de falha
- Tecnologia única

### Estrutura Típica

```
app/
├── src/
│   ├── controllers/
│   ├── services/
│   ├── models/
│   └── routes/
├── tests/
└── main.py
```

---

## 2. Camadas (Layered)

### Definição
- Separação por camadas de responsabilidade
- Cada camada conhece apenas a camada inferior
- Fluxo controlado de cima para baixo

### Quando Usar
- Projetos médios/grandes
- Equipes médias
- Quando há separação clara de responsabilidades

### Vantagens
- Organização clara
- Testabilidade por camada
- Reutilização de camadas inferiores
- Manutenção mais fácil

### Desvantagens
- Acoplamento entre camadas
- Camadas podem ficar inchadas
- Deploy único ainda

### Estrutura Típica

```
app/
├── presentation/   # UI/API
├── application/    # Casos de uso
├── domain/        # Lógica de negócio
├── infrastructure/ # Dados externos
└── main.py
```

---

## 3. Microserviços

### Definição
- Aplicação dividida em serviços independentes
- Cada serviço com sua própria responsabilidade
- Comunicação por API ou mensagens

### Quando Usar
- Projetos grandes
- Times grandes distribuídos
- Escalabilidade独立
- Múltiplas tecnologias

### Vantagens
- Escalabilidade independente
- Deploy independente
- Resiliência (falha isolada)
- Tecnologia heterogênea

### Desvantagens
- Complexidade operacional
- Latência de rede
- Dados distribuídos
- Debugging difícil

### Estrutura Típica

```
services/
├── user-service/
│   ├── src/
│   ├── Dockerfile
│   └── service.yaml
├── order-service/
│   ├── src/
│   ├── Dockerfile
│   └── service.yaml
├── api-gateway/
│   └── gateway.yaml
└── docker-compose.yaml
```

---

## 4. Hexagonal (Ports and Adapters)

### Definição
- Domínio no centro
- Portas definem interfaces
- Adapters implementam portas
- Inversão de dependência

### Quando Usar
- Domínio complexo
- Testabilidade importante
- Troca de infraestrutura
- DDD (Domain-Driven Design)

### Vantagens
- Testabilidade alta
- Domínio puro
- Troca de adapters fácil
- Separação clara de responsabilidades

### Desvantagens
- Curva de aprendizado
- Overhead para projetos simples
- Mapeamento pode ser complexo

### Estrutura Típica

```
app/
├── domain/           # Núcleo - regras de negócio
│   ├── entities/
│   ├── services/
│   └── ports/
├── application/      # Casos de uso
│   └── use_cases/
├── adapters/        # Implementações
│   ├── inbound/     # API, CLI
│   └── outbound/   # DB, Cache, API
└── main.py
```

---

## 5. Event-Driven

### Definição
- Comunicação assíncrona por eventos
- Producers emitem eventos
- Consumers reagendem a eventos
- Event Bus ou Message Broker

### Quando Usar
- Sistemas reativos
- Alta escalabilidade
- Integração com serviços externos
- Processamento em background

### Vantagens
- Acoplamento baixo
- Escalabilidade alta
- Resiliência
- Processamento paralelo

### Desvantagens
- Complexidade de debugging
- Ordem de eventos pode variar
- Transações distribuídas
- Overhead de mensagens

### Estrutura Típica

```
app/
├── events/           # Definições de eventos
├── producers/         # Emissores de eventos
├── consumers/        # Receptores de eventos
├── handlers/         # Processadores
├── broker/           # Message broker config
└── main.py
```

---

## 6. CQRS (Command Query Responsibility Segregation)

### Definição
- Separação de comandos (escrita) e queries (leitura)
- Models podem ser diferentes
- Read model pode ser otimizado
- Write model focado em consistência

### Quando Usar
- Performance de leitura importante
- Volumes altos de leitura e escrita
- Relatórios complexos
- Escalabilidade diferenciada

### Vantagens
- Performance otimizada por operação
- Escalabilidade independente
- Modelos puros
- Flexibilidade de storage

### Desvantagens
- Complexidade adicional
- Sincronização entre models
- Consistência eventual
- Overhead de mapping

### Estrutura Típica

```
app/
├── commands/         # Escrita
│   ├── handlers/
│   └── validators/
├── queries/          # Leitura
│   ├── handlers/
│   └── projections/
├── models/
│   ├── write/
│   └── read/
└── synchronizer/
```

---

## 7. Serverless

### Definição
- Funções como serviço
- Escalamento automático
- Pay per use
- Stateless

### Quando Usar
- Cargas variáveis
- Processamento sob demanda
- Integração com cloud
- Cost optimization

### Vantagens
- Custo por uso
- Escalamento automático
- Sem gestão de servidor
- Rápido time-to-market

### Desvantagens
- Cold starts
- Limitações de execução
- Vendor lock-in
- debugging distribuído

### Estrutura Típica

```
functions/
├── user-created/
│   ├── handler.py
│   └── serverless.yml
├── order-processed/
│   ├── handler.py
│   └── serverless.yml
└── serverless.yml
```

---

## 8. SOA (Service-Oriented Architecture)

### Definição
- Serviços como componentes reutilizáveis
- Contratos bem definidos
- Composição de serviços
- Enterprise Service Bus (ESB)

### Quando Usar
- Grandes empresas
- Integração de sistemas legados
- Reutilização em larga escala
- Business processes

### Vantagens
- Reutilização em larga escala
- Integração com sistemas legados
- Governança centralizada
- Business process orchestration

### Desvantagens
- Complexidade do ESB
- Acoplamento ao ESB
- Custo elevado
- Performance do ESB

### Estrutura Típica

```
services/
├── esb/              # Enterprise Service Bus
├── services/         # Serviços
│   ├── user-service/
│   ├���─ payment-service/
│   └── notification-service/
├── orchestrators/    # Orquestração
└── contracts/        # Contratos
```

---

## Comparação Rápida

| Característica | Monolito | Camadas | Micros | Hexagonal | Event-Driven | CQRS | Serverless | SOA |
|----------------|----------|---------|---------|-----------|--------------|------|------------|-----|
| Complexidade | Baixa | Média | Alta | Média | Alta | Média | Média | Alta |
| Escalabilidade | Baixa | Média | Alta | Média | Alta | Alta | Alta | Média |
| Testabilidade | Média | Média | Alta | Alta | Alta | Alta | Alta | Média |
| Deploy | Único | Único | Múltiplo | Único | Múltiplo | Múltiplo | Funções | Centralizado |
| Custo inicial | Baixo | Média | Alto | Média | Médio | Médio | Baixo | Alto |

---

## Quando Escolher Cada

| Situação | Arquitetura Recomendada |
|---------|------------------------|
| MVP rápido | Monolítica |
| Projeto pequeno/médio | Camadas |
| Time grande e distribuído | Microserviços |
| Domínio complexo com DDD | Hexagonal |
| Alta escalabilidade reativa | Event-Driven |
| Performance de leitura crítica | CQRS |
| Cargas variáveis | Serverless |
| Integração empresarial | SOA |