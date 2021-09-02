# Styles

`className` is the DOM property we normally access using the HTML `class` attribute on DOM nodes.

If we have an HTML element

```html
<div class="box box--small">...</div>
```

and we select it in a browswer we will see

```js
$0.className
// returns
"box box--small"
```


## `className` merge

```jsx
const element = (
  <div>
    <div
      className="box box--small"
      style={{ fontStyle: 'italic', backgroundColor: 'lightblue' }}>
      small lightblue box
    </div>
  </div>
)
```

Using a functional component:

```jsx
function Box(props) {
  return (<div className="box" {...props} />)
}

const element = (
  <div>
    <Box
      className="box--small" {/* in this way, className will override the previous className 'box' */}
      style={{ fontStyle: 'italic', backgroundColor: 'lightblue' }}>
      small lightblue box
    </Box>
  </div>
)
```

To use multiple `className` properties, we have to separate props in this way

```jsx
function Box({ className = '', ...rest }) { {/* separate className from the rest of the props */}
  return (
    <div className={`box ${className}`} {...rest} />
  )
}
```

## `style` merge

```jsx
function Box(className = '', ...rest) {
  return (
    <div
      className={`box ${className}`}
      style={{ fontStyle: 'italic' }}
      {...rest} {/* 'rest' have to be the last item declared */}
    />
  )
}

const element = (
  <div>
    <Box
      className="box--small"
      style={{ backgroundColor: 'lightblue' }}> {/* in this way, style will override previous styles! */}
      small lightblue box
    </Box>
  </div>
)
```

To fix it, we have to merge properties

```jsx
function Box(className = '', style, ...rest) {
  return (
    <div
      className={`box ${className}`}
      style={{ fontStyle: 'italic', ...style }} {/* add 'style' spread here */}
      {...rest}
    />
  )
}

const element = (
  <div>
    <Box
      className="box--small"
      style={{ backgroundColor: 'lightblue' }}> {/* in this way, style will override previous styles! */}
      small lightblue box
    </Box>
  </div>
)
```

We can also use `props` as an object, and merge styles easily

```jsx
function Box(className = '', style, size, ...rest) {
  const sizeClassName = size ? `box--${size}` : ''
  const props = {
    className: `box ${className} ${sizeName}`, {/* note that 'class' is a reserved keyword, we can't use it! */}
    style: { ...style, { fontStyle: 'italic' } },
    ...rest,
  }

  return (
    <div {...props} />
  )
}
```
