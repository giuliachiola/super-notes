# React (Max Schwarzmüller)

From "React Crash Course for Beginners 2021" [video](https://www.youtube.com/watch?v=Dorf8i6lCuk&ab_channel=Academind)

## Function

React components have to be capitalized, in order to stand out from native HTML elements.

```js
function App() {
  return (
    <Todo /> // OK!
    <todo /> // NOPE
  )
}
```

## Props

`props` is an object with key:value pairs.

```js
function Todo(props) {
  // ...
}
```

## Interpolation

Into the interpolation we can have expression but can _NOT_ have statements (e.g. `if`, `which` etc.)

```js
<h2>{ ...... }</h2>
```

## Methods

On the click event, we want to call `deleteHandler` function defined above in the code:

```js
<button onClick={deleteHandler}>Delete</button>
```

DOT USE parenthesis like `deleteHandler()`

```js
<button onClick={deleteHandler()}>Delete</button>
```

because in this way deleteHandler function will be executed as soon as JavaScript and React evaluates that line of code.
