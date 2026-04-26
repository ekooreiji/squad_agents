# Tooling - CDD

Ferramentas para CDD.

---

## Storybook

```bash
npx storybook@latest init
```

### Config

```javascript
// .storybook/main.js
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
```

---

## Story Example

```jsx
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
  },
};

export const Primary = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};
```

---

## Chromatic

```bash
npm install --save-dev chromatic
```

```json
{
  "scripts": {
    "chromatic": "chromatic --project-token=TOKEN"
  }
}
```

---

## Playroom

```bash
npx create-playroom
```

### Config

```javascript
// playroom.config.js
module.exports = {
  components: './src/components',
  output: './playroom',
  width: 400,
};
```

---

## Testing Library

```bash
npm install @testing-library/react
```

```jsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button', () => {
  render(<Button label="Click me" />);
  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

---

## Notes

- Storybook: documentação
- Chromatic: visual regression
- Playroom: design playground