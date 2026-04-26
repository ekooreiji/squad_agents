# Templates by Type

Análise de stakeholders adaptada para diferentes tipos de feature ou mudança.

---

## Nova Feature

### Características
- Nova funcionalidade para usuários
- Requer aprendizado
- Potencialmente alto impacto

### Stakeholders Típicos

| Stakeholder | Tipo | Impacto | Magnitude |
|-------------|------|---------|---------|
| Usuário final | Externo | Positivo | Alto |
| Produto | Interno | Positivo | Médio |
| Engenharia | Interno | Positivo | Médio |
| Design | Interno | Positivo | Médio |
| QA | Interno | Neutro | Médio |
| Suporte | Interno | Negativo | Médio |
| Marketing | Interno | Positivo | Baixo |

### Checklist Específico
- [ ] Documentação do produto atualizada
- [ ] Treinamento de suporte realizado
- [ ] Materiais de marketing prontos
- [ ]faq criada

---

## Mudança Crítica

### Características
- Altera comportamento existente
- Quebra compatibilidade ou fluxo
- Alto impacto negativo potencial

### Stakeholders Típicos

| Stakeholder | Tipo | Impacto | Magnitude |
|-------------|------|---------|---------|
| Usuários existentes | Externo | Negativo | Alto |
| Suporte | Interno | Negativo | Alto |
| Vendas | Interno | Negativo | Alto |
| Legal | Interno | Neutro | Médio |

### Checklist Específico
- [ ] Migration path documentada
- [ ] Comunicação com antecedência
- [ ] Suporte extra disponível
- [ ] Monitoramento de churn

---

## Descontinuação (Deprecation)

### Características
- Remoção de feature
- Impacto em usuários existentes
- Requer substituição ou alternativa

### Stakeholders Típicos

| Stakeholder | Tipo | Impacto | Magnitude |
|-------------|------|---------|---------|
| Usuários da feature | Externo | Negativo | Alto |
| Suporte | Interno | Negativo | Médio |
| Legal | Interno | Positivo | Baixo |

### Checklist Específico
- [ ] Alternativas oferecidas
- [ ] Timeline de deprecação
- [ ] Suporte para migração
- [ ] Política de dados (deletion ou export)

---

## Mudança de Processo Interno

### Características
- Altera workflow interno
- Não afeta usuários diretamente

### Stakeholders Típicos

| Stakeholder | Tipo | Impacto | Magnitude |
|-------------|------|---------|---------|
| Time afetado | Interno | Negativo | Médio |
| Liderança | Interno | Neutro | Baixo |
| RH | Interno | Neutro | Baixo |

### Checklist Específico
- [ ] Treinamento realizado
- [ ] Documentação atualizada
- [ ] Feedback loop estabelecido

---

## Feature B2B (Enterprise)

### Características
- Afeta contas corporativas
- Requer comunicação diferenciada
- potentially contractual

### Stakeholders Típicos

| Stakeholder | Tipo | Impacto | Magnitude |
|-------------|------|---------|---------|
| Admin do cliente | Externo | Positivo | Alto |
| Usuários do cliente | Externo | Positivo | Médio |
| CSM | Interno | Neutro | Médio |
| Legal (cliente) | Externo | Neutro | Alto |

### Checklist Específico
- [ ] Comunicação via CSM
- [ ] Release notes enterprise
- [ ] Contract review se necessário
- [ ] Treinamento para admins

---

## Mudança de Pricing

### Características
- Altera custo para clientes
- Sensível para vendas
- Requer alinhamento

### Stakeholders Típicos

| Stakeholder | Tipo | Impacto | Magnitude |
|-------------|------|---------|---------|
| Clientes | Externo | Negativo | Alto |
| Vendas | Interno | Negativo | Alto |
| Financeiro | Interno | Positivo | Alto |
| Legal | Interno | Neutro | Médio |

### Checklist Específico
- [ ] Modelagem financeira
- [ ] Comunicação para clientes
- [ ] Scripts para vendas
- [ ] Legal review

---

## Mudança de Compliance/Legal

### Características
- Requisito regulatório
- Não opcional
- Penalidades se não cumprir

### Stakeholders Típicos

| Stakeholder | Tipo | Impacto | Magnitude |
|-------------|------|---------|---------|
| Compliance | Interno | Positivo | Alto |
| Legal | Interno | Positivo | Alto |
| Usuários | Externo | Neutro | Baixo |
| Reguladores | Externo | Positivo | Alto |

### Checklist Específico
- [ ] Legal review
- [ ] Documentação required
- [ ] Comunicação de privacy/external
- [ ] auditoria setup

---

## Integração/Parceria

### Características
- Novos parceiros
- Integração técnica
- Novos termos

### Stakeholders Típicos

| Stakeholder | Tipo | Impacto | Magnitude |
|-------------|------|---------|---------|
| Parceiro | Externo | Positivo | Alto |
| Engenharia | Interno | Negativo | Médio |
| Legal | Interno | Neutro | Alto |
| Suporte | Interno | Neutro | Baixo |

### Checklist Específico
- [ ] NDA
- [ ] Terms reviewed
- [ ] Technical specs
- [ ] Processos de suporte

---

## Resumo por Tipo

| Tipo de Mudança | Stakeholders Principais | Foco Principal |
|--------------|---------------------|--------------|
| Nova Feature | Usuários, Eng, Suporte | Adoption |
| Mudança Crítica | Usuários, Suporte | Migration |
| Deprecation | Usuários da feature | Alternativas |
| Processo | Time interno | Treinamento |
| B2B Enterprise | Admins, CSM | Comunicação |
| Pricing | Clientes, Vendas | Value |
| Compliance | Legal, Reguladores | Conformidade |
| Parceria | Parceiro, Legal | Termos |