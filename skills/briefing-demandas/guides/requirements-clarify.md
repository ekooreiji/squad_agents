# Esclarecer Requisitos

Guia para clarificar requisitos ambíguos.

---

## 1. O que são Requisitos Ambíguos

Requisitos ambiguos são aqueles que podem ser interpretados de mais de uma forma.

---

## 2. Tipos de Ambigüidade

### 2.1 Semântica

```
"Quero um design moderno."
→ O que é "moderno"? Minimalista? Tech? Vintage modernizado?
```

### 2.2 Funcional

```
"O sistema deve ser rápido."
→ Rápido para carregar? Para responder? Para processar?
```

### 2.3 Temporal

```
"Precisa estar pronto logo."
→Quanto é "logo"? Dias? Semanas?
```

### 2.4 Escopo

```
"Fazer o site."
→ Apenas homepage? Site completo? Com CMS?
```

---

## 3. Técnicas de Clarificação

### 3.1 Pedir Exemplos

```
"Você pode me mostrar exemplos de algo que você considera moderno?"
"Can you show me a site que you think is fast?"
```

### 3.2 Quantificar

```
"Rápido quanto? 1 segundo? 3 segundos?"
"Quanto é 'logo'? 1 semana? 1 mês?"
```

### 3.3 Definir Escopo

```
"Quando você diz 'site', estamos falando de quantas páginas?"
"Só homepage ou blog também?"
```

---

## 4. Framework de Clarificação

### 4.1 Para Requisitos Visuais

| Pergunta | Objetivo |
|---------|----------|
| Pode mostrar referências? | Definir estética |
| Do que você não gosta? | Definir limites |
| Qual cor representa a marca? | Definir palette |

### 4.2 Para Requisitos Funcionais

| Pergunta | Objetivo |
|---------|----------|
| O que acontece quando...? | Definir comportamento |
| Quantos usuários? | Definir escala |
| Quais formatos? | Definir MIME types |

### 4.3 Para Requisitos Técnicos

| Pergunta | Objetivo |
|---------|----------|
| Quais navegadores? | Definir support |
| Quais dispositivos? | Definir breakpoints |
| Quais integrações? | Definir APIs |

---

## 5. Palavras-Chave de Alerta

### 5.1 Subjectivas

| Palavra | Problema |
|---------|---------|
| moderno | Sem definição |
| profissional | Subjetivo |
| clean | Ambíguo |
| intuitivo | Depende do usuário |

### 5.2 Temporais

| Palavra | Problema |
|---------|---------|
| rápido | Sem métrica |
| logo | Vago |
| eventual | Indefinido |

### 5.3 Quantitativas sem Número

| Palavra | Problema |
|---------|---------|
| many | Quantos? |
| large | Qual tamanho? |
| scalable | Quanto?

---

## 6. Processo de Clarificação

### 6.1 Passo a Passo

1. Identificar ambiguidade
2. Categorizar tipo
3. Aplicar técnica
4. Registrar definição
5. Validar com cliente

### 6.2 Exemplo

```
Cliente: "Quero um site rápido."

1. Identificar: "rápido" é Subjectivo
2. Perguntar: "Rápido para carregar ou interagir?"
3. Resposta: "Para carregar a homepage"
4. Quantificar: "Em quanto tempo?"
5. Definir: "Em até 3 segundos em 4G"
```

---

## 7. Documentação

### 7.1 Formato

| Requisito Ambíguo | Clarificação | Definição |
|-------------------|---------------|-----------|
| Design moderno | Mostrar referências | Estilo minimal, cores neutras |
| Site rápido | Tempo de carregamento | < 3s em 4G |

### 7.2 Validação

- Cliente aprova definição
- Registrar por escrito
- Incluir no briefing

---

## Cross-refs

- [questions-framework.md](questions-framework.md) - Framework de perguntas
- [client-needs.md](client-needs.md) - Necessidades
- [specification.md](specification.md) - Especificação