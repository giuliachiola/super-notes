# `ref`

Vanilla tilt take DOM nodes and make React on these DOM nodes mouse hover.

```jsx
function Tilt({children}) {
  const tiltRef = React.useRef()
  console.log(tiltRef) // undefined, because DOM node does not exist yet

  React.useEffect(() => {
    const tiltNode = tiltRef.current
    console.log(tiltRef) // here it exists!
  })

  return (
    <div ref={tiltRef} className="tilt-root"></div>
  )
}
```
