# Generics

Reusable types.

```typescript
function identity<T>(value: T): T {
  return value;
}

const output = identity<string>("hello");

// Generic Interface
interface Repository<T> {
  find(id: number): Promise<T>;
  create(item: T): Promise<T>;
}

interface User {
  name: string;
}

// Generic Class
class DataStore<T> {
  private items: T[] = [];
  
  add(item: T): void {
    this.items.push(item);
  }
  
  getAll(): T[] {
    return this.items;
  }
}
```