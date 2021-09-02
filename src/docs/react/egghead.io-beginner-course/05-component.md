# React reusable component

Note: Message render function have to be Capitalized.

```jsx
const Message = (props) => <div className="message">{props.msg}</div>

const element = (
  <div className="container">
    {Message({msg: 'Hello World'})}
    {Message({msg: 'Goodbye'})}
  </div>
)
```

is the same as using JSX

```jsx
const Message = (props) => <div className="message">{props.msg}</div>

const element = (
  <div className="container">
    <Message msg="Hello World" />
    <Message msg="Goodbye" />
  </div>
)
```

and they will rendered in browser

```html
<div class="container">
  <div class="message">Hello World</div>
  <div class="message">Goodbye</div>
</div>
```

Note that this syntax

```jsx
<Message>Hello World</Message>
```

is the same as call `React.createElement` with the function that you are referencing, and that allows you to create a custom component that you can use and reuse.


We can also accept `children` as props:

```jsx
const Message = (props) => <div className="message">{props.children}</div>

const element = (
  <div className="container">
    {/* These two are funcionally equivalent */}
    <Message>Hello World</Message> {/* <-- Nicer :) */}
    <Message children="Goodbye" />
  </div>
)
```

Using `children` we can pass anything we want to the component, e.g.

```jsx
const Message = (props) => <div className="message">{props.children}</div>

const element = (
  <div className="container">
    <Message>
      Hello World
      <span>Hey there!</span>
      <Message>Goodbye</Message>
    </Message>
  </div>
)
```
