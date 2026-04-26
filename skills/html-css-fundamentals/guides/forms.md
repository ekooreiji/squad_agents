# Forms

Guia de formulários HTML para designers.

---

## 1. Estrutura Básica

```html
<form action="/submit" method="POST">
    <!-- Campos aqui -->
</form>
```

---

## 2. Inputs Comuns

### 2.1 Texto

```html
<label for="name">Nome:</label>
<input type="text" id="name" name="name" placeholder="Seu nome">
```

### 2.2 Email

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email" required>
```

### 2.3 Senha

```html
<label for="password">Senha:</label>
<input type="password" id="password" name="password">
```

### 2.4 Número

```html
<label for="age">Idade:</label>
<input type="number" id="age" name="age" min="18" max="100">
```

---

## 3. Checkbox e Radio

### 3.1 Checkbox (múltipla escolha)

```html
<input type="checkbox" id="newsletter" name="newsletter" value="yes">
<label for="newsletter">Receber newsletter</label>
```

### 3.2 Radio (única escolha)

```html
<input type="radio" id="male" name="gender" value="male">
<label for="male">Masculino</label>

<input type="radio" id="female" name="gender" value="female">
<label for="female">Feminino</label>
```

---

## 4. Select

```html
<label for="country">País:</label>
<select id="country" name="country">
    <option value="">Selecione...</option>
    <option value="br">Brasil</option>
    <option value="pt">Portugal</option>
</select>
```

---

## 5. Textarea

```html
<label for="message">Mensagem:</label>
<textarea id="message" name="message" rows="4" placeholder="Sua mensagem"></textarea>
```

---

## 6. Botões

### 6.1 Submit

```html
<button type="submit">Enviar</button>
```

### 6.2 Reset

```html
<button type="reset">Limpar</button>
```

---

## 7. Atributos Importantes

| Atributo | Descrição |
|---------|-----------|
| `required` | Campo obrigatório |
| `disabled` | Campo desabilitado |
| `readonly` | Apenas leitura |
| `placeholder` | Texto de exemplo |
| `minlength` | Mínimo de caracteres |
| `maxlength` | Máximo de caracteres |
| `pattern` | Regex de validação |

---

## 8. Boas Práticas

### 8.1 labels

SEMPRE use `<label>` vinculada ao input:

```html
<label for="email">Email:</label>
<input type="email" id="email">
```

### 8.2 Agrupamento

Use `<fieldset>` e `<legend>`:

```html
<fieldset>
    <legend>Dados Pessoais</legend>
    <!-- campos -->
</fieldset>
```

---

## Cross-refs

- [html-basics.md](html-basics.md) - Tags HTML
- [css-basics.md](css-basics.md) - Propriedades CSS
- [responsive-css.md](responsive-css.md) - Formulários responsivos