# Egghead.io beginner React course

https://egghead.io/courses/the-beginner-s-guide-to-react

## Lesson 01-02 | A Beginners Guide to React Introduction

- `npx` is bounded with `npm`
- run a local server:

```shell
npx browser-sync start --server --files "./*.html" --no-open --no-notify --directory
```

## Lesson 03 | Create a User Interface with React’s createElement API

https://egghead.io/lessons/react-create-a-user-interface-with-react-s-createelement-api

- Use [unpkg](https://unpkg.com/) to load easily `react` from npm using a `<script>` tag

```html
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>

  <script type="text/javascript">
    // write JS here 
  </script>
</body>
```

Create DOM nodes in a classic way VS using React

- classic way

```jsx
const rootElement = document.getElementById("root");
const element = document.createElement("div");
element.textContent = "Hello World";
element.className = "container";
rootElement.appendChild(element);
```

- using React API: creates React element, but it is different from 'createElement'.

Differences:
- in React specify properties on elment creation
- property `textContent` -> property `children`

```js
const rootElement = document.getElementById('root');

const element = React.createElement ('div', {
  children: 'Hello World',
  className: 'container'
})

console.log(element)
// $$typeof: Symbol(react.element)

ReactDOM.render(element, rootElement)
```

you can also write children ('Hello World') as second argument

```js
const element = React.createElement ('div', {
  className: 'container'
}, 'Hello World! ', 'Goodbye World! ')
```

or use the `children` array direcly

```js
const element = React.createElement ('div', {
  children:  ['Hello World! ', 'Goodbye World! '],
  className: 'container'
})
```

Note that children can also have children

```js
const element = React.createElement ('div', {
  children: React.createElement('span', null, 'Hello', 'World'), // props = null
  className: 'container'
})
```

## Lesson 04 | Create a User Interface with React’s JSX syntax

