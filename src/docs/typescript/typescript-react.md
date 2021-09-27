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
