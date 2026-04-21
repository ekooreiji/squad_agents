# Skill: Ajuste de Ritmo do Texto

## Descrição

A skill de Ajuste de Ritmo do Texto é responsável por melhorar a fluidez, cadência e dinâmica de um texto.

Ela atua reorganizando pausas, comprimento de frases e padrões de repetição, tornando a leitura mais natural, envolvente ou impactante, sem alterar o significado original.

---

## Entradas

* texto (string): Texto a ser ajustado.
* estilo_ritmo (string, opcional):

  * "fluido" → leitura suave e contínua
  * "quebrado" → frases curtas e impactantes
  * "poetico" → cadência rítmica e estética
  * "narrativo" → ritmo equilibrado
* intensidade (float, opcional): Grau de alteração (0 a 1).
* formato (string, opcional): Tipo de texto (ex: prosa, poesia, letra_musica).

---

## Saídas

* texto_ajustado (string): Texto com ritmo aprimorado.
* alteracoes (list): Principais mudanças realizadas.
* padroes_ritmicos (list): Elementos usados (repetição, pausas, variação, etc).
* observacoes (string): Explicação opcional das escolhas.

---

## Elementos de Ritmo Trabalhados

* Comprimento das frases (curtas vs longas)
* Uso de pausas (vírgulas, pontos, quebras de linha)
* Repetição de palavras ou estruturas
* Paralelismo
* Contraste entre frases
* Cadência sonora (especialmente em textos criativos)

---

## Regras de Ajuste

1. Preservar o significado original do texto.
2. Ajustar o tamanho das frases conforme o estilo_ritmo.
3. Inserir ou remover pausas para melhorar a leitura.
4. Usar repetição de forma intencional para criar ritmo.
5. Evitar monotonia (frases com mesmo tamanho sempre).
6. No modo "quebrado", priorizar impacto.
7. No modo "fluido", priorizar continuidade.
8. Em textos criativos, considerar sonoridade e musicalidade.

---

## Estratégias de Transformação

* Dividir frases longas em partes menores
* Unir frases curtas para suavizar leitura
* Inserir pausas estratégicas
* Repetir estruturas para criar padrão
* Alternar entre frases curtas e longas
* Usar quebras de linha (especialmente em poesia/letras)

---

## Exemplos

### Exemplo 1 (Ritmo Fluido)

Entrada:
"eu fui ao mercado estava chovendo eu voltei rápido"

Saída:

```json
{
  "texto_ajustado": "Eu fui ao mercado. Estava chovendo, então voltei rápido.",
  "alteracoes": [
    "divisão de frase",
    "adição de pausa",
    "melhoria de fluxo"
  ],
  "padroes_ritmicos": ["variação de frase", "pausa controlada"],
  "observacoes": "Fluxo mais natural e fácil de ler."
}
```

---

### Exemplo 2 (Ritmo Quebrado)

Entrada:
"eu tentei continuar mas não consegui esquecer"

Saída:

```json
{
  "texto_ajustado": "Eu tentei continuar.\nMas não consegui.\nEsquecer.",
  "alteracoes": [
    "quebra em frases curtas",
    "uso de pausas fortes"
  ],
  "padroes_ritmicos": ["fragmentação", "impacto"],
  "observacoes": "Ritmo mais intenso e emocional."
}
```

---

### Exemplo 3 (Poético)

Entrada:
"o tempo passa e eu continuo aqui"

Saída:

```json
{
  "texto_ajustado": "O tempo passa —\ne eu continuo aqui,\nparado entre segundos que não voltam.",
  "alteracoes": [
    "adição de pausa poética",
    "expansão rítmica"
  ],
  "padroes_ritmicos": ["quebra de linha", "cadência"],
  "observacoes": "Ritmo voltado para estética e emoção."
}
```

---

## Observações

* Ritmo pode mudar completamente a percepção do texto.
* Diferentes estilos exigem diferentes padrões rítmicos.
* Pode haver múltiplas versões válidas para o mesmo texto.
* Funciona melhor após correção gramatical e pontuação.

---

## Instruções para o modelo

* Leia o texto como se fosse falado em voz alta.
* Ajuste pausas para melhorar compreensão e impacto.
* Evite padrões repetitivos involuntários.
* Use ritmo para reforçar emoção.
* Equilibre fluidez e expressividade.
