# React

## How to install

To create a React app into the current working directory, run

```shell
npx create-react-app .
```

## VSC plugins

[VSC extension](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

typing `rfc` this extension will write

```shell
import React from 'react'

export default function TodoList() {
  return (
    <div>

    </div>
  )
}
```

## Fragment element

We can't return multiple items in a single `return` object, so this will throw an error

```jsx
import TodoList from './TodoList'

function App() {
  return (
    <TodoList />
    <input type="text" />
  );
}

export default App;
```

add a React fragment instead

```jsx
import TodoList from './TodoList'

function App() {
  return (
    <>
      <TodoList />
      <input type="text" />
    </>
  );
}

export default App;
```

## Loop `key`

`key` allows React to only re-render or change components that actually change inside our array, instead of re-rendering _all_ of them every single time.

```jsx
// todos = ['apple', 'banana', 'peach']

export default function TodoList(todos) {
  return (
    todos.map(todo => {
      return <Todo key={todo} todo={todo} />
    })
  )
}
```

## Get value from input using `useRef`

```jsx
import { useRef } from 'react'

function App() {
  ...
  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value {/* get the input text value */}
  }

  return (
    <>
      ...
      <input ref="todoNameRef" type="text" />
      ...
    </>
  );
}
```

## props

Pass all props:

```jsx
export default function PokemonList(props) {
  return (
    ...
  )
}
```

or (better way) destructuring props we need:

```jsx
export default function PokemonList({pokemon}) {
  return (
    <div>

    </div>
  )
}
```
