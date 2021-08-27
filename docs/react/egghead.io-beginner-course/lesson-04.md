
## Lesson 04 | Create a User Interface with React’s JSX syntax

This is *NOT* JavaScript code, but it is JSX 

```jsx
const element = <div className="container">Hello World</div>;
```

but the browser will not understand this ^^ and will throw an error like

```md
Uncaught SyntaxError: Unexpected token '<'
```

Babel comes in our support to transpile JSX to something comphrensible by the browser: 

[Babel transpile](https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAJgSwDcZgEBDCCAOTNQwCJR0z8w4AnegPgAlEEQMAOoh2CXNgD0BQlwDcQA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact&prettier=false&targets=&version=7.15.3&externalPlugins=&assumptions=%7B%7D)

and transform this

```jsx
const element = <div className="container">Hello World</div>;
```

to

```jsx
"use strict";

const element = React.createElement(
  "div", // type
  { // props
    className: "container" // prop name
  },
  "Hello World" // children
);
```

So if we want to use Babel on the fly in the browser, we have to use

```html
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/browse/babel-standalone@6.26.0/babel.js"></script>

  <script type="text/babel">
    // code goes here! Note the "type" ^^
  </script>
</body>
```

but keep in mind that use Babel in the browser on the fly drastically slow down your application.

## Lesson 04 | Create a User Interface with React’s JSX syntax

Interpolation: everything between curly braces should be a JavaScript expression, that will be evaluated and its resulting value will be used in its current position.

```jsx
const rootElement = document.getElementById('root')
const children = 'Hello World'
const element = <div className="container">{children}</div>
ReactDOM.render(element, rootElement)
```

We could use it also for the class name:

```jsx
const rootElement = document.getElementById('root')
const children = 'Hello World'
const className = 'container'
const element = <div className={className}>{children}</div>
ReactDOM.render(element, rootElement)
```

### The `children` prop

1. Pass `children` in this way

```js
const element = <div className={className}>{children}</div>
```

will be compiled to

```js
var element = React.createElement("div", {
  className: className
}, children)
```

2. Pass `children` in this other way

```jsx
const element = <div className={className} children={children}></div>
```

will be compiled to

```js
var element = React.createElement("div", {
  className: className,
  children: children // Note `children` is an object key
})
```

### JSX syntax

Self-closing `<div>` tag e.g.

```jsx
const element = <div className={className} children={children} />xw
```

Use props as object like that

```jsx
const props = {children, className}
const element = <div {...props} />
```

will be compiled to

```js
var props = {
  children: children,
  className: 'container'
};

var element = React.createElement("div", props); // props passed directly here
```

We can add other props in this way:

```jsx
const element = <div id="app-root" {...props} className="not-container"/>
```

and it will be compiled to

```html
<div id="app-root" class="not-container">Hello World</div>
```

because props are inherited, but class name was overwritten by `className="not-container"`.
Whatever comes last, is the winner.
