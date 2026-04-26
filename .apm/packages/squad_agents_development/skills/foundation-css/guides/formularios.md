# Formulários - Foundation CSS

Forms com Abide validation.

---

## Básico

```html
<form data-abide>
    <div class="grid-container">
        <div class="grid-x grid-padding-x">
            <div class="cell">
                <label>
                    Nome
                    <input type="text" required>
                    <span class="form-error">Nome é obrigatório</span>
                </label>
            </div>
        </div>
    </div>
</form>
```

---

## Campos

```html
<!-- Text -->
<input type="text" placeholder="Texto">

<!-- Email -->
<input type="email" placeholder="email@exemplo.com">

<!-- Password -->
<input type="password" placeholder="Senha">

<!-- Number -->
<input type="number" placeholder="123">

<!-- Textarea -->
<textarea placeholder="Mensagem"></textarea>

<!-- Select -->
<select>
    <option>Opção 1</option>
    <option>Opção 2</option>
</select>

<!-- File -->
<input type="file">

<!-- Checkbox -->
<fieldset class="fieldset">
    <legend>Escolha</legend>
    <input type="checkbox" id="check1"><label for="check1">Opção 1</label>
    <input type="checkbox" id="check2"><label for="check2">Opção 2</label>
</fieldset>

<!-- Radio -->
<input type="radio" name="radio" id="radio1"><label for="radio1">Sim</label>
<input type="radio" name="radio" id="radio2"><label for="radio2">Não</label>
```

---

## Input Group

```html
<div class="input-group">
    <span class="input-group-label">R$</span>
    <input class="input-group-field" type="number">
    <div class="input-group-button">
        <button class="button">Enviar</button>
    </div>
</div>
```

---

## Labels

```html
<label>Label padrão</label>

<label required>Label obrigatório</label>

<label disabled>Label desabilitado</label>
```

---

## Abide Validation

### Required

```html
<input type="text" required>
<span class="form-error">Campo obrigatório</span>
```

### Email

```html
<input type="email" placeholder="email@exemplo.com" required>
<span class="form-error">Email inválido</span>
```

### Min Length

```html
<input type="text" minlength="5" required>
<span class="form-error">Mínimo 5 caracteres</span>
```

### Pattern

```html
<input type="text" pattern="[a-zA-Z]+" required>
<span class="form-error">Apenas letras</span>
```

### Equal To

```html
<input type="password" id="senha" required>
<input type="password" data-equalto="senha" required>
<span class="form-error">Senhas diferentes</span>
```

---

## Styled Select

```html
<select class="form-select">
    <option>Opção 1</option>
</select>
```

---

## Fieldset

```html
<fieldset class="fieldset">
    <legend>Grupo de campos</legend>
    <label>Campo 1 <input type="text"></label>
    <label>Campo 2 <input type="text"></label>
</fieldset>
```

---

## Helper Text

```html
<label>
    Email
    <span class="form-error">Obrigatório</span>
</label>
<span class="help-text">Nunca compartilharemos seu email.</span>