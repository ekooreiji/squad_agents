# Accessibility Checklist

## WCAG Compliance Checklist

### Perceptível

#### 1.1 Alternatives de Texto
- [ ] Imagens têm texto alternativo
- [ ] Vídeos têm legendas
- [ ] Áudios têm transcrição

#### 1.2 Mídia baseada em tempo
- [ ] Transmissão de áudio pré-gravada tem alternativa
- [ ] Transmissão ao vivo tem legendas

#### 1.3 Adaptável
- [ ] Conteúdo tem ordem lógica
- [ ] Informações e relacionamentos são programáveis
- [ ] Meaningful sequence

#### 1.4 Distinguível
- [ ] Cor não é único meio de informação
- [ ] Contraste atende WCAG AA
- [ ] Texto pode ser redimensionado

---

### Operável

#### 2.1 Acessível por Teclado
- [ ] Toda funcionalidade disponível por teclado
- [ ] Não há armadilhas de teclado

#### 2.2 Tempo Suficiente
- [ ] Tempo ajustável
- [ ] Pausar, parar, ocultar

#### 2.3 Convulsões
- [ ] Limite de 3 flashes por segundo

#### 2.4 Navegável
- [ ] Skip links disponíveis
- [ ] Títulos em páginas
- [ ] Foco visível
- [ ] Ordem de foco lógica

---

### Compreensível

#### 3.1 Legível
- [ ] Idioma da página definido
- [ ] Idiomas das partes identificados

#### 3.2 Previsível
- [ ] Navegação consistente
- [ ] Identificação consistente
- [ ] Componentes behaving same way

#### 3.3 Ajuda de Entrada
- [ ] Identificação de erros
- [ ] Rótulos ou instruções
- [ ] Sugestões de erro

---

### Robusto

#### 4.1 Compatível
- [ ] Parsing válido
- [ ] Nome, função, valor programáveis

---

## Testes Rápidos

### Verificação Visual
- [ ] Contraste adequado
- [ ] Texto redimensionável
- [ ] Foco visível

### Teste de Teclado
- [ ] Tab order
- [ ] Todos os elementos acessíveis
- [ ] Skip links

### Screen Reader
- [ ] Leitura correta
- [ ] ordem lógica
- [ ] Labels presentes

---

## Ferramentas de Teste

| Ferramenta | Tipo |
|------------|------|
| WAVE | Online |
| Axe DevTools | Browser |
| Lighthouse | Browser |
| NVDA | Screen Reader |
| VoiceOver | Screen Reader |