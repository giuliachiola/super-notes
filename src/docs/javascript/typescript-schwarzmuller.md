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
- `any`: any kind of value, no specific type assignment

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

## Type `any`

In this way I am declaring that `favoriteActivities` is an array, but I have not specified what is the type of its content:

```js
let favoriteHobbies: any[];
favoriteHobbies = ['Sport', 10]; // OK

let favoriteHobbiesString: string[];
favoriteHobbiesString = ['Sport', 10]; // NOPE, should be strings!
```

Use `any` carefully, just when you absolutely do not know what values types you are going to use.

## Compex types

### Union type

This will throw an error:

> Operator '+' cannot be applied to types 'string | number' and 'string | number'.ts(2365)

```js
function combine(input1: number | string, input2: number | string) {
  const result = input1 + input2 // ERROR
  return result
}
```

we have to workaround it working separately with numbers or with strings:

```js
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    // both numbers
    result = input1 + input2
  } else {
    // both strings
    result = input1.toString() + input2.toString()
  }
  return result
}

const combinedAges = combine(30, 21); // OK
const combinedNames = combine('anna', 'robin'); // OK
```

### Literal type

From the [official docs](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types):
> One way to think about this is to consider how JavaScript comes with different ways to declare a variable. Both var and let allow for changing what is held inside the variable, and const does not. This is reflected in how TypeScript creates types for literals.

```js
let changingString = "Hello World";
changingString = "Olá Mundo";
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system
changingString;

let changingString: string

const constantString = "Hello World";
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation
constantString;

/* (on hover)
const constantString: "Hello World"
*/
```

Example:

```js
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text',
  ) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2 // add `+` to force convertion to a number for each input
  } else {
    result = input1.toString() + input2.toString()
  }
  return result
}

const combinedAges = combine(30, 21, 'as-number');
const combinedAgesString = combine('30', '21', 'as-number'); // 3rd argument is useful
const combinedNames = combine('anna', 'robin', 'as-text');

console.log({combinedAges}) // output => 51
console.log({combinedAgesString}) // output => 51
console.log({combinedNames}) // output => 'annarobin'
```

## Type aliases

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases

From

```js
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text',
  ) {
  ...
}
```

to

```js
type Combinable = number | string

function combine(
  input1: Combinable, // reusable type
  input2: Combinable, // reusable type
  resultConversion: 'as-number' | 'as-text',
  ) {
  ...
}
```

## Return type

Usually, it is better to NOT declare it like this:

```js
function add(n1: number, n2: number): number {
  return n1 + n2
}
```

and leave the inferred type.

Example with `void` return:

```js
...
function printResult(num: number): void {
  console.log('Result: ' + num);
  // we are not returning anything here! so the function returns `void`
}
```

Note that a function is not allowed to return `undefined`:

```js
...
function printResult(num: number): undefined { // ERROR
  console.log('Result: ' + num);
}
```

```shell
A function whose declared type is neither 'void' nor 'any' must return a value.ts(2355)
```

To return `undefined`, a function should return like this:

```js
function printResult(num: number): undefined { // OK
  console.log('Result: ' + num);
  return;
}
```

in this way you are returning something, but without a real value.

### Store function in a variable

To do it is ok with TypeScript

```js
function add(n1: number, n2: number): number {
  return n1 + n2
}

let combineValues;
combineValues = add;

console.log(combineValues(8, 8)) // 16
```

## Function types

Function types are types that describe a function, regarding parameters and return values.

Function types have this notation close to "arrow function" notation, but using types instead of brackets.

```js
let combineValues: (a: number, b: number) => number
```

In that way ^^ `combineValues` function should accepts any function that takes two parameters where each parameter is a number and the function overall returns a number.

```js
function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

let combineValues: (a: number, b: number) => number

combineValues = add; // OK
combineValues = printResult; // NOPE! error: "Type 'void' is not assignable to type 'number'"
// because printResult() does not complain with the `combineValues` fn type definition

console.log(combineValues(8, 8));
```

So, function types allow us to describe which function is allowed specificly we want to use.


### Callback functions

Callback functions (= cb)

```js
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}

addAndHandle(10, 20, (result) => {
  console.log(result)
})
```

## Type `unknown`

We do not know what the variable type will be.

```js
let userInput: unknown;

// both are valid
userInput = 5;
userInput = 'Max';
```

Pay attention that you can't assign an unknown type to a declared type:

```js
let userInput: unknown;
let userName: string;

userName = userInput; // NOPE!
// Type 'unknown' is not assignable to type 'string'
```

we have to check the type and then we can store it:

```js
let userInput: unknown;
let userName: string;

if (typeof userInput === 'string') {
  userName = userInput; // OK
}
```

## Type `never`

`never` is another type a function can return.

```js
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }
  // this function will not return anything
}

generateError('An error occurred', 500);
```

In fact, if we try to assign the return value to a variable:

```js
const resultValue = generateError('An error occurred', 500);
console.log(resultValue) // (empty, not `undefined`)
```

and see at the browser Console, we will see that this function do not return anything after the Error message, not even `undefined`.

Another function that will return a `never` type is an infinite loop:

```js
function infiniteLoopFn(message: string, code: number): never {
  while (true) {...}
}
```

[More info about `never` type](https://www.tutorialsteacher.com/typescript/typescript-never)
