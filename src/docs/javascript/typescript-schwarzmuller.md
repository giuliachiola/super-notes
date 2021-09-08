# TypeScript (Max Schwarzmüller)

From "TypeScript Course for Beginners 2021 - Maximilian Schwarzmüller"

## Core types

- `number`: all numbers, no differentiation between integers of float
- `string`: all text values
- `boolean`: just true or false, not "truthy" or "falsy"
- `object`: any JavaScript object, more specific types (types of object) are possible
- `array`: any JavaScript array, type can be flexible or strict (regarding type elements)
- `tuple`: (added by TypeScript) fixed-length array
- `enum`: (added by TypeScript) automatically enumerated global constant identifiers

## Key differences

JavaScript uses "dynamic types" (resolved at runtime), TypeScript uses "static types" (set during development).

## Type inference

```js
let x = 3;
```

From docs:

> The type of the x variable is inferred to be number. This kind of inference takes place when initializing variables and members, setting parameter default values, and determining function return types.

Example:

TypeScript understands that `number1` has type number

```js
let number1 = 5
```

To be more specific, we could write:

```js
let number1: number = 5 // NOPE! redundand
```

but it is not a good practice.

If you do not indicate what the value is, then you should indicate the type:

```js
let number1: number; // declare type
...
number1 = 5; // assign value
```

## Type object

When we declare an object in this way

```js
const person = {
  name: 'Giulia',
  age: 29
}
```

TypeScript inferred an object type (see it on hover on Visual Studio Code)

```js
const person: {
  name: string;
  age: number;
}
```

IMPORTANT: this is NOT a JavaScript object!

Note that:
- has semicolons
- it has not `key:value` pairs, but `key:type` pairs
- it has not `=` but `:` instead

Example:

```js
const person = {
  name: 'Giulia',
  age: 29
}

console.log(person.nickname) // ERROR. `nickname` is not an existent property!
```

You can excplicit declare object types, but it is NOT a best practice

```js
const person: {
  name: string,
  age: number,
} = {
  name: 'Giulia',
  age: 29
}
```

## Type array

Declare an array of strings:

```js
let favoriteActivities: string[] // array of strings
favoriteActivities = ['Sport', 'Cooking']
```

## Type tuple

Tuple type have to be always declared in this way: `arrayname: [type1, type2, ...]`

```js
const person: {
  name: string; // redundant
  age: number; // redundant
  hobbies: string[]; // redundant
  role: [number, string]; // THIS IS NECESSARY, tuple have to be declared
} = {
  name: 'Giulia',
  age: 29,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'] // tuple, a role can have exactly two elements, one number e one string
}

...
person.role[1] = 10 // ERROR: role[1] should be a string
```

### `push` with tuple

Note that `push()` is an exeption, so this will work

```js
person.role.push('admin')
```

From [ts tuple](https://www.tutorialsteacher.com/typescript/typescript-tuple):
> You can add new elements to a tuple using the push() method.

```js
var employee: [number, string] = [1, "Steve"];
employee.push(2, "Bill");
console.log(employee); //Output: [1, 'Steve', 2, 'Bill']
```

This is allowed because we are adding number and string values to the tuple and they are valid for the employee tuple.

Now, let's try to add a boolean value to the tuple.

```js
employee.push(true)
```

The above example will throw the following error:

```shell
test.ts(4,15): error TS2345:
Argument of type 'true' is not assignable to parameter of type 'number | string'
```

## Type `enum`

Instead of use specific strings or numbers to remember and type correctly e.g.

```js
const ADMIN: 0;
const READ_ONLY: 1;
const AUTHOR: 2;

const person = {
  name: 'Giulia',
  age: 29,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
  permission: ADMIN, // = 0
}

...

if (person.permission === ADMIN) {
  ...
}
```

we can use `enum`

```js
enum Permission { ADMIN, READ_ONLY, AUTHOR };

const person = {
  ...
  permission: Permission.ADMIN,
}

if (person.permission === Permission.ADMIN)
```

Note: often enum properties are in uppercase, but that is not required.

Enums are compiled in JS to:

```js
var Permission;
(function (Permission) {
    Permission[Permission["ADMIN"] = 0] = "ADMIN";
    Permission[Permission["READ_ONLY"] = 1] = "READ_ONLY";
    Permission[Permission["AUTHOR"] = 2] = "AUTHOR";
})(Permission || (Permission = {}));
```

If you need to assign any other numbers as inizializers, you can add them to `enum` declaration:

```js
enum Permission { ADMIN = 5, READ_ONLY = 100, AUTHOR = 'author123' };
```