# Skill: Avaliação de Qualidade de Texto

## Descrição

A skill de Avaliação de Qualidade de Texto é responsável por analisar e pontuar a qualidade geral de um texto com base em critérios linguísticos, estruturais e semânticos.

Ela fornece uma avaliação objetiva que pode ser usada para validação, melhoria ou comparação entre textos.

---

## Entradas

* texto (string): Texto a ser avaliado.
* contexto (string, opcional): Finalidade do texto (ex: email, conversa, texto criativo).
* criterios (list, opcional): Critérios específicos a serem priorizados.
* modo (string, opcional):

  * "basico" → avaliação geral simples
  * "detalhado" → análise por critérios
  * "critico" → avaliação rigorosa com sugestões

---

## Saídas

* score_geral (float): Nota geral (0 a 1).
* classificacao (string):

  * "excelente"
  * "bom"
  * "regular"
  * "fraco"
* criterios_avaliados (list): Lista com pontuação por critério:
  {
  "criterio": string,
  "score": float,
  "comentario": string
  }
* problemas (list): Principais falhas identificadas.
* sugestoes (list): Recomendações de melhoria.

---

## Critérios de Avaliação

* Clareza → facilidade de compreensão
* Coerência → lógica e consistência interna
* Coesão → conexão entre frases
* Gramática → correção linguística
* Ortografia → escrita correta das palavras
* Pontuação → uso adequado de sinais
* Ritmo → fluidez e leitura natural
* Adequação ao contexto → compatibilidade com objetivo
* Impacto → força da mensagem (especialmente criativo)

---

## Regras de Avaliação

1. Avaliar cada critério de forma independente.
2. Calcular o score_geral como média ponderada.
3. Priorizar critérios conforme o contexto:

   * Criativo → impacto + ritmo
   * Formal → clareza + gramática
4. Penalizar erros que afetam entendimento.
5. Não penalizar estilo criativo intencional.
6. Considerar o público-alvo quando possível.

---

## Escala de Classificação

* 0.9 – 1.0 → excelente
* 0.75 – 0.89 → bom
* 0.5 – 0.74 → regular
* 0.0 – 0.49 → fraco

---

## Exemplos

### Exemplo 1 (Bom)

Entrada:
"Eu fui ao mercado e comprei pão."

Saída:

```json id="qa1x82"
{
  "score_geral": 0.85,
  "classificacao": "bom",
  "criterios_avaliados": [
    { "criterio": "clareza", "score": 0.9, "comentario": "Texto claro e direto" },
    { "criterio": "gramática", "score": 0.9, "comentario": "Sem erros" },
    { "criterio": "impacto", "score": 0.6, "comentario": "Pouco expressivo" }
  ],
  "problemas": ["baixo impacto"],
  "sugestoes": ["Adicionar mais detalhes ou emoção"]
}
```

---

### Exemplo 2 (Regular)

Entrada:
"eu fui mercado comprei pão tava bom"

Saída:

```json id="qa2p73"
{
  "score_geral": 0.6,
  "classificacao": "regular",
  "criterios_avaliados": [
    { "criterio": "clareza", "score": 0.7, "comentario": "Entendível, mas confuso" },
    { "criterio": "gramática", "score": 0.5, "comentario": "Erros de estrutura" },
    { "criterio": "pontuação", "score": 0.4, "comentario": "Ausência de pontuação" }
  ],
  "problemas": [
    "falta de pontuação",
    "estrutura fraca"
  ],
  "sugestoes": [
    "Corrigir gramática",
    "Adicionar pontuação"
  ]
}
```

---

### Exemplo 3 (Excelente - Criativo)

Entrada:
"O tempo não passa — ele nos coleciona."

Saída:

```json id="qa3k44"
{
  "score_geral": 0.95,
  "classificacao": "excelente",
  "criterios_avaliados": [
    { "criterio": "impacto", "score": 0.98, "comentario": "Frase forte e memorável" },
    { "criterio": "coerência", "score": 0.9, "comentario": "Ideia consistente" },
    { "criterio": "ritmo", "score": 0.95, "comentario": "Boa cadência" }
  ],
  "problemas": [],
  "sugestoes": []
}
```

---

## Observações

* Qualidade depende do contexto e objetivo do texto.
* Nem todo texto precisa de alto impacto (ex: textos informativos).
* A avaliação deve ser consistente entre diferentes textos.

---

## Instruções para o modelo

* Avalie de forma objetiva e consistente.
* Evite julgamentos subjetivos sem justificativa.
* Explique sempre os motivos das notas.
* Priorize utilidade das sugestões.
* Diferencie erro de escolha estilística.
