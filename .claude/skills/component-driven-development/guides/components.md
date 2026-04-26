# Componentes - CDD

Componentes atômicos.

---

## Small Components

Componentes mínimos:
- Button
- Input
- Icon
- Badge

---

## Button (Component)

```jsx
function Button({ label, variant, size, disabled, onClick }) {
  return (
    <button 
      className={`btn btn--${variant} btn--${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
```

### Usage

```jsx
<Button label="Clique" variant="primary" size="medium" />
```

---

## Input Component

```jsx
function Input({ type, placeholder, value, onChange, error }) {
  return (
    <input 
      type={type}
      className={`input ${error ? 'input--error' : ''}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
```

---

## Badge Component

```jsx
function Badge({ label, variant, size }) {
  return (
    <span className={`badge badge--${variant} badge--${size}`}>
      {label}
    </span>
  );
}
```

---

## Icon Component

```jsx
function Icon({ name, size, color }) {
  return (
    <i className={`icon icon--${size}`} style={{ color }}>
      {name}
    </i>
  );
}
```

---

## Card Component

```jsx
function Card({ title, description, image, actions }) {
  return (
    <article className="card">
      {image && <img className="card__image" src={image} />}
      <div className="card__body">
        <h3>{title}</h3>
        <p>{description}</p>
        {actions}
      </div>
    </article>
  );
}
```

---

## Notes

- Props como API
- Reutilizável