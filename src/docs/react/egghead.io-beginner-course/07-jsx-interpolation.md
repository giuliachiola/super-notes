# JSX interpolation

```jsx
// Text "Hello World" has 11 chars
// Text "" has no chars

function CharacterCount({text}) {
  return (
    <div>
      {`The text "${text}" has ${text.length} chars`}
    </div>
  )
}

const element = (
  <>
    <CharacterCount text="Hello World" />
    <CharacterCount text="" />
  </>
)

ReactDOM.render(element, document.getElementById('root'))
```

This will render in

```html
<div>The text "Hello World" has 11 chars</div>
<div>The text "" has 0 chars</div>
```

If we want the characters count in bold, we have to update it in

```jsx
function CharacterCount({text}) {
  return (
    <div>
      {`The text "${text}" has`} <strong>{text.length}</strong> chars
    </div>
  )
}
```

If we want to show "no chars" when the text length is equal to 0, and to use the bold just for the numbers >= 0 then we have to update the code:

```jsx
function CharacterCount({text}) {
  return (
    <div>
      {`The text "${text}" has`}
      {text.length ? <strong>{text.length}</strong> : 'no'}
      {' chars'}
      {/* we interpolate it to force the whitespace before the word */}
    </div>
  )
}
```

Note that we are writing a mix of JS and JSX:

```jsx
// JS
function CharacterCount({text}) {
  return (
    // JSX
    <div>
      {`The text "${text}" has`}
      {/* JS inside interpolation */}
      {text.length ? <strong>{text.length}</strong> : 'no'}
      {' chars'}
      {/* we interpolate it to force the whitespace before the word */}
    </div>
  )
}
```
