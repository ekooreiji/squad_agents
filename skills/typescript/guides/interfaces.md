# Interfaces

Object shapes.

```typescript
interface User {
  id: number;
  name: string;
  email?: string;
}

const user: User = {
  id: 1,
  name: "João"
};

// Extending
interface Admin extends User {
  role: "admin" | "superadmin";
}
```