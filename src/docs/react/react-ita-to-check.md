# React

## Appunti

- **render function**: dentro ad un file JS c'è un `return()` al cui interno c'è dell'HTML che viene restituito

- **children**: proprietà del componente che passa gli "slot", è un array quindi c'è un nodo per ogni componente

Commenti nelle pagine `.jsx`:

```js
{/* Set a canonical link for every page */}
```

Equivalente di `<template>` in VueJS, non esce nel markup:
```js
<React.Fragment>
  <p>{item.label}</p>
</React.Fragment>
```

esce
```
<p>{item.label}</p>
```

- High Order Component (HOC) -> prendo un componente, lo manipolo e lo trasformo in qualcos'altro (come cloudinary su vue), nota: gli styled componente *non* sono HOC.

## Parentesi

- graffe singole `{ ... }` -> c'è del JS all'interno
- graffe doppie `{{ ... }}` -> è un object literal passato dentro alle graffe singole `{..{ object literal }...}`


## Styled components

Commenti:

```js
${ /*  */'' }
```

Se c'è la classe parent:
```css
div[class^="styles__StoreLabel"] & { ... }
```

### Props negli styled components

- esempio n.1

```js
import styled from "styled-components";

const StyledButton = styled.button`
  color: yellow;
  /* The resulting background color will be based on the bg props. */
  background-color: ${props => props.bg === "black" ? "black" : "blue";
`;

function Profile() {
  return (
    <div>
      <StyledButton bg="black">Button A</StyledButton>
      <StyledButton bg="blue">Button B</StyledButton>
    </div>
  )
}
```

- esempio n.2

```js
export const LabelProduct = styled.p`
  ...

  ${props => {
      if (props.customFont) {
        return `
          font-family: 'Corporate S', sans-serif;
          letter-spacing: 0.06px;
        `
      }
    }};
`;
```

- esempio n.3

```js
import styled, { css } from 'styled-components';

export const Sizes = styled.div`
  ....

  ${ /* product page */'' }

  ${props => (props.productPage) && css`
    ...
  `}
`
```

### Funzionamento styled components

- esempio n.1

```js
<mycomponent as="button">....</mycomponent>

export const mycomponent = styled.div`.....`
```

render:
```js
<button>tag button avrà stili mycomponent</button>
```

- esempio n.2

```js
<mycomponent>....</mycomponent>

export const Button = styled.button`color: red;`

export const ButtonPrimary = styled(Button)`background-color: yellow;`
```

render
```js
<Button>tag button con stili mycomponent</Button>

<ButtonPrimary>avrà stili Button + override ButtonPrimary -> color: red, background: yellow</ButtonPrimary>
```

## Merge proprietà

Merge delle proprietà

```js
<p style={{...styles.paragraph, color: 'red' }}>
```

## useEffect

- simile al watcher di VueJS

```js
useEffect(() => {
  // ...
})
```

Eseguito a tutti i render dei componenti quando cambia `variable`:

```js
useEffect((newValue, oldValue) => {
  // ...
}[variable])
```

Se non c'è la variabile, viene eseguita *una* volta dopo il primo render, e poi non fa più niente:

```js
useEffect((newValue, oldValue) => {
  // ...
}[])
```

Quando invece ci sono _più_ variabili, allora è in OR (basta che cambi una delle due)

```js
useEffect((newValue, oldValue) => {
  // ...
}[a,b])
```

Nota: gli effect sono _asincroni_ quindi se ci serve sapere a che step siamo quando abbiamo due effects:
1. setto una variabile a true -> cambio il layout
2. setto un'altra variabile a true -> ri-cambio il layout
## useLayoutEffect

Viene eseguito prima della rendering pipeline.

useEffect:

- By default, effects run after every completed render, but you can choose to fire them only when certain values have changed.
- this runs after react renders your component and ensures that your effect callback does not block browser painting.

useLayoutEffect:

- This runs synchronously immediately after React has performed all DOM mutations.

## **Summary**

- **useLayoutEffect:** If you need to mutate the DOM and/or **do need** to perform measurements
- **useEffect:** If you don't need to interact with the DOM at all or your DOM changes are unobservable (seriously, most of the time you should use this).

## Context

Rispettivamente in VueJS si utilizza un event bus, dove i listener lo ascoltano.
### Provider
- propaga verso tutti
- è quello che parla
- wrapper attorno al contenuto

### Consumer
- ascolta la variabile che arriva dal context

## Link onclick

```html
<a href="#" onClick={() => {
              window.print();
              return false;
            }}
            style={{ marginRight: "20px" }} > ... </a>
```
