# TypeScript - EggHead.io

From tutorial [TypeScript for React Developers - Shawn Wang](https://egghead.io/lessons/react-refactor-a-react-typescript-function-component-into-a-class-component-with-defaultprops)

## Types

```ts
type MyProps = {
  // ---- BASIC ----
  message: string;
  disabled: boolean;

  // ----  ARRAY OF A TYPE ----
  count: number[];
  names: string[];

  // ----  STRING LITERALS ----
  // specify exact string values, with a union type to join them togheter
  status: 'waiting' | 'success' | 'failed';

  // ----  OBJECTS ----
  // any objects (not recommended)
  obj: object;
  obj2: {};
  // object with defined properties (preferred)
  obj3: {
    id: number;
    title: string;
  }
  // array of objects
  objArr = {
    id: number;
    title: string;
  }[] // note the array notation

  // ----  FUNCTIONS ----
  // any function as long as you don't invoke it (not recommended)
  onSomething: Function;
  // function that doesn't take or return anything
  onOtherSomething: () => void;
  // function with named prop
  onChange: (id: number) => void
}
```

## Types for `children`

When the component has **one** child, we can type it as:

```tsx
type MyProps = {
  children: string | JSX.Element
}

function Button(props: MyProps) {
  return <Button {...props}>{props.children}</button>
}

function Wrapper() {
  return (
    <Button>
      <span>Hello I am the child</span>
    </Button>
  )
}
```

but if we have multiple children:

```tsx
type MyProps = {
  children: string | JSX.Element[] // array notation
  // or (they are equivalent)
  children: React.ReactChild[]
  // or (they are equivalent)
  children: React.ReactNode
}

function Button(props: MyProps) {
  return <Button {...props}>{props.children}</button>
}

function Wrapper() {
  return (
    <Button>
      <span>Hello I am the child n.1</span>
      <span>Hello I am the child n.2</span>
      <span>Hello I am the child n.3</span>
    </Button>
  )
}
```

## Intersecate props

For instance, we want a `Button` component with native props (e.g. `onClik`) and custom props (e.g. `label`). To check all native `< button>` properties, hover on the HTML tag.

```jsx
type MyProps = {
  label: string;
}

const Button = (
  props: MyProps & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) => (
  <button {...props}>{props.label}</button>
)

// ...
// now we can use native `style` prop and `onClick`
return (
  <Button label='text label' style={{ backgroundColor: 'coral' }} onClick={}>
)
```

## Popup comments in class components

In class components only, we can have hoverable popup comments on hover:

```tsx
type MyProps = {
  /**
   * This is a comment
   * second line comment
   *
   * ## heading 2
   */
  message: string;
};
class App extends React.Component<MyProps> {
  render() {
    return (
      <div>
        {this.props.message} {/* HOVER HERE in a real .tsx file! */}
      </div>
    );
  }
}
```

## Event handlers types

We can define the type of the _event_ as `React.ChangeEvent`

```tsx
handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { ... }
// ...
<input type="text" onChange={handleChange}/>
```

or we can re-write it defining the type of the _event handler_:

```tsx
handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => { ... }
// ...
<input type="text" onChange={handleChange}/>
```
