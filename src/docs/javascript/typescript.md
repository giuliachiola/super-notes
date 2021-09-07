# TypeScript

From the official docs https://www.typescriptlang.org/docs/handbook:

- TypeScript is a static type checker.
- It detects errors in code without running it is referred to as static checking.
- TypeScript is a typed superset, meaning that it adds rules about how different kinds of values can be used.
- TypeScript is also a programming language that preserves the runtime behavior of JavaScript.
- TypeScript is JavaScript’s runtime with a compile-time type checker.


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
