# Form event

When you submit a form in the browser, automatically it do a push request to the current URL with the form data.

If you want to prevent it, you have to

```jsx
function userNameForm(event) {
  function handleSubmit(event) {
    event.preventDefault()
  }
}
```

To get input value and print it out in an alert message we have several ways:

```jsx
function userNameForm(event) {
  function handleSubmit(event) {
    event.preventDefault()
    // 1. DO NOT use it, it can have lot of side-effects (it breaks incapsulation about components)
    const username = document.querySelector('input').value
    // 2. DO NOT use it, because it relies on DOM nodes order (<input> before <label>)
    const username = event.target[0].value
    const username = event.target.elements[0].value
    // 3. OK! It uses 'htmlFor' attribute binding between <label> and <input>
    const username = event.target.elements.usernameInput.value
    /*
      ...
      <label htmlFor="usernameInput">Username:</label>
      <input id="usernameInput" type="text">
    */
   // 4. using 'ref'
   const username = usernameInputRef.current.value
  /*
    ...
    <label htmlFor="usernameInput">Username:</label>
    <input ref={usernameInput} id="usernameInput" type="text">
  */

  }
}
```

Probably the 3rd is the cleanest solution, as far as we already have to add `htmlFor` + `id` for accessibility reasons.
