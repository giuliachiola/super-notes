# TypeScript React

From tutorial [Weibenfalk app quiz project](https://www.youtube.com/watch?v=SdOtuCdTdq8)

## Add `styled-components` for TS

```shell
npm i styled-components @types/styled-components
```

## Type for a button click event

```js
const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {...}
```

------


From tutorial [React with TypeScript Crash Course - Laith Harb](https://www.youtube.com/watch?v=jrKcJxF0lAU)

## Props

In this way, TS thinks that `List` is a `JSX.Element`

```jsx
const List = ({ people }: PeopleProps) => { ... }
```

a better way, is define `List` as a functional component:

```jsx
const List: React.FC<PeopleProps> = ({ people }) => { ... }
```

## Movies tutorial with TS

From tutorial [movies-app](https://www.youtube.com/watch?v=nTeuhbP7wdE&ab_channel=freeCodeCamp.org)


## Create new React app with TypesScript

```shell
npx create-react-app react-movies-ts --template typescript
npm i styled-components @types/styled-components
npm i history react-router-dom@next @types/react-router-dom
```

## Types

```js
export type Cast = {
  character: string
  credit_id: string
  name: string
  profile_path: string
}
```

can also be written  as

```js
export type Cast = {
  [property: string]: string // property is a string, value is a string
}
```

but ^^ this is NOT a best practice.

## Ignore TypeScript warnings

Use a comment + `@ts-ignore`

Example:

```jsx
import React from 'react';
// Routing
// @ts-ignore 
import { BrowserRouter as Router, Routes } from 'react-router-dom';

const App: React.FC = () => (
  <Router>
    <Routes>
      {/* @ts-ignore */}
      <Routes path='/' element={<Home />} />
      {/* @ts-ignore */}
      <Routes path='/:movieId' element={<Movie />} />
    </Routes>
  </Router>
)

export default App;
```

## Convert functions from JS to TS

```js
// helpers.js

export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
```

to TypeScript

```ts
// helpers.ts

export const calcTime = (time: number): string => {
  const hours: number = Math.floor(time / 60);
  const mins: number = time % 60;
  return `${hours}h ${mins}m`;
};
```

Note that the type of a state method:

```ts
const [searchTerm, setSearchTerm] = useState('') // note the default value is a string

...
type Props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>> // 'string' because of the default value type
}
```

## Pass prop types to styled-components

```js
import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';
// Type
type Props = {
  backdrop: string
}

export const Wrapper = styled.div<Props>`
  background: ${(props) =>
    props.backdrop
      ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop})`
      : '#000'};
  background-size: cover;
  ...
`;
```