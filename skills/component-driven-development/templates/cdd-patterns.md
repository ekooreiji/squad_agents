# CDD Patterns

Padrões CDD.

---

## Button Component

```jsx
function Button({ label, variant = 'primary', size = 'medium', disabled = false, onClick }) {
  return (
    <button 
      className={`btn btn--${variant} btn--${size} ${disabled ? 'btn--disabled' : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
```

---

## Input Component

```jsx
function Input({ type = 'text', placeholder, value, onChange, error }) {
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

## Card Component

```jsx
function Card({ title, description, image, actions }) {
  return (
    <article className="card">
      {image && <img className="card__image" src={image} />}
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <div className="card__actions">{actions}</div>
      </div>
    </article>
  );
}
```

---

## Design Tokens

```javascript
const tokens = {
  colors: { primary: '#007bff', secondary: '#6c757d' },
  fonts: { family: "'Inter', sans-serif" },
  spacing: { md: '1rem' },
};
```