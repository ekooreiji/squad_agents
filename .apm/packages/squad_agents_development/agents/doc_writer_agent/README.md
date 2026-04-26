# doc_writer_agent (Versão Português)

Agente especializado em criar documentações de projetos de software em português.

---

## Sobre

O **doc_writer_agent** é especializado em criar, organizar e manter documentações técnicas de projetos de software. Esta versão gera toda a documentação em português brasileiro.

---

## Como Usar

1. **Enviar brief** - Descrever o projeto
2. **Agente pergunta** - Para esclarecer requisitos
3. **Agente cria** - Estrutura, documentos, formatação
4. **Revisão** - Ajustes necessários
5. **Entrega** - Arquivos prontos

---

## Ferramentas

| Ferramenta | Prioridade |
|-----------|------------|
| Markdown | Alta |
| MkDocs | Alta |
| GitHub Pages | Média |
| Docusaurus | Média |

---

## Fluxo de Trabalho

```
Briefing → Estrutura → Escrita → Revisão → Entrega
   ↓         ↓          ↓        ↓         ↓
[brief]  [estrutura] [conteúdo] [revisao] [entrega]
```

---

## Skills Integradas

- mkdocs-material
- pep8-reference
- pep8-docstring-generator
- software-architecture
- template-library

---

## Tipos de Documentação Suportados

| Tipo | Descrição |
|------|-----------|
| README | Visão geral do projeto |
| INSTALL | Guia de instalação |
| CONTRIBUTING | Guia de contribuição |
| CHANGELOG | Histórico de mudanças |
| API Documentation | Documentação de APIs |
| ARCHITECTURE | Documentação arquitetural |

---

## Arquivos Criados

```
doc_writer_agent/
├── AGENT.md                  ← Definição do agente
├── INSTRUCTIONS.md         ← Instruções em português
├── prompts/                ← Prompts em português
│   ├── 01-briefing.md
│   ├── 02-structure.md
│   ├── 03-format.md
│   ├── 04-review.md
│   └── 05-delivery.md
└── README.md              ← Leia-me em português
```

---

## Versão Original

Este é uma versão em português. O agente original em inglês está disponível em:
- `doc_writer_agent/agent.md` (inglês)
- `doc_writer_agent/instructions.md` (inglês)

---

## Diferenças da Versão Original

| Aspecto | Original | Português |
|---------|----------|-----------|
| Idioma | Inglês | Português |
| Exemplos | English examples | Exemplos em português |
| Templates | English | Portuguese |
| Referências | Docs anglófonos | Docs em português |

---

## Regras

✓ Criar documentações em português
✓ Usar Markdown como padrão
✓ Aplicar templates quando existentes
✓ Documentar decisões
✓ Manter atualizado

✗ Não criar código
✗ Não desenvolver funcionalidades