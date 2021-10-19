# Functional programming

From [Functional JavaScript Tutorial - Zaiste Programming](https://www.youtube.com/playlist?list=PLhXZp00uXBk4ejkUZiDnv3R0AERA7Z4xp)

## Functions

There are lot of ways to invoke a function:

```js
function add(x, y) {
  return x + y
}

// 1.
const result1 = add(1,2) // 3

// 2.
const result2 = new add(1,2) // {}

// 3. call() -> first parameters is the context: `call(thisArg, arg1)`
const result3 = add.call(null, 1, 2) // 3

// 4. apply() -> first parameters is the context: apply(thisArg, argsArray)
const result4 = add.apply(null, [1, 2]) // 3
```

If we add more than parameters allowed, the others are ignored

```js
const result4 = add.apply(null, [1, 2, 3]) // -> the last parameter (3) is ignored
```

**`call()`** vs **`apply()`**
> While the syntax of this function is almost identical to that of apply(), the fundamental difference is that call() accepts an argument list, while apply() accepts a single array of arguments.

Functions can be invoked with more or fewer parameters than declared in its definition. The extra parameters are ignored while the missing ones are set to `undefined`.

## Hoising

Functions (and variables) are put into the memory during the compilation phase. This way these functions can be executed from anywhere, even in places before the actual definition.

```js
add(2, 3) // That's ok

function add(x, y) {
  return x + y
}
```
## Function expression
### Anonymous functions

Anonymous functions are the ones without an explicit name:

```js
function this_is_a_name () { ... }

const anonymous_function = function () { ... }
```

IMPORTANT: anonymous functions definition have to be _before_ its invokation, because this type of functions are NOT hoisted. 

```js
const add = function (a, b) {
  return a + b;
}

const result = add(4, 5 ) // 9
```

BUT this will NOT work:

```js
const result = add(4, 5 ) // ERROR!

const add = function (a, b) {
  return a + b;
}
```

```shell
Uncaught ReferenceError: hei is not defined
    at <anonymous>:1:16
```

### Named functions

This name can be used to refer as this function.

```js
const add = function compute(a, b) {
  return a + b;
}
```

### IIFE = Immediately Invoked Function Expression

- it's similar to anonymous function
- it's wrapped in parenthesis
- it's immidiately invoked

```js
(function(x, y) {
  return x + y;
})(2, 8) // 10
```

## Arrow functions

```js
const compute = (x, y) => {
  return x + y
}

compute(2, 4) // 6
```

- easier to read/write
- do not have `this`

Arrow functions can have **implicit return**:

```js
const compute = (x, y) => x + y;
const result = compute(2, 3) // 6
```

## Functions are objects

As objects, they have the `call()` method, which bind the two objects and pass `person` to the context `this`:

```js
const person = {
  name: 'Jake',
  age: 30
}


function displayName() {
  return this.name
}

const a = displayName.call(person) // 'Jake'
```

## Referential transparency

> An expression is called *referentially transparent* if it can be replaced with its value without the impact on the program's behaviour.

## Side effects

> A side effect is a change of system state or observable interaction with the outside world that occurs during the calculation of a result.

- printing into the console (e.g. `console.log()`)
- setters (or set methods) change object's internal state
- IO (input/output) such as file reading, database access or HTTP requests

```js
const doRequest = () => {
  return HTTP.get('https://example.com/anything')
}
```

**Problems**

- complexity
- hidden inside functions' body

## Pure functions

> Functions that produce the same output for the same input, and there are no side-effects.

**Benefits**

- no side-effects: they can only influence the behavior of a program through their output
- explicit dependencies

Example of NOT pure function:

```js
const today = () => new Date()
```

Example:

`slice` is a pure function:

```js
const arr = [0, 1, 2, 3, 4, 5]
const r = arr.slice(2, 5)

// r = [2, 3, 4]
// arr = [0, 1, 2, 3, 4, 5]
```

BUT `splice` is NOT, because `splice` mutates the array:

```js
const arr = [0, 1, 2, 3, 4, 5]
arr.splice(2, 5) // arr = [2, 3, 4, 5]
arr.splice(2, 5) // arr = [] -> the second time with the same arguments, the result changed
```

## Memoization

> Memoization consists of storing function result instead of recomputing it each time. It is a "cache" for function invocations.

## High-Order Functions (HOF)

> HOF are functions that
> - can be passed as input to other functions
> - or can be returned from other functions as output.

```js
const profile = fn => {
  return (...args) => {
    console.log(`Started at ${Date()}`)
    const result = fn(...args)
    console.log(`Computing: ${result}`)
    console.log(`End at ${Date()}`)
  }
}

const compute = (x, y) => x + y;

// in this way, we can pass parameters
profile(compute)(2, 3); // 5
```

## Abstractions with functions

Abstraction hide details.

The function below can be re-written:

```js
const isLargerThan = value => {
  return (number) => {
    return number > value
  }
}

const isLargerThan10 = isLargerThen(10)
const r = isLargerThan10(14) // true
```

can be re-written with implicit returns

```js
const isLargerThan = value => {
  return (number) => number > value // parhentesis removed
}
```

and then

```js
const isLargerThan = value => (number) => number > value // other parhentesis removed
```

Another example: **sort()**

```js
const arr = [11, 22, 1, 4, 2, 7]

arr.sort() // [1, 11, 2, 22, 4, 7] -> sorted comparing strings
```

From [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
> The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

`sort()` is an HOF and supports methods to sort its elements:

```js
const arr = [11, 22, 1, 4, 2, 7]

const numericalOrder = (a, b) => a - b
arr.sort(numericalOrder) // [1, 2, 4, 7, 11, 22] -> numerical sorted
```

The `sort()` method allow to abstract away the method of comparing individual elements.

## Predicates

> in programming it refers to a function which returnes either `true` or `false`

Instead of using this arbitrary functions names:

```js
const isEmpty = ... // 'is'
const hasKey = ... // 'has'
const areAvailable  = ... // 'are'
```

we could use this syntax:

```js
const emptyP = ... // P = predictable
const nullP = ... // (same as above)
const keyP = ... // (same as above)
```

There are some high-order functions that take predicates as input:
Using the JS `filter()` method, we are using predicates to decide whether to keep each item in or not.

