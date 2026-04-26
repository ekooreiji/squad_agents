# Interaction Design

Guia para design de interação, focando em como usuários se comunicam com produtos digitais.

---

## Princípios Fundamentais

### 1. Affordance
Indicação visual de como usar algo.

| Affordance | Exemplo |
|------------|---------|
| Button | Aparência clicável |
| Link | Texto azul/sublinhado |
| Input | Campo com borda |

### 2. Feedback
Resposta imediata a cada ação.

| Ação | Feedback |
|------|----------|
| Clicar | Estado :active |
| Carregando | Spinner/progress |
| Sucesso | Mensagem verde |
| Erro | Mensagem vermelha |

### 3. Constraints
Limitações que guiam ação.

- **Físicas**: Desabilitar opção inválida
- **Lógicas**: Mostrar só opções válidas
- **Culturais**: Padrões culturais

### 4. Consistency

- **Interna**: Mesmo componente, mesmo comportamento
- **Externa**: Seguir conventions do SO/plataformas

---

## Padrões de Interação

### Navigation

| Pattern | Quando Usar |
|---------|-------------|
| Tab bar | Categorias no mesmo nível |
| Hamburger menu | Muitas opções |
| Breadcrumb | Hierarquia profunda |
| Sidebar | Navegação secundária |

### Input

| Pattern | Quando Usar |
|---------|-------------|
| Form inline | Poucos campos |
| Form em steps | Muitos campos |
| Auto-complete | Muitas opções |
| Slider | Range contínuo |

### Output

| Pattern | Quando Usar |
|---------|-------------|
| Toast notification | Feedback rápido |
| Modal | Atenção necessária |
| Inline message | Erros específicos |
| Empty state | Sem conteúdo |

---

## Estados de Componentes

### Estados Base

```
┌────────────┐
│  DEFAULT   │──┐
└─────┬──────┘  │
      ▼         │
┌────────────┐  │
│  HOVER     │──┤
└─────┬──────┘  │
      ▼         │
┌────────────┐  │
│  ACTIVE     │──┤
└─────┬──────┘  │
      ▼         │
┌────────────┐  │
│   FOCUS    │──┘
└────────────┘
```

### Estados Adicionais

| Estado | Quando |
|--------|--------|
| Disabled | Não disponível |
| Loading | Processando |
| Error | Falha |
| Success | Completo |
| Selected | Ativo |

---

## Animações

### Princípios

1. **Duração**: 200-500ms para micro-interações
2. **Easing**: ease-out para entrada, ease-in para saída
3. **Consistência**: Mesma animação para mesma ação

### Tipos

| Animação | Uso |
|----------|-----|
| Fade | Transparência |
| Slide | Movimentação |
| Scale | Tamanho |
| Rotate | Rotação |

---

## Boas Práticas

- Resposta em < 100ms
- Feedback visual imediato
- Não bloquear sem motivo
- Animações opcionais
- Respeitar preferências (reduce-motion)

---

## Acessibilidade

- foco visível
- navegável por teclado
- compatível com screen reader
- não depender só de cor

---

## Cross-refs

- [ui-design](../ui-design/SKILL.md) - Implementar componentes
- [usability-testing](../usability-testing.md) - Validar interação