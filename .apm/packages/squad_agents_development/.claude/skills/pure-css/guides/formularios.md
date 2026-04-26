# Formulários - Pure.css

Forms Pure.css.

---

## Form Básico

```html
<form class="pure-form">
    <input type="text" placeholder="Texto">
    <button type="submit" class="pure-button">Enviar</button>
</form>
```

---

## Input Types

```html
<input type="text" placeholder="Texto">
<input type="password" placeholder="Senha">
<input type="email" placeholder="Email">
<input type="number" placeholder="Número">
<input type="tel" placeholder="Telefone">
<input type="url" placeholder="URL">
<input type="search" placeholder="Busca">
```

---

## Stacked Form

```html
<form class="pure-form pure-form-stacked">
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="Email">
    <label for="password">Senha</label>
    <input type="password" id="password">
    <label>
        <input type="checkbox"> Lembrar
    </label>
    <button type="submit" class="pure-button pure-button-primary">Entrar</button>
</form>
```

---

## Aligned Form

```html
<form class="pure-form pure-form-aligned">
    <div class="pure-control-group">
        <label for="nome">Nome</label>
        <input type="text" id="nome" placeholder="Nome">
    </div>
    <div class="pure-control-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Email">
    </div>
    <button type="submit" class="pure-button pure-button-primary">Enviar</button>
</form>
```

---

## Input States

```html
<input type="text" class="pure-input-rounded">
<input type="text" disabled>
<input type="text" readonly>
```

---

## Validation

```html
<input type="email" required>
<input type="email" pattern="[a-z]*">
<input type="number" min="0" max="10">
```

---

## Fieldsets

```html
<fieldset>
    <legend>Grupo</legend>
    <label>Label <input type="text"></label>
    <label>Label <input type="text"></label>
</fieldset>
```

---

## Notes

- Mínimo por design