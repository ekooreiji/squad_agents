# Formulários Bootstrap

Guia sobre formulários e validação.

---

## 1. Form Basic

```html
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Senha</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Lembrar</label>
  </div>
  <button type="submit" class="btn btn-primary">Entrar</button>
</form>
```

---

## 2. Input Sizes

| Classe | Tamanho |
|---------|---------|
| form-control-lg | Grande |
| form-control-sm | Pequeno |

---

## 3. Select

```html
<select class="form-select">
  <option selected>Escolha...</option>
  <option value="1">Opção 1</option>
  <option value="2">Opção 2</option>
</select>
```

---

## 4. Checkbox e Radio

```html
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
   Checkbox
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Radio
  </label>
</div>
```

---

## 5. Validação

```html
<form class="was-validated">
  <div class="mb-3">
    <label for="validationCustom01" class="form-label">Nome</label>
    <input type="text" class="form-control" id="validationCustom01" required>
    <div class="valid-feedback">Ok!</div>
    <div class="invalid-feedback">Preencha!</div>
  </div>
  <button class="btn btn-primary" type="submit">Enviar</button>
</form>
```

---

## Cross-refs

- [componentes.md](componentes.md) - Componentes
- [customizacao.md](customizacao.md) - Customização