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
