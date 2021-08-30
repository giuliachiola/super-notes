# Events

```jsx
function App() {
  function handleClick(event) {
    console.log(event) {/* this will output a Syntetic Event (react event) and not a Native event */}
    setState({ eventCount: state.eventCount + 1 })
  }
}

return (
  <div>
    <button onClick={ handleClick }>Click me</button>
  </div>
)
```

## Syntetic event

This will output a Syntetic Event (react event) and not a Native event.

```jsx
function handleClick(event) {
  console.log(event)
  setState({ eventCount: state.eventCount + 1 })
}
```

If we need a native event, we have to use

```jsx
console.log(event.nativeEvent)
```
