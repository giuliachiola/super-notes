# TypeScript React

Create a new project

```shell
npx create-react-app my-app --template typescript
```

Example of component with typescript

```tsx
// Header.ts

export interface Props {
  title: string;
  color?: string;
}

const Header = (props: Props) => {
  return (
    <header>
      <h1 style={{ color: props.color ? props.color : "blue" }}>
        {props.title}
      </h1>
    </header>
  );
};

export default Header;
```

## Add TS in React component

from

```jsx
import React from "react";

export const TextField: React.FC = () => {
  return (
    <div>
      <input />
    </div>
  );
};
```

to

```jsx
import React from "react";

export const TextField: React.FC<{ text: string }> = () => {
  return (
    <div>
      <input />
    </div>
  );
};
```

or using `interface`:

```jsx
import React from "react";

interface Props {
  text: string;
}

export const TextField: React.FC<Props> = () => {
  return (
    <div>
      <input />
    </div>
  );
};
```

Using `ctrl`+`space` on the parent component, we can see all available props of the child:

```jsx
// App.js

function App() {
  return (
    <div className="App">
      <TextField /> {/* <---- ctrl+space here!! */}
    </div>
  );
}
```

### TS with `useState()`

```jsx
const [count, setCount] = useState<number | null>(5)
setCount(null)
```

or using `interface`

```jsx
interface TextNode {
  text: string
}

const [myString, setMystring] = useState<TextNode>({ text: 'hello' })
setMystring('hey!')
```

### TS with `useRef()`

```jsx
...
const inputRef = useRef<HTMLInputElement>(null)

return (
  <div>
    <input ref={inputRef} />
  </div>
)
```

## Multiple types definition

```jsx
type Actions =
  | {
      type: 'add';
      text: string
    }
  | {
      type: 'remove';
      idx: number;
    }
```

### Example

```jsx
import React, { useState } from "react";

interface Props {
  children: (
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
  ) => JSX.Element | null
}

export const Counter: React.FC<Props> = ({children}) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {children(count, setCount)}
    </div>
  )
}
```

## `react-app-env.d.ts`

The `react-app-env.d.ts` references the types of `react-scripts`, and helps with things like allowing for SVG imports.
This file references TypeScript types declarations that are specific to projects started with Create React App.

It also adds support for importing CSS Modules. This relates to import of files with `.module.css`,`.module.scss`, and `.module.sass` extensions.

Do not remove the react-app-env.d.ts file to avoid errors.

```js
// react-app-env.d.ts

/// <reference types="react-scripts" />
```