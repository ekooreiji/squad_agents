# Skill: Análise e Correção Gramatical

## Descrição

A skill de Análise e Correção Gramatical é responsável por identificar, corrigir e explicar erros gramaticais em um texto fornecido pelo usuário.

Ela também pode sugerir melhorias de clareza, fluidez e naturalidade, mantendo o significado original do texto.

---

## Entradas

* texto (string): Texto a ser analisado.
* idioma (string, opcional): Idioma do texto (ex: "pt", "en", "ja").
* modo (string, opcional): Tipo de correção desejada:

  * "basico" → apenas corrigir erros gramaticais
  * "explicativo" → corrigir e explicar os erros
  * "avancado" → corrigir, explicar e sugerir melhorias de estilo

---

## Saídas

* texto_corrigido (string): Versão corrigida do texto.
* alteracoes (list): Lista de alterações realizadas.
* explicacoes (list): Explicações dos erros (se aplicável).
* sugestoes (list): Sugestões de melhoria (opcional).

---

## Tipos de Erros Detectados

* Ortografia (ex: "vc" → "você")
* Concordância verbal (ex: "eles vai" → "eles vão")
* Concordância nominal
* Uso de tempos verbais
* Pontuação
* Uso incorreto de preposições
* Estrutura de frase (ordem das palavras)
* Naturalidade (especialmente em idiomas estrangeiros)

---

## Regras de Correção

1. Preservar o significado original do texto.
2. Corrigir apenas o necessário no modo "basico".
3. No modo "explicativo", detalhar o motivo de cada correção.
4. No modo "avancado", melhorar fluidez e naturalidade.
5. Adaptar o nível da linguagem ao contexto (formal/informal).
6. Em textos criativos (música, poesia), respeitar estilo do autor sempre que possível.

---

## Exemplos

### Exemplo 1 (Básico)

Entrada:
"ele vai no mercado ontem"

Saída:

```json id="g1a83k"
{
  "texto_corrigido": "ele foi ao mercado ontem",
  "alteracoes": [
    "vai → foi",
    "no → ao"
  ],
  "explicacoes": [],
  "sugestoes": []
}
```

---

### Exemplo 2 (Explicativo)

Entrada:
"she go to school every day"

Saída:

```json id="k29dn4"
{
  "texto_corrigido": "she goes to school every day",
  "alteracoes": [
    "go → goes"
  ],
  "explicacoes": [
    "Na terceira pessoa do singular (she), o verbo recebe 's'."
  ],
  "sugestoes": []
}
```

---

### Exemplo 3 (Avançado)

Entrada:
"I look you and you is beautiful"

Saída:

```json id="l8xq72"
{
  "texto_corrigido": "I look at you and you are beautiful",
  "alteracoes": [
    "look you → look at you",
    "is → are"
  ],
  "explicacoes": [
    "O verbo 'look' exige a preposição 'at' nesse contexto.",
    "'You' usa o verbo 'are', não 'is'."
  ],
  "sugestoes": [
    "Uma forma mais natural seria: 'I look at you and see how beautiful you are.'"
  ]
}
```

---

## Observações

* Sempre considerar o contexto antes de corrigir.
* Evitar correções desnecessárias que alterem o estilo do autor.
* Em caso de ambiguidade, oferecer mais de uma sugestão.
* Para idiomas como japonês, considerar níveis de formalidade (polido vs casual).

---

## Instruções para o modelo

* Analise o texto completo antes de corrigir.
* Identifique padrões de erro, não apenas erros isolados.
* Seja claro e didático nas explicações.
* Evite explicações excessivamente técnicas, a menos que solicitado.
* Priorize naturalidade e uso real da língua.
