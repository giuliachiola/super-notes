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