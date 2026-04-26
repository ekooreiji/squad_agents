# Formulários - Spectre.css

Forms Spectre.css.

---

## Input

```html
<input type="text" class="form-input" placeholder="Texto">
<input type="email" class="form-input" placeholder="Email">
<input type="password" class="form-input" placeholder="Senha">
```

---

## Textarea

```html
<textarea class="form-input" placeholder="Mensagem"></textarea>
```

---

## Select

```html
<select class="form-input">
    <option>Opção 1</option>
    <option>Opção 2</option>
</select>
```

---

## Checkbox/Radio

```html
<label class="form-checkbox">
    <input type="checkbox">
    <i class="form-icon"></i> Checkbox
</label>

<label class="form-radio">
    <input type="radio" name="radio">
    <i class="form-icon"></i> Radio
</label>
```

---

## Form Group

```html
<form class="form-horizontal">
    <div class="form-group">
        <label class="form-label col-3">Label</label>
        <div class="col-9">
            <input class="form-input" type="text">
        </div>
    </div>
</form>
```