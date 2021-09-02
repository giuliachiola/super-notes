# `useState`

Note that `htmlFor` stands for HTML `for` attribute:

```jsx
<label htmlFor="myInput">Custom label</label>
<input id="myInput" type="radio"/>
```

In React we can't use a function like this below, because the whole function would be re-rendered. And also if it will be re-rendered, then the `name` will be gargage collected and create a new `name` variable.

```jsx
function Greeting() {
  ...
  const handleChange = event => name = event.target.value {/* NOPE! */}
}
```

React use `hooks` for this.

```jsx
function Greeting() {
  const stateArray = React.useState('') {/* returns an array */}
  const name = stateArray[0]
  const setName = stateArray[1]
}
```

but there is a better way to write this:

```jsx
function Greeting() {
  const [name, setName] = React.useState('') {/* returns an array */}
}
```

`useState` values:
- `[0]`: first value in the array is the variable name, with its initial value as an empty string `useState('')`
- `[1]`: function that set the value to the variable
