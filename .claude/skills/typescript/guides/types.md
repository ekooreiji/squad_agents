# Types

Basic types.

## Basic Types

```typescript
let name: string = "João";
let age: number = 30;
let active: boolean = true;
let items: string[] = ["a", "b"];
```

## Any/Unknown

```typescript
let unknown: unknown = "any";
let anything: any = "any";

if (typeof unknown === "string") {
  console.log(unknown.toUpperCase());
}
```

## Void/Null

```typescript
function log(msg: string): void {
  console.log(msg);
}

let nullValue: null = null;
let undefinedValue: undefined = undefined;
```

## Type Alias

```typescript
type ID = string | number;
let userId: ID;
```