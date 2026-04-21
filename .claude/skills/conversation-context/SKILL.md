---
name: conversation-context
description: Conversação com correção imediata após cada resposta do usuário
---

# Conversation Context

Modo de conversação onde o agente faz perguntas e corrige imediatamente após cada resposta.

## Fluxo

1. Agente faz pergunta em japonês
2. Usuário responde em japonês
3. SE INCORRETO → Corrige IMEDIATAMENTE (não espera input adicional)
4. Agente continua o diálogo com a correção aplicada
5. Repete até o usuário acertar OU indicar que entendeu a correção

## Como Corrigir

Quando o usuário comete um erro:

```
Sua resposta: [resposta incorreta do usuário]
Correção: [resposta correta]
 объяснение: [explicação breve da correção, se necessário]
```

Após corrigir, continue a conversa usando a resposta correta, não asking esperar input adicional.

## Exemplos

### Correct
```
Você: 私は学生です。 (Incorreto - "sou estudante")
Correção: 私は学生です。✓ [Masculino]
Explicação: "学生" (がくせい) significa "estudante", mas você quis dizer que "sou"? 
Então seria 「私は学生です。」 ou 「学生です。」

Você: はい学生です。 [continuando a conversa]
```

### Correção com Contexto
```
Você: 昨日遊びに行きました。 (Incorreto)
Correção: 昨日遊びに行きました。✓ 
Observação: Para "ir brincar/brincar" no sentido de lazer, também pode usar 「遊ぶ(あそぶ)」

Você: 昨日友達と遊ぶに行きました。 [continuando]
```

## Níveis

- N5: Frases simples, hiragana
- N4: Gramática intermédia
- N3: Expressões naturais

## Temas

- Restaurante
- Loja
- Trem
- Hotel
- Apresentação
- Telefone
- Animes
- Música
- Manga
- Tokusatsu
- Festivais
- Templos
- Cultura
- Empresa

## Boas Práticas

- Sempre confirmar quando o usuário acertar (✓)
- Explicar brevemente o erro se for educativo
- Não esperar - continuar imediatamente após a correção
- Manter o diálogo natural e fluindo