# TypeScript - Utility types

[Utility Types - Advanced TypeScript - Dmytro Danylov](https://www.youtube.com/watch?v=Fgcu_iB2X04&ab_channel=DmytroDanylov)

## `Partial<T>`

```
interface A {
  x: number
  y: number
}

Partial<A> = {
  x?: number
  y?: number
}
```

Example:

```js
interface Starship {
  name: string;
  enableHyperjump: boolean;
}

const updateStarship = (id: number, starship: Starship) => {};

updateStarship(1, {
  name: "Explorer", // ERROR
});
```

ERROR

```shell
Property 'enableHyperjump' is missing in type '{ name: string; }' but required in type 'Starship'.
```

We can fix it using `Partial<T>`

```js
interface Starship {
  name: string;
  enableHyperjump: boolean;
}

const updateStarship = (id: number, starship: Partial<Starship>) => {};

updateStarship(1, {
  name: "Explorer",
});
```

## `Required<T>`

```
interface A {
  x?: number
  y?: number
}

Required<A> = {
  x: number
  y: number
}
```

## `Readonly<T>`

```
interface A {
  x: number
  y: number
}

Readonly<A> = {
  readonly x: number
  readonly y: number
}
```

## `Record<K, T>`

```js
interface Starship {
  name: string;
  enableHyperjump: boolean;
}

const starships: Record<string, Starship> = {
  Explorer1: {
    name: "Awesome_rexplorer",
    enableHyperjump: true,
  },
  Explorer2: {
    name: "Explorer_no_jump",
    enableHyperjump: false,
  },
};
```

## `Pick<T,K>`

```
interface A {
  x: number
  y: number
  z: number
}

Pick<A, "x" | "z"> = {
  x: number
  z: number
}
```

```js
interface Starship {
  name: string;
  enableHyperjump: boolean;
}

type StarshipNameOnly = Pick<Starship, "name">;
```

## `Omit<T,K>`

```
interface A {
  x: number
  y: number
  z: number
}

Omit<A, "x" | "z"> = {
  y: number
}
```

```js
interface Starship {
  name: string;
  enableHyperjump: boolean;
}

type StarshipWithoutName = Omit<Starship, "name">;
```

## `Exclude<T,K>`

```
type A = string | string[] | undefined

Exclude<A, undefined> = string | string []
```

```js
type AvailableDrinks = "Coffee" | "Tea" | "Orange juice" | "Lemonade";

let JohnsDrink: AvailableDrinks;
JohnsDrink = "Coffee";

type DrinksJaneDoesntLikeCoffee = "Coffee" | "Orange juice";
type DrinksJaneLikes = "Tea" | "Lemonade" | "Mohito";

// 1. exclude drinks that Jane does not like:
let JanesDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLikeCoffee>;
JanesDrink = "Tea"; // ok
// JanesDrink = 'Coffee' // NOPE!

// 2. include only the drinks Jane likes
let JanesDrink2: Extract<AvailableDrinks, DrinksJaneLikes>; // 'Tea' or 'Lemonade', NOT 'Mohito'
```

## `NonNullable<T>`

```
type A = string | string[] | null | undefined

NonNullable<A> = string | string []
```

```js
interface StarshipProps {
  color?: "blue" | "red" | "green";
}

function paintStarship(
  id: number,
  color: NonNullable<StarshipProps["color"]>
) {}

// paintStarship(1, undefined) // NOPE! color can't be 'undefined'
paintStarship(1, "red");
```

By default, in TS developers can assign `undefined` to all types, and `NonNullable<T>` prevents it.

```js
const A: string = null; // this is OK in TS, unless you specify it in tsconfig.json
```

To enable this feature, set it into the config file

```json
// tsconfig.json

{
  "compilerOptions": {
    "strictNullChecks": true
  }
}
```

## `ReturnType<T>`

```js
function helloWorld() {
  return `Hello world`;
}

type HelloWorldReturnType = ReturnType<typeof helloWorld>; // string
```
