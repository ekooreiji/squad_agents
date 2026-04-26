# Classes

OOP with TypeScript.

```typescript
class User {
  private id: number;
  public name: string;
  protected email: string;
  
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  
  greet(): string {
    return `Hello, ${this.name}`;
  }
}

const user = new User(1, "João");
```

## Inheritance

```typescript
class Admin extends User {
  role: string;
  
  constructor(id: number, name: string, role: string) {
    super(id, name);
    this.role = role;
  }
}
```