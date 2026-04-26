# Component API - CDD

API de componentes.

---

## Props

Propriedades de entrada:
- data
- configuration
- callbacks

---

## Prop Types

```jsx
Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
};
```

---

## Events

```jsx
function handleClick() {
  console.log('clicked');
}

<Button onClick={handleClick} />
```

---

## State

```jsx
function Checkbox({ checked, onChange }) {
  const [isChecked, setChecked] = useState(checked);
  
  return (
    <input 
      type="checkbox"
      checked={isChecked}
      onChange={() => setChecked(!isChecked)}
    />
  );
}
```

---

## Slots

```jsx
function Modal({ title, children, footer }) {
  return (
    <div className="modal">
      <div className="modal__header">{title}</div>
      <div className="modal__body">{children}</div>
      <div className="modal__footer">{footer}</div>
    </div>
  );
}
```

---

## Refs

```jsx
const inputRef = useRef(null);

<Input ref={inputRef} />
```

---

## Notes

- Props = entrada
- Events = saída