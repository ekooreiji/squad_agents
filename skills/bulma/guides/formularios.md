# Formulários - Bulma

Forms e inputs Bulma.

---

## Campo Básico

```html
<div class="field">
    <label class="label">Nome</label>
    <div class="control">
        <input class="input" type="text" placeholder="Texto">
    </div>
</div>
```

---

## Input Types

```html
<input class="input" type="text">
<input class="input" type="email">
<input class="input" type="password">
<input class="input" type="number">
<input class="input" type="tel">
<input class="input" type="url">
```

---

## Textarea

```html
<div class="field">
    <label class="label">Mensagem</label>
    <div class="control">
        <textarea class="textarea" placeholder="Mensagem"></textarea>
    </div>
</div>
```

---

## Select

```html
<div class="field">
    <label class="label">Selecione</label>
    <div class="control">
        <div class="select">
            <select>
                <option>Opção 1</option>
                <option>Opção 2</option>
            </select>
        </div>
    </div>
</div>
```

---

## Checkbox/Radio

```html
<label class="checkbox">
    <input type="checkbox"> Checkbox
</label>

<label class="radio">
    <input type="radio" name="option"> Sim
</label>
<label class="radio">
    <input type="radio" name="option"> Não
</label>
```

---

## With Icons

```html
<div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left">
        <input class="input" type="email" placeholder="Email">
        <span class="icon is-small is-left">@</span>
    </div>
</div>

<button class="button is-primary">
    <span class="icon"><i>Icon</i></span>
    <span>Enviar</span>
</button>
```

---

## Validation States

```html
<input class="input" type="text">
<input class="input is-primary" type="text">
<input class="input is-info" type="text">
<input class="input is-success" type="text">
<input class="input is-warning" type="text">
<input class="input is-danger" type="text">

<input class="input is-small" type="text">
<input class="input is-normal" type="text">
<input class="input is-medium" type="text">
<input class="input is-large" type="text">
```

---

## Help Text

```html
<div class="field">
    <label class="label">Email</label>
    <div class="control">
        <input class="input" type="email">
    </div>
    <p class="help">Nunca compartilharemos.</p>
</div>
```

---

## Horizontal Form

```html
<div class="field is-horizontal">
    <div class="field-label">
        <label class="label">Nome</label>
    </div>
    <div class="field-body">
        <div class="field">
            <div class="control">
                <input class="input" type="text">
            </div>
        </div>
    </div>
</div>
```

---

## Notes

- Sem JS nativo
- Icons requer Font Awesome opcional