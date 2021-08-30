# Error boundaries

Error boundaries have to be class components:

```jsx
class ErrorBoundary extends React.Component {
  state = { error: null }

  // 'getDerivedStateFromError' catches errors and update your state with the error
  static getDerivedStateFromError(error) {
    return {error}
  }

  render () {
    const {error} = this.state

    if (error) {
      return <div>Oh no!</div>
    }

    // return its children, that way we can wrap other elements with it
    return this.props.children
  }
}

function App() {
  ...
  <ErrorBoundary>
    ...
  </ErrorBoundary>
}
```

Note: first letter in component's name have to be capitalized e.g.

```jsx
<ErrorBoundary>
  ...
</ErrorBoundary>
```

but if component name contains dots, React understands it e.g.

```jsx
<this.props.FallbackComponent error={error} />
```

Note that it is important where we use the error component. If we wrap all application code into the `ErrorBoundary` component, then all application will be replaced by the fallback component.
