# TypeScript - Generics

## Example 1

Declare an array of numbers:

```js
// array of numbers
const last = (arr: Array<number>) => {
  return arr[arr.length - 1];
};

const l = last([1, 2, 3]);
const lString = last(["a", "b", "c"]); // ERROR
// ERROR: Type 'string' is not assignable to type 'number'.
```

If we want to use this functions with both array of numbers and array of strings, we can declare it with `any` but it is not a best practice:

```js
// array of any type
const last = (arr: Array<any>) => {
  return arr[arr.length - 1];
};

const l = last([1, 2, 3]);
const lString = last(["a", "b", "c"]);
```

We can use **generics**

```ts
const last = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
};

const l = last([1, 2, 3]); // array of numbers
const lString = last(["a", "b", "c"]); // array of strings
```

## Example 2

```ts
const makeArr = (x: number) => {
  return [x];
};

const v = makeArr(3); // -> [3]
const v2 = makeArr("a"); // -> NOPE! it's a string
```

we can updated the code to:

```ts
const makeArr = <T>(x: T) => {
  return [x];
};

const v = makeArr(3); // -> [3]
const v2 = makeArr("a"); // -> ['a']
```

## Example 3 (two values)

```ts
const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
  return [x, y];
};

const v = makeArr(1, 2); // [1,2]
const v2 = makeArr("a", "b"); // ['a', 'b']
const v3 = makeArr("a", 5); // ['a', 5]
```

Note that if we want to eplicit the first value, we have to esplicit also the second one:

```ts
const v3 = makeArr<string | null>("a", 5); // NOPE
const v3 = makeArr<string | null, number>("a", 5); // ok!
```

## Example 4

```ts
const makeFullName = (obj: { firstName: string; lastName: string }) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

const person = makeFullName({
  firstName: "Mario",
  lastName: "Rossi",
  age: 15, // NOPE, this does not exist above in the declaration
});
```

If we need to add `age` we can _extend_ the declaration

```ts
const makeFullName = <
  T extends {
    firstName: string;
    lastName: string;
  }
>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

const person = makeFullName({
  firstName: "Mario",
  lastName: "Rossi",
  age: 15, // now it is ok
});
```

## Interfaces

```ts
interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;
```

## How to use generics in React

With props:

```tsx
import React from "react";

interface Prop {
  name: string;
}

const HelloWorld: React.FC<props> = ({ name }) => {
  return <div>hello {name}</div>;
};
```

or with states:

```tsx
import React from "react";

interface Prop {
  name: string;
}

const HelloWorld: React.FC<props> = ({ name }) => {
  const [state] = useState<{ fullname: string | null }>({ fullname: "" });

  return <div>hello {name}</div>;
};
```
