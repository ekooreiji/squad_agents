# Skill: Correção de Pontuação

## Descrição

A skill de Correção de Pontuação é responsável por identificar, corrigir e melhorar o uso de sinais de pontuação em um texto.

Ela atua apenas sobre vírgulas, pontos, interrogações, exclamações e outros sinais, sem alterar a ortografia ou a estrutura gramatical além do necessário para corrigir a pontuação.

---

## Entradas

* texto (string): Texto a ser analisado.
* idioma (string, opcional): Idioma do texto (ex: "pt", "en", "ja").
* modo (string, opcional):

  * "basico" → corrige apenas erros claros
  * "explicativo" → corrige e explica as mudanças
  * "avancado" → melhora fluidez e ritmo usando pontuação

---

## Saídas

* texto_corrigido (string): Texto com pontuação corrigida.
* alteracoes (list): Lista de alterações realizadas.
* explicacoes (list): Explicações das correções (se aplicável).
* confianca (float): Grau de confiança das correções (0 a 1).

---

## Tipos de Correções

* Uso de vírgulas
* Ponto final (.)
* Interrogação (?)
* Exclamação (!)
* Dois pontos (:)
* Reticências (...)
* Aspas (" ")
* Separação de frases
* Remoção de pontuação duplicada ou incorreta

---

## Regras de Correção

1. Corrigir apenas a pontuação, sem reescrever frases desnecessariamente.
2. Preservar o significado original do texto.
3. Inserir pontuação ausente quando necessário para clareza.
4. Remover pontuação redundante (ex: "!!!", "??").
5. Ajustar espaçamento correto após pontuação.
6. No modo "avancado", melhorar ritmo e legibilidade do texto.
7. Respeitar estilo do autor em textos criativos sempre que possível.

---

## Exemplos

### Exemplo 1 (Básico)

Entrada:
"oi tudo bem eu fui no mercado"

Saída:

```json id="p1a88c"
{
  "texto_corrigido": "oi, tudo bem? eu fui no mercado.",
  "alteracoes": [
    "inserção de vírgula após 'oi'",
    "adição de '?' em 'tudo bem'",
    "adição de ponto final"
  ],
  "explicacoes": [],
  "confianca": 0.95
}
```

---

### Exemplo 2 (Explicativo)

Entrada:
"como você está eu estou bem"

Saída:

```json id="p2b71d"
{
  "texto_corrigido": "como você está? eu estou bem.",
  "alteracoes": [
    "separação em duas frases",
    "adição de '?'",
    "adição de ponto final"
  ],
  "explicacoes": [
    "Perguntas devem terminar com ponto de interrogação.",
    "Frases independentes devem ser separadas."
  ],
  "confianca": 0.96
}
```

---

### Exemplo 3 (Avançado)

Entrada:
"eu pensei nisso mas nao sei talvez funcione"

Saída:

```json id="p3k52x"
{
  "texto_corrigido": "eu pensei nisso, mas não sei. talvez funcione.",
  "alteracoes": [
    "inserção de vírgula antes de 'mas'",
    "divisão em duas frases",
    "adição de ponto final"
  ],
  "explicacoes": [
    "A conjunção 'mas' geralmente é precedida por vírgula.",
    "Separar ideias melhora a clareza."
  ],
  "confianca": 0.94
}
```

---

## Observações

* Não corrigir ortografia (isso pertence a outra skill).
* Não alterar tempos verbais ou concordância.
* Pode haver múltiplas formas corretas de pontuar a mesma frase.
* Em textos informais, evitar “corrigir demais” (overcorrection).

---

## Instruções para o modelo

* Analise o fluxo da frase antes de aplicar pontuação.
* Use pontuação para melhorar clareza e leitura.
* Evite adicionar sinais desnecessários.
* Seja conservador no modo "basico".
* Seja mais expressivo no modo "avancado".
