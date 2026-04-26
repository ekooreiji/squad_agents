# Template de Card Sorting

Template para conduzir sessões de card sorting.

---

## O que é Card Sorting

Método onde participantes organizam cartões com nomes de conteúdo em categorias que fazem sentido para eles.

---

## Preparação

### Criar Cartões

```
[Cartão 1: Nome do conteúdo]
[Cartão 2: Nome do conteúdo]
[Cartão 3: Nome do conteúdo]
...
```

### Definir Categorias (se fechado)

```
[Categoria 1]
[Categoria 2]
[Categoria 3]
```

---

## Template de Sessão

```markdown
# Card Sorting: [Nome do Projeto]

## Informações

| Campo | Valor |
|-------|-------|
| Data | [Data] |
| Tipo | [Aberto / Fechado] |
| Participante | [ID/Perfil] |
| Duração | [min] |

## Instruções

> "Você vai ver cartões com nomes de funcionalidades/páginas. 
> Sua tarea é organizar em grupos que fazem sentido para você.
> Não há resposta certa ou errada."

## Resultado

### Grupos Criados

| Grupo | Cartões |
|------|--------|
| [Nome 1] | [Cartão 1], [Cartão 2] |
| [Nome 2] | [Cartão 3], [Cartão 4] |

### Observações

- [Observação 1]
- [Observação 2]

---

## Análise

### Matriz de Similaridade

```
         │ Cart1 Cart2 Cart3 Cart4
────────────────────────────────
Cart1    │  1    0.8   0.2   0.1
Cart2    │  0.8   1    0.3   0.1
Cart3    │  0.2  0.3    1    0.7
Cart4    │  0.1  0.1   0.7    1
```

### Dendrograma

```
        ┌───────
        │  ┌──
    ┌──┴──┤  ┌──
    │     │  │  ┌┴─┐
Cart1 Cart2  Cart3 Cart4
```

---

## Métricas

| Métrica | Descrição |
|--------|----------|
| Acordo | % participantes que colocam mesmo par no mesmo grupo |
| Tempo | Tempo médio por sessão |
|-iterações | Mudanças durante grouping |

---

## Boas Práticas

- 10-15 cartões no máximo
- Usar nome realistico
- Registrar observações
- Ter segundo observador

---

## Ferramentas

- Optimal Workshop
- UserTesting
- Maze