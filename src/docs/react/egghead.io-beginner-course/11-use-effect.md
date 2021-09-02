# `useEffect`

This hook is called everytime the component is re-rendered and also called on the initial mount.

```jsx
React.useEffect(() => {
  window.localStorage.setItem('name', name)
})
```

- type a name into the input `name`,
- label will updated instantly
- the new name is saved in local storage

We want to read local storage just the first time, not every time we will update the component (every time we type a letter in the input box).

To do that, we have to use the `useEffect`'s lazy inizialization feature by providing a function as the initial value. In this way the value is only ran on initialization and not on each rerender.

```jsx
function Greeting () {
  const [name, setName] = React.useState(
    () => window.localStorage.getItem('name') || ''
  )
}
```

## `useEffect` dependency array

Its purpose is to sync the state of the world with the state of our application.

```jsx
React.useEffect(() => {
  window.localStorage.setItem('name', name)
}, [name]) {/* <-- this is the dependency array */}
```

In that way, we synchronize our localStorage when the `name` variable is updated.

## Custom hooks

```jsx
function useLocalStorageState(key, defaultValue = '') {
  const [state, setState] = React.useState(
    () => window.localStorage.getItem(key) || defaultValue,
  )

  React.useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [key, state]) {/* we have to add dependencis here */}

  return [state, setState]
}

function Greeting() {
  const [name, setName] = useLocalStorageState('name')
  ...
}
```

## Hooks flow

Note that `useEffect` functions are called after React finishes rendering, so the call stack order is:

- render start
- `useState` callback (set initial values)
- render end
- `useEffect`s functions

At the second render, when the app changes, we have

- render start
- NOPE! -> `useState` callback is not called because we already have our initial state loaded
- render end

Note:
React will only call a function when the component is actually rendered. You aren't calling the functions, React is. We already have our state initial value, so we do not need to retrieve it again.

Note:
`useEffect` is only called when there are no dependencies listed or one of the dependencies change.
