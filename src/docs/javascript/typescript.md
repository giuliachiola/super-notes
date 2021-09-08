# TypeScript

From the official docs https://www.typescriptlang.org/docs/handbook:

- TypeScript is a static type checker.
- It detects errors in code without running it is referred to as static checking.
- TypeScript is a typed superset, meaning that it adds rules about how different kinds of values can be used.
- TypeScript is also a programming language that preserves the runtime behavior of JavaScript.
- TypeScript is JavaScript’s runtime with a compile-time type checker.

From [TypeScript Course for Beginners 2021]()

- It's a JavaScript superset (= a language building up on JavaScript)
- So it takes JavaScript language and adds new features and advantages
- TS can't be executed by environments such as browser and node
- TS is a _programming language_ but also a _tool_: it's a powerful compiler which runs over your code and compiles your TS code to JS
- TS gives extra error checking before running code

## How to use TypeScript

```shell
npm install -g typescript
```

Run TypeScript check

```shell
tsc hello.ts
```

`noEmitOnError` (by default it is `false`)

> Do not emit compiler output files like JavaScript source code, source-maps or declarations if any errors were reported.

https://www.typescriptlang.org/tsconfig/#noEmitOnError

## Examples

```js
// JS

function greet(person, date) {
	console.log(`Hello ${person}, today is ${date}!`);
}
```

```js
// TS

function greet(person: string, date: Date) {
	console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
```

You can read that signature as ”greet takes a person of type string, and a date of type Date“.

## TS infer

> In many cases, TypeScript can even just infer (or “figure out”) the types for us even if we omit them:

```js
let msg = "hello there!"; // TS -> let msg: string
```

> Even though we didn’t tell TypeScript that msg had the type string it was able to figure that out. That’s a feature, and it’s best not to add annotations when the type system would end up inferring the same type anyway.

## Erased Types

```js
// hello.ts

function greet(person: string, date: Date) {
	console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
greet("Maddison", new Date());
```

will be compiled to

```js
// hello.js

"use strict";
function greet(person, date) {
		console.log("Hello " + person + ", today is " + date.toDateString() + "!");
}
greet("Maddison", new Date());
```

Note that our person and date parameters no longer have type annotations.

> Type annotations aren’t part of JavaScript (or ECMAScript to be pedantic), so there really aren’t any browsers or other runtimes that can just run TypeScript unmodified. That’s why TypeScript needs a compiler in the first place - it needs some way to strip out or transform any TypeScript-specific code so that you can run it. Most TypeScript-specific code gets erased away, and likewise, here our type annotations were completely erased.

## Downleveling

```js
hello.ts
`Hello ${person}, today is ${date.toDateString()}!`;
```

```js
hello.js
"Hello " + person + ", today is " + date.toDateString() + "!";
```

Template strings are a feature from a version of ES6. This process of moving from a newer or “higher” version of ECMAScript down to an older or “lower” one is sometimes called downleveling.

You can **change** the target JS using

```shell
tsc --target es2015 hello.ts
```

## Types

### Primitives

- `string`
- `number`
- `boolean`

### NOT primitives

**Arrays**

Example:

```js
const arr = [1, 2, 3]
```

type: `number[]`

or

type: `Array<number>`

**Any**

- TypeScript also has a special type, `any`, that you can use whenever you don’t want a particular value to cause typechecking errors.

- Using `any` disables all further type checking, and it is assumed you know the environment better than TypeScript.

- The `any` type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.

- Use `noImplicitAny` to flag any implicit `any` as an error.

## Type annotations

```js
let myName: string = "Alice";
```

Note that TypeScript doesn’t use “types on the left”-style declarations like `int x = 0;`. Type annotations will always go after the thing being typed.

Wherever possible, TypeScript tries to automatically infer the types in your code.

```js
// No type annotation needed -- 'myName' inferred as type 'string'
let myName = "Alice";
```

### Parameter Type Annotations

When a parameter has a type annotation, arguments to that function will be checked:

```js
// Parameter type annotation
function greet(name: string) {
	console.log("Hello, " + name.toUpperCase() + "!!");
}
```

Note: Even if you don’t have type annotations on your parameters, TypeScript will still check that you passed the right number of arguments.

### Return Type Annotations

Return type annotations appear after the parameter list:

```js
function getFavoriteNumber(): number {
	return 26;
}
```

### Contestual typing

Even though the parameter `s` didn’t have a type annotation, TypeScript used the types of the forEach function, along with the inferred type of the array, to determine the type `s` will have.

This process is called contextual typing because the context that the function occurred within informs what type it should have.

```js
// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function
names.forEach(function (s) {
	console.log(s.toUppercase());
Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});
```

### Object typing

```js
function printName(obj: { first: string; last: string }) {
	// ...
}
```

Adding a `?` to the property name, it means that it is an optional parameter:

```js
function printName(obj: { first: string; last?: string }) {
	// ...
}
```

### Union types

A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.

```js
function printId(id: number | string) {
	console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
```

IMPORTANT: TypeScript will only allow you to do things with the union if that thing is valid for every member of the union. 

```js
function printId(id: number | string) {
	console.log(id.toUpperCase()); // ERROR!
		// Property 'toUpperCase' does not exist on type 'string | number'.
		// Property 'toUpperCase' does not exist on type 'number'.
}
```

**Narrowing**

Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.

```js
function printId(id: number | string) {
	if (typeof id === "string") {
		// In this branch, id is of type 'string'
		console.log(id.toUpperCase());
	} else {
		// Here, id is of type 'number'
		console.log(id);
	}
}
```

### Type Aliases

A type alias is exactly that - a name for any type. The syntax for a type alias is:

```js
type Point = {
	x: number;
	y: number;
};
 
// Exactly the same as the earlier example
function printCoord(pt: Point) {
	console.log("The coordinate's x value is " + pt.x);
	console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });
```

### Interfaces

An interface declaration is another way to name an object type:

```js
interface Point {
	x: number;
	y: number;
}
 
//... same as above
```

**Type Aliases VS Interfaces**: a type cannot be re-opened to add new properties vs an interface which is always extendable.

Interface:

```js
interface Bear {
	name: string
}

interface Bear {
	honey: boolean
}

/*
RESULTS IN

Bear = {
	name: string
	honey: boolean
}
*/
```

Type:

```js
type Bear = {
  name: string
}

type Bear = {
  honey: boolean
}

/*
ERROR

// Error: Duplicate identifier 'Bear'.
*/
```

### Type Assertions

Sometimes you will have information about the type of a value that TypeScript can’t know about.

```js
// e.g.
// TypeScript only knows that this will return some kind of HTMLElement, but you might know that your page will always have an HTMLCanvasElement with a given ID.
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
```

or with angle brackets syntax

```js
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```

## Non-null Assertion Operator (Postfix `!`)

It’s important to only use `!` when you know that the value can’t be null or undefined.

```js
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```

## Enums

Enums allows for describing a value which could be one of a set of possible named constants.

```js
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
```

----

## Non-null assertion operator `!`

It is a way to tell the compiler "this expression cannot be null or undefined here, so don't complain about the possibility of it being null or undefined." Sometimes the type checker is unable to make that determination itself.

```js
const input1 = document.getElementById('num1')! as HTMLInputElement
```

[from StackOverflow](https://stackoverflow.com/a/42274019)

# Example

```js
const button = document.querySelector('button')
const input1 = document.getElementById('num1')! as HTMLInputElement
const input2 = document.getElementById('num2')! as HTMLInputElement

function add(num1: number, num2: number) {
	return num1 + num2
}

// note: typeof(input.value) is 'string'
button.addEventListener('click', function() {
	console.log(add(Number(input1.value), Number(input2.value)))
})
```
