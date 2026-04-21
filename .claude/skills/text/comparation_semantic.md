# Skill: Comparação Semântica

## Descrição

A skill de Comparação Semântica é responsável por analisar o grau de similaridade de significado entre dois textos.

Ela avalia se os textos transmitem a mesma ideia, ideias relacionadas ou conteúdos diferentes, independentemente das palavras utilizadas.

---

## Entradas

* texto_a (string): Primeiro texto.
* texto_b (string): Segundo texto.
* nivel_detalhe (string, opcional):

  * "basico" → apenas similaridade geral
  * "explicativo" → inclui análise detalhada
  * "avancado" → inclui diferenças semânticas específicas

---

## Saídas

* similaridade (float): Grau de similaridade semântica (0 a 1).
* classificacao (string):

  * "equivalente" → mesmo significado
  * "similar" → significado próximo
  * "parcial" → compartilham algumas ideias
  * "diferente" → significados distintos
* diferencas (list): Principais diferenças de significado.
* pontos_em_comum (list): Ideias compartilhadas.
* observacoes (string): Explicação opcional.

---

## Critérios de Avaliação

* Intenção do texto
* Ação descrita
* Entidades envolvidas
* Contexto implícito
* Polaridade (positivo/negativo)
* Grau de detalhe

---

## Regras de Comparação

1. Priorizar significado, não palavras exatas.
2. Ignorar variações de estilo ou gramática.
3. Considerar sinônimos e paráfrases.
4. Detectar contradições (ex: "gosto" vs "não gosto").
5. Avaliar se há perda ou adição de informação.
6. Considerar contexto implícito quando relevante.

---

## Escala de Similaridade (referência)

* 0.9 – 1.0 → praticamente iguais
* 0.7 – 0.89 → muito semelhantes
* 0.4 – 0.69 → parcialmente semelhantes
* 0.0 – 0.39 → diferentes

---

## Exemplos

### Exemplo 1 (Equivalente)

Entrada:
texto_a: "Eu estou cansado"
texto_b: "Estou muito cansado"

Saída:

```json id="sm1a82"
{
  "similaridade": 0.95,
  "classificacao": "equivalente",
  "diferencas": ["intensidade levemente maior em 'muito cansado'"],
  "pontos_em_comum": ["estado de cansaço"],
  "observacoes": "Mesma ideia com pequena variação de intensidade."
}
```

---

### Exemplo 2 (Similar)

Entrada:
texto_a: "Vou estudar programação"
texto_b: "Quero aprender a programar"

Saída:

```json id="sm2b73"
{
  "similaridade": 0.82,
  "classificacao": "similar",
  "diferencas": ["intenção vs ação futura"],
  "pontos_em_comum": ["aprendizado de programação"],
  "observacoes": "Objetivo semelhante com estrutura diferente."
}
```

---

### Exemplo 3 (Diferente)

Entrada:
texto_a: "Eu gosto de café"
texto_b: "Eu odeio café"

Saída:

```json id="sm3c44"
{
  "similaridade": 0.1,
  "classificacao": "diferente",
  "diferencas": ["opiniões opostas"],
  "pontos_em_comum": ["tema: café"],
  "observacoes": "Significados contraditórios."
}
```

---

## Observações

* Textos podem ser semanticamente iguais mesmo com palavras totalmente diferentes.
* Pequenas diferenças podem mudar completamente o significado.
* A análise deve considerar contexto e intenção.

---

## Instruções para o modelo

* Compare o significado geral antes dos detalhes.
* Identifique intenção e ação principal de cada texto.
* Detecte contradições explícitas e implícitas.
* Seja consistente na atribuição de similaridade.
* Explique diferenças de forma clara e objetiva.
