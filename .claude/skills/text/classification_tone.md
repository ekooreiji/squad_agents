# Tone Classification Skill

---

## 1. Visão Geral

A Tone Classification Skill é responsável por identificar o tom predominante de um texto, com base em padrões linguísticos, palavras-chave e estrutura textual.

Esta skill é utilizada principalmente pelo Agente de Análise, podendo também auxiliar o Agente de Estilo.

---

## 2. Função

* Detectar o tom principal do texto
* Identificar tom secundário (quando aplicável)
* Calcular nível de confiança da classificação

---

## 3. Esquema de Entrada

```json
{
  "texto": "string"
}
```

---

## 4. Esquema de Saída

```json
{
  "tom_detectado": {
    "principal": "emocional | formal | informal | neutro | agressivo",
    "secundario": "string | null",
    "confianca": "float (0-1)"
  }
}
```

---

## 5. Regras de Comportamento

### Ações Proibidas

* NÃO modificar o texto
* NÃO inferir contexto externo ao texto
* NÃO adicionar interpretações não suportadas

---

### Comportamentos Obrigatórios

* Sempre retornar um tom principal
* Usar apenas evidências presentes no texto
* Manter consistência entre tom e confiança
* Retornar `neutro` caso não haja sinal claro

---

## 6. Lógica de Processamento (Heurística)

### Normalização

* Converter texto para minúsculas
* Remover espaços extras

---

### Detecção de Tom

#### Emocional

* Palavras-chave:
  "amor", "coração", "miss", "bonito", "sentir"
* Uso de exclamações
* Linguagem afetiva

---

#### Formal

* Palavras-chave:
  "por favor", "atenciosamente", "sinceramente"
* Estrutura mais completa e polida

---

#### Informal

* Palavras-chave:
  "bro", "mano", "lol", "eai"
* Uso de contrações ou linguagem casual

---

#### Agressivo

* Palavras-chave:
  "odio", "estupido", "idiota"
* Linguagem ofensiva ou direta demais

---

#### Neutro

* Ausência de sinais fortes dos outros tons

---

## 7. Cálculo de Confiança

* Baseado na quantidade de sinais detectados
* Mais ocorrências → maior confiança

Exemplo:

* 1 sinal → 0.3
* 2 sinais → 0.6
* 3+ sinais → até 1.0

---

## 8. Regras de Prioridade

Caso múltiplos tons sejam detectados:

1. Agressivo
2. Emocional
3. Formal
4. Informal
5. Neutro

* O tom com maior peso é definido como principal
* O segundo mais forte pode ser retornado como secundário

---

## 9. Exemplo

### Entrada

```json
{
  "texto": "Eu realmente amo você, você é bonita"
}
```

---

### Saída

```json
{
  "tom_detectado": {
    "principal": "emocional",
    "secundario": null,
    "confianca": 0.9
  }
}
```

---

## 10. Integração

Esta skill deve ser utilizada por:

* Agente de Análise (obrigatório)
* Agente de Estilo (opcional para ajuste fino)

---

## 11. Possíveis Expansões

* Detecção de intensidade emocional
* Identificação de ironia ou sarcasmo
* Classificação multi-label mais avançada

---

## 12. Versionamento

* Versão: 1.0
* Última atualização: 2026-04-20
