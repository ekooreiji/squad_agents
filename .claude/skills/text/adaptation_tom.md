# Skill: Adaptação de Tom

## Descrição

A skill de Adaptação de Tom é responsável por ajustar o estilo e a tonalidade de um texto, mantendo seu significado original, mas adaptando a forma como a mensagem é expressa.

Ela permite transformar textos entre diferentes níveis de formalidade, emoção e intenção comunicativa.

---

## Entradas

* texto (string): Texto a ser adaptado.
* tom_alvo (string): Tom desejado (ex: formal, informal, amigável, profissional, agressivo, neutro, poético).
* intensidade (float, opcional): Grau de adaptação (0 a 1).
* contexto (string, opcional): Situação de uso (ex: email, conversa, redes sociais, narrativa).
* preservar_emocao (boolean, opcional): Indica se a emoção original deve ser mantida.

---

## Saídas

* texto_adaptado (string): Texto com o tom ajustado.
* mudancas (list): Principais alterações realizadas.
* observacoes (string): Explicação opcional sobre a adaptação.

---

## Tipos de Tom Suportados

* formal → linguagem profissional e estruturada
* informal → linguagem casual e natural
* amigavel → acolhedor e positivo
* profissional → objetivo e claro
* neutro → sem carga emocional
* agressivo → direto e intenso
* poetico → expressivo e artístico
* motivacional → inspirador e energético

---

## Regras de Adaptação

1. Preservar o significado original do texto.
2. Ajustar vocabulário e estrutura conforme o tom_alvo.
3. Adaptar nível de formalidade (contrações, gírias, etc).
4. Controlar intensidade emocional conforme parâmetros.
5. Evitar exageros que distorçam a mensagem.
6. Respeitar o contexto de uso (ex: email ≠ chat).
7. Se preservar_emocao = true, manter sentimento original mesmo com mudança de estilo.

---

## Estratégias de Transformação

* Substituição lexical (ex: "quero" → "gostaria")
* Ajuste de pronomes e tratamento
* Reestruturação de frases
* Adição ou remoção de suavização ("por favor", "talvez")
* Intensificação ou neutralização emocional

---

## Exemplos

### Exemplo 1 (Informal → Formal)

Entrada:
"me manda isso aí rápido"

Saída:

```json id="t1f82k"
{
  "texto_adaptado": "Poderia me enviar isso com rapidez, por favor?",
  "mudancas": [
    "adição de polidez",
    "reestruturação da frase",
    "remoção de informalidade"
  ],
  "observacoes": "Transformação para tom formal e educado."
}
```

---

### Exemplo 2 (Neutro → Amigável)

Entrada:
"vou analisar seu pedido"

Saída:

```json id="t2g91p"
{
  "texto_adaptado": "Vou dar uma olhada no seu pedido com atenção 😊",
  "mudancas": [
    "adição de tom acolhedor",
    "uso de linguagem mais leve"
  ],
  "observacoes": "Ajuste para comunicação mais próxima e amigável."
}
```

---

### Exemplo 3 (Simples → Poético)

Entrada:
"eu sinto sua falta"

Saída:

```json id="t3h44x"
{
  "texto_adaptado": "A sua ausência ecoa em mim como um silêncio que nunca acaba.",
  "mudancas": [
    "uso de metáfora",
    "expansão expressiva"
  ],
  "observacoes": "Transformação para tom poético."
}
```

---

## Observações

* Diferentes tons podem gerar múltiplas versões válidas.
* O equilíbrio entre fidelidade e estilo é essencial.
* Evitar transformar completamente a identidade do texto original.
* Pode ser combinada com a skill de Escrita Criativa para maior expressividade.

---

## Instruções para o modelo

* Identifique o tom original antes de adaptar.
* Ajuste linguagem, ritmo e escolha de palavras.
* Priorize naturalidade no tom alvo.
* Evite mudanças desnecessárias no conteúdo.
* Seja consistente com o estilo escolhido.
