# Skill: Detecção de Intenção

## Descrição

A skill de Detecção de Intenção é responsável por identificar a principal intenção de um texto fornecido pelo usuário.

Ela classifica o texto em uma das categorias predefinidas, permitindo que outros agentes ou sistemas tomem decisões com base nessa intenção.

---

## Entradas

* texto (string): Texto fornecido pelo usuário.

---

## Saídas

* intencao (string): Intenção principal identificada.
* confianca (float): Grau de confiança da classificação (0 a 1).
* entidades (list): Lista opcional de entidades relevantes encontradas no texto.

---

## Intenções Suportadas

* saudacao → Saudações
* pergunta → Perguntas gerais
* pedido → Pedido ou solicitação
* reclamacao → Reclamação ou insatisfação
* despedida → Despedida
* outro → Caso não se encaixe nas categorias acima

---

## Regras de Classificação

1. Se o texto contém cumprimento (ex: "oi", "olá", "hello"):
   → intencao = saudacao

2. Se o texto contém pergunta explícita (ex: "como", "por que", "?"):
   → intencao = pergunta

3. Se o texto expressa desejo ou pedido (ex: "quero", "pode", "preciso"):
   → intencao = pedido

4. Se o texto expressa insatisfação (ex: "não gostei", "isso é ruim"):
   → intencao = reclamacao

5. Se o texto indica despedida (ex: "tchau", "até mais"):
   → intencao = despedida

6. Caso contrário:
   → intencao = outro

---

## Exemplos

### Exemplo 1

Entrada:
"Oi, tudo bem?"

Saída:

```json
{
  "intencao": "saudacao",
  "confianca": 0.95,
  "entidades": []
}
```

### Exemplo 2

Entrada:
"Você pode me ajudar com um código em Python?"

Saída:

```json
{
  "intencao": "pedido",
  "confianca": 0.92,
  "entidades": ["Python"]
}
```

### Exemplo 3

Entrada:
"Isso não funcionou, estou frustrado"

Saída:

```json
{
  "intencao": "reclamacao",
  "confianca": 0.88,
  "entidades": []
}
```

---

## Observações

* A classificação deve considerar o contexto e não apenas palavras-chave isoladas.
* Em caso de múltiplas intenções, priorizar a intenção principal.
* A confiança deve refletir a clareza do texto.

---

## Instruções para o modelo

* Analise o significado completo da frase.
* Não dependa apenas de palavras-chave.
* Resolva ambiguidades priorizando a intenção principal do usuário.
