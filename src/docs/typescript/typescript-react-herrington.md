# TypeScript React Herrington

From tutorial [Typescript for React Components From Beginners to Masters](https://www.youtube.com/watch?v=z8lDwLKthr8&ab_channel=JackHerrington)

## Children with content other than `string`

When `children` is a string:

```jsx
function HeadingWithContent({ children } : { children: string }) {
  return <h1>{children}</h1>
}

function MyComponent() {
  return (
    <HeadingWithContent>
      I am a string!
    </HeadingWithContent>
  );
}
```

But if we try to pass an HTML element it will throw an error:

```jsx
<HeadingWithContent>
  <strong>I am strong</strong> {/* ERROR: Type 'Element' is not assignable to type 'string' */}
</HeadingWithContent>
```

so we have to declare the `children` property as `ReactNode`:

```jsx
function HeadingWithContent({ children } : { children: React.ReactNode }) {
  return <h1>{children}</h1>
}

function MyComponent() {
  return (
    <HeadingWithContent>
      <strong>I am strong</strong> {/* ok! */}
    </HeadingWithContent>
  );
}
```

The type of a returned React component is a `ReactElement`:

```jsx
function HeadingWithContent({ children } : { children: React.ReactNode }): React.ReactElement {
  return <h1>{children}</h1>
}
```