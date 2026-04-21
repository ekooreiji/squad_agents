# Skill: Correção Ortográfica

## Descrição

A skill de Correção Ortográfica é responsável por identificar e corrigir erros de escrita em um texto, como palavras digitadas incorretamente, acentuação e uso de maiúsculas.

Ela não altera a estrutura gramatical da frase, focando exclusivamente na forma correta das palavras.

---

## Entradas

* texto (string): Texto a ser analisado.
* idioma (string, opcional): Idioma do texto (ex: "pt", "en", "ja").

---

## Saídas

* texto_corrigido (string): Texto com ortografia corrigida.
* erros_encontrados (list): Lista de palavras corrigidas.
* correcoes (list): Lista de correções realizadas no formato:
  { "original": string, "corrigido": string }
* confianca (float): Grau de confiança geral das correções (0 a 1).

---

## Tipos de Erros Detectados

* Palavras digitadas incorretamente (ex: "caza" → "casa")
* Falta ou erro de acentuação (ex: "voce" → "você")
* Uso incorreto de maiúsculas/minúsculas
* Erros comuns de digitação (ex: "teh" → "the")
* Palavras inexistentes no idioma

---

## Regras de Correção

1. Corrigir apenas erros ortográficos, sem alterar a gramática.
2. Preservar o significado original do texto.
3. Não modificar gírias, nomes próprios ou termos técnicos válidos.
4. Em caso de ambiguidade, sugerir múltiplas correções.
5. Respeitar o idioma informado.
6. Manter a pontuação original (exceto quando claramente incorreta por erro de digitação).

---

## Exemplos

### Exemplo 1

Entrada:
"Eu vou para a caza agora"

Saída:

```json id="o12as9"
{
  "texto_corrigido": "Eu vou para a casa agora",
  "erros_encontrados": ["caza"],
  "correcoes": [
    { "original": "caza", "corrigido": "casa" }
  ],
  "confianca": 0.98
}
```

---

### Exemplo 2

Entrada:
"voce nao sabe oque esta fazeno"

Saída:

```json id="p98xk2"
{
  "texto_corrigido": "você não sabe o que está fazendo",
  "erros_encontrados": ["voce", "nao", "oque", "esta", "fazeno"],
  "correcoes": [
    { "original": "voce", "corrigido": "você" },
    { "original": "nao", "corrigido": "não" },
    { "original": "oque", "corrigido": "o que" },
    { "original": "esta", "corrigido": "está" },
    { "original": "fazeno", "corrigido": "fazendo" }
  ],
  "confianca": 0.95
}
```

---

### Exemplo 3

Entrada:
"I hav a dreem"

Saída:

```json id="t7kq41"
{
  "texto_corrigido": "I have a dream",
  "erros_encontrados": ["hav", "dreem"],
  "correcoes": [
    { "original": "hav", "corrigido": "have" },
    { "original": "dreem", "corrigido": "dream" }
  ],
  "confianca": 0.93
}
```

---

## Observações

* Esta skill não corrige concordância, tempo verbal ou estrutura de frases.
* Pode ser combinada com uma skill de gramática para correção completa.
* Deve lidar com textos informais, mas sem forçar normalização excessiva.

---

## Instruções para o modelo

* Analise palavra por palavra dentro do contexto.
* Identifique padrões de erro comuns.
* Evite corrigir palavras corretas apenas por baixa frequência.
* Seja conservador: só corrija quando houver alta confiança.
* Preserve nomes próprios, marcas e termos específicos.
