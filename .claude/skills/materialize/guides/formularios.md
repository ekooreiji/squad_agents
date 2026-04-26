# Formulários - Materialize

Forms e inputs Materialize.

---

## Campo

```html
<div class="input-field">
    <input type="text" id="nome">
    <label for="nome">Nome</label>
</div>
```

---

## Input Types

```html
<input type="text">
<input type="password">
<input type="email">
<input type="number">
<input type="tel">
<input type="date">
<input type="time">
<input type="url">
```

---

## Textarea

```html
<div class="input-field">
    <textarea id="mensagem" class="materialize-textarea"></textarea>
    <label for="mensagem">Mensagem</label>
</div>
```

---

## Select

```html
<div class="input-field">
    <select>
        <option value="" disabled selected>Escolha</option>
        <option value="1">Opção 1</option>
        <option value="2">Opção 2</option>
    </select>
    <label>Selecione</label>
</div>
```

---

## Checkbox

```html
<p>
    <label>
        <input type="checkbox">
        <span>Checkbox</span>
    </label>
</p>
```

---

## Radio

```html
<p>
    <label>
        <input name="group1" type="radio">
        <span>Sim</span>
    </label>
</p>
<p>
    <label>
        <input name="group1" type="radio">
        <span>Não</span>
    </label>
</p>
```

---

## Switch

```html
<div class="switch">
    <label>
        Off
        <input type="checkbox">
        <span class="lever"></span>
        On
    </label>
</div>
```

---

## File Input

```html
<div class="file-field input-field">
    <div class="btn">Arquivo</div>
    <div class="file-path-wrapper">
        <input class="file-path" type="text">
    </div>
</div>
```

---

## Validation States

```html
<input class="valid" type="text">
<input class="invalid" type="text">
```

---

## Notes

- jQuery requerido para Select
- Materialize auto-initialization