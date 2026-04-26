# Docstring Validation Checklist

Use esta checklist para validar docstrings geradas.

## Estrutura Básica

- [ ] Docstring começa com `"""` na linha após a assinatura
- [ ] Summary line é uma única linha (max 79 chars)
- [ ] Blank line entre summary e descrição detalhada
- [ ] Docstring termina com `"""` em sua própria linha
- [ ] Indentação correta (alinhada com código)

## Summary

- [ ] Resume a finalidade em uma frase concisa
- [ ] Usa verbo no imperativo ou terceira pessoa
- [ ] Não repete o nome da função
- [ ] Não termina com ponto (se for uma linha)

## Args

- [ ] Todos os parâmetros estão documentados
- [ ] Cada arg segue formato: `name (type, required|optional): description`
- [ ] Type está correto ou omitido se desconhecido
- [ ] `required` para parâmetros sem default
- [ ] `optional` para parâmetros com default
- [ ] Indica valor default quando relevant
- [ ] Args ordenados: required primeiro, optional depois

## Returns

- [ ] Se função não retorna nada, usar `Returns:` com `None` ou omitir
- [ ] Tipo de retorno especificado
- [ ] Descrição clara do que é retornado
- [ ] Para generators, usar `Yields:` вместо `Returns:`

## Raises

- [ ] Todas as exceções levantadas estão documentadas
- [ ] Exceções ordenadas do mais comum para o menos comum
- [ ] Condição que dispara a exceção está descrita

## Examples

- [ ] Usam formato doctest (`>>>`)
- [ ] Exemplos são executáveis
- [ ] Saída esperada está correta
- [ ] Inclui caso de uso principal
- [ ] Inclui casos edge quando relevantes
- [ ] Não depende de estado externo

## Estilo

- [ ] Frases completas com pontuação
- [ ] MAIÚSCULA para primeiras letras (como frases)
- [ ] Descrições concisas mas informativas
- [ ] Sem repetição desnecessária
- [ ] Blank lines separam parágrafos

---

## Quick Check

```bash
# Testar docstrings com doctest
python -m doctest -v mymodule.py
```

## Erros Comuns

| Erro | Correção |
|------|----------|
| Summary muito longa | Reduzir para uma linha |
| Args faltando | Adicionar todos os parâmetros |
| Tipo errado | Verificar type hints ou inferir |
| Example quebrado | Testar executando |
| Raises incompleto | Verificar todos `raise` statements |
| Returns omitido | Adicionar se retorna algo |