# React Fragments

Problem: how can we render two elements side-by-side?

JS can't return two values in a function, so this will NOT work:

```jsx
const helloElement = React.createElement('span', null, 'Hello')
const worldElement = React.createElement('span', null, 'World')
ReactDOM.render(helloElement, worldElement, document.getElementById('root')) // NOPE!
```

Fragment to the rescue!

Using `createElement` API (just to understand how it works under the hood):

```jsx
const helloElement = React.createElement('span', null, 'Hello')
const worldElement = React.createElement('span', null, 'World')

const element = React.createElement(
  React.Fragment,
  null,
  helloElement,
  worldElement,
)
ReactDOM.render(element, document.getElementById('root')) // OK! We are calling just one item, element
```

We can write the same thing with a better syntax (no need for wrapping `<div>`):

```jsx
const element = (
  <React.Fragment>
    <span>Hello</span> <span>World</span>
  </React.Fragment>
)
```

equivalent to

```jsx
const element = (
  <> {/* short syntax */}
    <span>Hello</span> <span>World</span>
  </>
)
```
