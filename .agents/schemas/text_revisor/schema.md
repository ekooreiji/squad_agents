# Especificação de Schemas Compartilhados

## 1. Visão Geral

Este documento define os schemas padronizados utilizados pelos agentes do sistema.

Objetivo:

* Garantir consistência entre agentes
* Facilitar integração e manutenção
* Evitar incompatibilidades de estrutura

---

## 2. Convenções Gerais

* Todos os dados devem estar em formato JSON
* Campos obrigatórios devem sempre estar presentes
* Campos opcionais podem ser `null` ou omitidos
* Strings devem ser claras e descritivas
* Valores numéricos devem seguir os intervalos definidos

---

## 3. Schema: Análise (`AnalysisOutput`)

```json id="analysis_schema"
{
  "resumo_geral": "string",

  "tom_detectado": {
    "principal": "string",
    "secundario": "string | null",
    "confianca": "float (0-1)"
  },

  "intencao": "string",

  "formalidade": {
    "nivel": "formal | informal | neutro",
    "adequacao_midia": "string"
  },

  "publico_estimado": "string",

  "linguagem": {
    "complexidade": "simples | intermediario | avancado",
    "clareza": "float (0-10)"
  },

  "problemas": {
    "gramatica": [
      {
        "trecho": "string",
        "descricao": "string"
      }
    ],
    "fluidez": [
      {
        "trecho": "string",
        "descricao": "string"
      }
    ],
    "coerencia": [
      {
        "trecho": "string",
        "descricao": "string"
      }
    ],
    "estilo": [
      {
        "trecho": "string",
        "descricao": "string"
      }
    ]
  },

  "pontos_fortes": ["string"]
}
```

---

## 4. Schema: Entrada do Agente de Revisão (`ReviewInput`)

```json id="review_input_schema"
{
  "texto_original": "string",
  "analise": "AnalysisOutput"
}
```

---

## 5. Schema: Saída do Agente de Revisão (`ReviewOutput`)

```json id="review_output_schema"
{
  "texto_corrigido": "string",

  "alteracoes": [
    {
      "tipo": "gramatica | ortografia | pontuacao | fluidez",
      "trecho_original": "string",
      "trecho_corrigido": "string",
      "descricao": "string"
    }
  ],

  "resumo_alteracoes": "string",

  "nivel_intervencao": "baixo | medio | alto"
}
```

---

## 6. Regras de Compatibilidade

* `ReviewInput.analise` deve ser compatível com `AnalysisOutput`
* Nenhum agente deve alterar a estrutura dos schemas
* Novos campos devem ser adicionados de forma retrocompatível

---

## 7. Versionamento de Schemas

* Versão atual: 1.0
* Alterações devem:

  * Incrementar versão
  * Documentar mudanças
  * Manter compatibilidade quando possível

---

## 8. Boas Práticas

* Validar JSON antes de enviar para outro agente
* Evitar campos desnecessários
* Manter nomes consistentes entre agentes
* Documentar qualquer extensão de schema

---

## 9. Exemplo de Fluxo

```json id="flow_example"
{
  "etapas": [
    "AnalysisOutput gerado",
    "ReviewInput construído com AnalysisOutput",
    "ReviewOutput produzido"
  ]
}
```

---

## 10. Extensibilidade

Futuras expansões podem incluir:

* `StyleOutput`
* `CriticOutput`
* `ScoreMetrics`
* `EmotionAnalysis`

Todos devem seguir este mesmo padrão estrutural.

---
