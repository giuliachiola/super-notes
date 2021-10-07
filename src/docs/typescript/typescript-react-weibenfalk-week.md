# TypeScript React - Weibenfalk

From tutorial [React with Typescript Week - Weibenfalk](https://www.youtube.com/playlist?list=PL0jpcQ5lO0nFRb4ecmZWr6wiW9zQ0Rv2j)

## Functional Component (= FC)

> A functional component is a function that takes props and returns JSX. They do not have state or lifecycle methods.

```jsx
// Card.tsx

import React from 'react';

const Card = () => (
  <Wrapper>
    <p>Card Component</p>
  </Wrapper>
);

export default Card;
```

to

```jsx
import React from 'react';

type Props = {
  name: string;
  imgUrl: string;
}

const Card: React.FC<Props> = ({name, imgUrl}) => (
  <Wrapper>
    <p>Card Component {name}</p>
    <img src={imgUrl} />
  </Wrapper>
);

export default Card;
```

or (without `React.FC`)

```jsx
import React from 'react';

type Props = {
  name: string;
  imgUrl: string;
  children: React.ReactNode; // without React.FC you have to specify `children`!
}

const Card = ({name, imgUrl, children}: Props) => (
  <Wrapper>
    <p>{name}</p>
    <img src={imgUrl}/>
  </Wrapper>
);
```

Note that `React.FC` implicity take care of `children` and you do not have to declarate them. Using instead the other syntax you have to explicitly declare it.

## `useState()` and types

If we want to add a type to our functional component states, we have to hover on `setCharacterId` and copy the type TS is suggesting

```jsx
type CharacterIdType = {
  characterId: number;
  setCharacterId: React.Dispatch<React.SetStateAction<number>
}

const Character: React.FC = ({ children }) => {
  const [characterId, setCharacterId] = useState(1); // hover on `setCharacterId`

  return (
    // ...
  )
};
```

Note that defining the initial state, an empty object is not accepted by TS:

```jsx
const App: React.FC = () => {
  const [character, setCharacter] = React.useState<Character>({}); // NOPE!
  // ....
}
```

```jsx
const App: React.FC = () => {
  const [character, setCharacter] = React.useState<Character>({} as Character); // added `as Character`
  // ....
}
```

In this case type `boolean` is implicit:

```jsx
const [isLoading, setIsLoading] = React.useState<boolean>(false); // NOPE, that's not necessary

const [isLoading, setIsLoading] = React.useState(false); // ok
```

## Use `<input>`

```jsx
const inputRef = React.useRef<HTMLInputElement>(null); // null by default
// ...
setCharacterId(Number(inputRef.current?.value)); // optional chaining to `current`
// ...
<input type="text" ref={inputRef} />
```
