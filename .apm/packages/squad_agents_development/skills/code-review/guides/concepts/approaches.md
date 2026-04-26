# Abordagens de Code Review

## Tipos de Abordagens

### 1. Pair Programming

```
┌────────────────────────────────────────────────────────┐
│  Pair Programming                                    │
├────────────────────────────────────────────────────────┤
│  Navigator ──────────── Driver                        │
│  (observando)         (escrevendo)                   │
│                                                      │
│  - Em tempo real                                     │
│  - Múdnuo                                           │
│  - Alto custo                                       │
└────────────────────────────────────────────────────────┘
```

**Vantagens:**
- Feedback imediato
- Resolução de problemas em tempo real
- Alta qualidade

**Desvantagens:**
- Alto custo (2 desenvolvedores)
- Não escala bem
- Requer boa comunicação

### 2. Async Code Review (Mais comum)

```
┌────────────────────────────────────────────────────────┐
│  Async Review                                        │
├────────────────────────────────────────────────────────┤
│  Autor ─────► PR ─────► Revisor ─────► Feedback     │
│                                                      │
│  - Flexível                                         │
│  - Documentado                                      │
│  - Escalável                                        │
└────────────────────────────────────────────────────────┘
```

**Vantagens:**
- Flexibilidade de tempo
- Documentação no PR
- Múltiplos revisores
- Pode ser demorado

**Desvantagens:**
- Pode atrasar
- Requer follow-up

### 3. Tool-Assisted

```
┌────────────────────────────────────────────────────────┐
│  Tool-Assisted                                        │
├────────────────────────────────────────────────────────┤
│  Linter ────── CI ────── Automated Review            │
│                                                      │
│  - Automático                                        │
│  - Consistentes                                     │
│  - Primeira linha de defense                         │
└────────────────────────────────────────────────────────┘
```

**Vantagens:**
- Rápido
- Consistênte
- Não requer esforço humano para checks simples

**Desvantagens:**
- Não pega lógica/business logic
- Gera false positives

## Abordagem Híbrida (Recomendada)

```
┌───────────────────────────────────��────────────────────┐
│  Abordagem Híbrida                                   │
├────────────────────────────────────────────────────────┤
│  1. Tool-assisted (linter, tests)                  │
│  2. Self-review                                     │
│  3. Async review por pares                         │
│  4.Pair review para código crítico                 │
└────────────────────────────────────────────────────────┘
```

## Quando Usar Cada Abordagem

| Cenário | Abordagem Recomendada |
|--------|---------------------|
| Bug simples | Async |
| Feature complexa | Async + Pair |
| Hotfix urgente | Tool + async rápido |
| Refatoração | Pair |
| Primeiro PR | Async múltiplo |
| Código crítico | Híbrida |

## Ferramentas por Abordagem

| Abordagem | Ferramentas |
|----------|------------|
| Pair | VSCode Live Share, Tuple |
| Async | GitHub PR, GitLab MR, Bitbucket |
| Tool | ESLint, Pylint, Prettier, SonarQube |