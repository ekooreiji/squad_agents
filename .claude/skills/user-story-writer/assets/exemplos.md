# 📝 Exemplos — Boas User Stories

Referências de user stories bem estruturadas para inspirar seu trabalho.

---

## Exemplo 1: Autenticação — Login Simples

### ✅ Boa Estrutura

```markdown
# US-001: Realizar login com email e senha

**Status**: Done  

## 📖 User Story

Como **visitante do app**  
Quero **fazer login com email e senha**  
Para **acessar minhas informações pessoais**

---

## ✅ Critérios de Aceitação — BDD

### Cenário 1: Login com credenciais válidas
```
Dado que estou na página de login
E possuo uma conta ativa
Quando informo email e senha corretos
Então sou redirecionado ao dashboard
```

### Cenário 2: Senha incorreta
```
Dado que estou na página de login
Quando informo email correto mas senha incorreta
Então permaneço na página de login
E vejo aviso: "Email ou senha inválidos"
```

## ☑️ Critérios de Aceitação — Checklist

- [ ] Campo de email valida formato
- [ ] Campo de senha mostra/esconde com ícone
- [ ] Botão "Entrar" desativa enquanto processa
- [ ] Exibe spinner durante autenticação
- [ ] Rate limit: máx 5 tentativas/min
```

---

## Exemplo 2: Feature — Adicionar Produto ao Carrinho

```markdown
# US-087: Adicionar produto ao carrinho

**Status**: Ready for Dev  
**Prioridade**: Must Have

## 📖 User Story

Como **comprador**  
Quero **adicionar produtos ao meu carrinho**  
Para **comprar múltiplos itens em uma única compra**

## ✅ Critérios de Aceitação — BDD

### Cenário 1: Adicionar produto com sucesso
```
Dado que estou visualizando um produto
Quando clico em "Adicionar ao Carrinho"
Então o produto é adicionado
E vejo confirmação visual
```

### Cenário 2: Produto sem estoque
```
Dado que um produto está fora de estoque
Quando tento adicionar
Então botão fica desativado
E exibe: "Fora de estoque"
```

## ☑️ Critérios de Aceitação — Checklist

- [ ] Dropdown de quantidade funciona (1 a stock máximo)
- [ ] Preço total recalcula
- [ ] Funciona sem recarregar a página (AJAX)
- [ ] Persiste no localStorage
```

---

## 🎯 Padrões em Boas User Stories

| Aspecto | Bom | Ruim |
|---------|-----|------|
| **Persona** | Específica ("admin", "comprador novo") | Vaga ("usuário") |
| **Ação** | Verbo claro ("adicionar", "criar") | Vago ("fazer") |
| **Cenários** | Fluxo principal + 2-3 exceções | Só fluxo feliz |
| **Critério** | Testável ("campo valida email") | Subjetivo ("funciona bem") |

---

**Parabéns! Suas user stories seguem os padrões de sucesso. ✨**
