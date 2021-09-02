# Validate props with `propTypes`

```jsx
function SayHello({firstName, lastName}) {
  return (
    <div>
      Hello {firstName} {lastName}!
    </div>
  )
}

const element = <SayHello firstName={false} /> // this is an incorrect use of the 'firstName' prop
```

## `propTypes`

This snippet is contained in a global package named 'propTypes', so we do not have to write it every single time.

```jsx
function SayHello(...)

SayHello.propTypes = {
  string(props, propName, componentName) {
    if (typeof props[propName] !== "string") {
      return new Error(
        `props: ${props}, propName: ${propName}, componentName: ${componentName}`
      );
    }
  },
};

const element = <SayHello firstName={false} /> // this will throw the Error above ^^
```

To write a DRY code, we can use the library [propTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

```jsx
SayHello.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
}
```

Note that `propTypes` by default is not required, so if we need it we have to declare it

```jsx
SayHello.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
}
```

To not impact app speed performance, in production mode `propTypes` are not applied. If we want to _remove_ `propTypes` snippets to streamline our code, then we have to install an external package [babel-plugin-transform-react-remove-prop-types](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types#readme)
