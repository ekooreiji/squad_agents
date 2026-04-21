# Skill: Escrita Criativa

## Descrição

A skill de Escrita Criativa é responsável por gerar, reescrever ou aprimorar textos com foco em criatividade, estilo e expressão artística.

Ela pode adaptar o tom, o ritmo e a estética do texto de acordo com o objetivo do usuário, mantendo coerência e impacto emocional.

---

## Entradas

* texto_base (string, opcional): Texto inicial a ser expandido ou melhorado.
* tema (string, opcional): Tema central do texto (ex: amor, solidão, guerra).
* estilo (string, opcional): Estilo desejado (ex: poético, narrativo, sombrio, romântico).
* tom (string, opcional): Tom emocional (ex: triste, intenso, leve, melancólico).
* formato (string, opcional):

  * "poesia"
  * "letra_musica"
  * "historia_curta"
  * "monologo"
* idioma (string, opcional): Idioma de saída.
* nivel_criatividade (float, opcional): Grau de liberdade criativa (0 a 1).

---

## Saídas

* texto_gerado (string): Texto final criado ou adaptado.
* elementos_criativos (list): Recursos utilizados (metáforas, contraste, repetição, etc).
* observacoes (string): Explicação opcional sobre escolhas criativas.

---

## Capacidades

* Expandir ideias simples em textos elaborados
* Reescrever textos com mais impacto emocional
* Criar metáforas e simbolismos
* Ajustar ritmo e fluidez
* Adaptar estilo para diferentes formatos
* Gerar variações do mesmo texto

---

## Regras de Geração

1. Preservar a intenção original do texto_base (quando fornecido).
2. Adaptar o estilo conforme os parâmetros definidos.
3. Usar recursos literários de forma intencional:

   * metáforas
   * repetição
   * contraste
   * imagens sensoriais
4. Evitar clichês sempre que possível.
5. Manter coerência interna do texto.
6. Ajustar linguagem ao formato (poesia ≠ narrativa).
7. No nível alto de criatividade, permitir abstração e experimentalismo.

---

## Exemplos

### Exemplo 1 (Letra de Música)

Entrada:
tema: "coração partido"
estilo: "poético"
tom: "melancólico"
formato: "letra_musica"

Saída:

```json id="c1k82m"
{
  "texto_gerado": "Meu peito ecoa teu nome em ruínas,\ncomo um piano esquecido na chuva...\nCada nota é um adeus que não termina.",
  "elementos_criativos": ["metáfora", "imagem sensorial", "melancolia"],
  "observacoes": "Uso de metáforas musicais para reforçar emoção."
}
```

---

### Exemplo 2 (Reescrita)

Entrada:
texto_base: "I feel sad and alone"
estilo: "sombrio"

Saída:

```json id="c2p91x"
{
  "texto_gerado": "A solidão me envolve como uma sombra silenciosa, e a tristeza sussurra onde ninguém mais escuta.",
  "elementos_criativos": ["personificação", "metáfora"],
  "observacoes": "Transformação de frase simples em linguagem mais evocativa."
}
```

---

### Exemplo 3 (Alta Criatividade)

Entrada:
tema: "tempo"
nivel_criatividade: 0.9

Saída:

```json id="c3z44q"
{
  "texto_gerado": "O tempo não passa — ele nos coleciona.\nSomos lembranças que ele decide não esquecer.",
  "elementos_criativos": ["inversão conceitual", "filosófico"],
  "observacoes": "Uso de inversão para gerar impacto reflexivo."
}
```

---

## Observações

* Pode gerar múltiplas variações para o mesmo input.
* Deve equilibrar criatividade com clareza.
* Em textos musicais, considerar ritmo e repetição.
* Respeitar o idioma e contexto cultural.

---

## Instruções para o modelo

* Pense além do literal.
* Priorize impacto emocional e originalidade.
* Evite frases genéricas ou previsíveis.
* Use imagens mentais fortes.
* Adapte o nível de complexidade ao pedido.
* Quando possível, surpreenda o leitor.
