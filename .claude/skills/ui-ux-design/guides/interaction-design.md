# Interaction Design

Guia de design de interação para micro-interações.

---

## 1. O que é Design de Interação

Design de interação define como usuários interagem com a interface.

---

## 2. Princípios

### 2.1 Affordance

| Affordance | Exemplo |
|------------|---------|
| Button | Aparência clicável |
| Link | Texto azul/sublinhado |
| Input | Campo com borda |

### 2.2 Feedback

| Ação | Feedback |
|------|----------|
| Click | Estado :active |
| Carregando | Spinner |
| Sucesso | Mensagem verde |

### 2.3 Constraints

- **Físicas**: Desabilitar opção inválida
- **Lógicas**: Mostrar opções válidas
- **Culturais**: Padrões culturais

---

## 3. Estados de Interação

| Estado | Descrição |
|--------|----------|
| **Default** | Estado normal |
| **Hover** | Mouse sobre |
| **Focus** | selected/ativo |
| **Active** | Clicando/ativo |
| **Disabled** | Indisponível |

---

## 4. Micro-interações

### 4.1 Exemplos

| Micro-interação | Quando |
|-----------------|--------|
| Loading spinner | Processando |
| Pull to refresh | Atualizar |
| Like animation | Feedback positivo |
| Error shake | Feedback negativo |

### 4.2 Boas Práticas

- Resposta em < 100ms
- Feedback visual imediato
- Animações opcionais

---

## Cross-refs

- [prototyping.md](prototyping.md) - Protótipos
- [ux-fundamentals.md](ux-fundamentals.md) - Fundamentos