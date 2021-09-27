# React (Max Schwarzmüller)

From "React Crash Course for Beginners 2021" [video](https://www.youtube.com/watch?v=Dorf8i6lCuk&ab_channel=Academind)

## Function

React components have to be capitalized, in order to stand out from native HTML elements.

```js
function App() {
  return (
    <Todo /> // OK!
    <todo /> // NOPE
  )
}
```

## Props

`props` is an object with key:value pairs.

```js
function Todo(props) {
  // ...
}
```

## Interpolation

Into the interpolation we can have expression but can _NOT_ have statements (e.g. `if`, `which` etc.)

```js
<h2>{ ...... }</h2>
```

## Methods

On the click event, we want to call `deleteHandler` function defined above in the code:

```js
<button onClick={deleteHandler}>Delete</button>
```

DOT USE parenthesis like `deleteHandler()`

```js
<button onClick={deleteHandler()}>Delete</button>
```

because in this way deleteHandler function will be executed as soon as JavaScript and React evaluates that line of code.

## JSX

In JSX we can write self-closing tags if there is no content in between:

```js
function Backdrop() {
  return <div className="backdrop" />;
}
```

## `useState`

`useState` is a function exposed from the `react` library:

```js
import { useState } from "react";
```

With `useState` we register different states in our React application.

`useState` is a React Hook, and can only be called inside React component functions and in custom hooks.

```js
const [CURRENT_STATE_SNAPSHOT, FN_TO_CHANGE_STATE] = useState(DEFAULT_STATE);
```

**IMPORTANT** about `State`: every time a React state will change, all the React component will be re-evaluated from the top. So pay attention with state and `fetch()` data (asyncronous).

Keep in mind that all React component _must_ be syncronous to work correctly.

## Click events

If I want to close the Modal clicking on the backdrop, I have to create the customize click event, because `<Backdrop>` is not a native component so it has not the `onClick` method, and pass it via props:

```js
// App.js

{
  modalIsOpen && <Backdrop onClick={closeModalHandler} />;
}
```

```js
// Backdrop.js

function Backdrop(props) {
  return <div className="backdrop" onClick={props.onClik} />;
}
```

## Routing

```js
// index js

...
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

React router matches _all_ routes, so using this code

```js
// App.js

function App() {
  return (
    <div>
      <Route path="/">
        <AllMeetupsPage />
      </Route>
      <Route path="/favorites">
        <FavoritesPage />
      </Route>
    </div>
  );
}
```

at this URL http://localhost:3000/favorites we are going to match both, because this URL has both `/` and `/favorites`

If we do not want this behavior, we have to use a `Switch`:

```js
// App.js

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}
```

`Switch` stops at the first match. We have to add `exact={true}` to match the full path.

Note that this two syntax are equivalent:

1.

```js
<Route path="/" exact={true}>
  <AllMeetupsPage />
</Route>
```

2.

```js
<Route path="/" exact>
  <AllMeetupsPage />
</Route>
```

## Links in React

Using the "standard" way with an anchor tag `<a>`, by clicking it we are:

- sending a request to the server
- the server (here it's our React application) will respond with the hosted React application
- and the server will reply with the application
- then the router figure out with route has to load

All of this is redundant, as we already are in our React application.

```js
function MainNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <a href="">Link text</a>
        </li>
      </ul>
    </nav>
  );
}
```

Use instead the `Link` component from the `react-router-dom` package:

```js
import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link>Link text</Link>
        </li>
      </ul>
    </nav>
  );
}
```

The `Link` component render the `<a>` tag at the end, but internally `react-router-dom`:

- attaches a click listener to the anchor tag
- and when you click on it will prevent the browser default to send a request
- instead just parse the URL you want to go to
- change the browser URL bar but not send the request
- instead it loads the appropriate component on the screen just with React and JavaScript

## CSS modules

- File have to be named `[componentname].module.css`
- They do not affect any other components
- Behind the scenes we can attach custom CSS styles just to this component

`classes` is a JavaScript object where all the CSS classes.

```js
// MainNavigation.js

import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <nav className={classes.header}>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        ...
      </ul>
    </nav>
  );
}

export default MainNavigation;
```

```css
/* MainNavigation.module.css */

.header {
  color: red;
}
```

will be rendered in HTML to:

```html
<nav class="header">...</nav>
```

## Form events

Prevent default submit and handle on our own:

```js
// Form.js

function NewMeetupForm() {
  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      ...
      <button>...</button>
    </form>
  );
}
```

## `fetch()`

`fetch()` by default sends a `GET` request:

```js
function addMeetupHandler(meetupData) {
  fetch(".../meetups.json");
}
```

Using **Firebase**:

- create a new project
- create new database
- copy the DB link
- add `[filaname].json` at the end to use it in your code

```js
fetch("https://[FULL_LINK_HERE].firebaseio.com/meetup.json");
```

### use POST with `fetch()`

```js
function addMeetupHandler(meetupData) {
  fetch(".../meetups.json", {
    method: "POST",
    body: JSON.stringify(meetupData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
```

Note that `fetch()` returns a Promise:

```js
function addMeetupHandler(meetupData) {
  fetch(
    '.../meetups.json',
    {
      ...
    }
  ).then(() => {
    history.replace('/') // go to homepage
  })
}
```

## History

`history.push()` pushes to the stack of pages

## `useEffect()`

`useEffect` is used to run a piece of code under certain conditions.

## No dependencies `[]`

This code will be executed just the first time, because React has any dependencies to compare with their value on the previous evaluation cycle.

```js
useEffect(() => {
  // this code will be executed just the first time
}, []);
```

## State management

- Redux
- or (built in) Context

`createContext()` contains a React component

```js
// favorites-context.js

import { createContext } from "react";

const FavoriteContext = createContext();
```

**IMPORTANT**

React schedules updates, they are not instantly evaluated.

Doing this will probably trigger some side effects:

```js
const [userFavorites, setUserFavorites] = useState([]);

function addFavoriteHandler(favoriteMeetup) {
  setUserFavorites(userFavorites.concat(favoriteMeetup)); // NOPE!
}
```

Do this instead:

```js
const [userFavorites, setUserFavorites] = useState([]);

function addFavoriteHandler(favoriteMeetup) {
  setUserFavorites((prevUserFavorites) => {
    return prevUserFavorites.concat(favoriteMeetup); // OK!
  });
}
```

^^ In this way, you are absolutely sure that you are working on the latest state snapshot.

## Export notation

If we want to import a **default export** we DO NOT have to wrap export name in curly brackets:

```js
// MeetupList.js

function MeetupList(props) {
  return <div>...</div>;
}

export default MeetupList;
```

```js
import MeetupList from "../components/meetups/MeetupList"; // no curly brackets!

function AllMeetupsPage() {
  ...
}
```

Instead, if we want to import a **named export**, we have to wrap it:

```js
// store/favorite-context.js

const DefaultExportName = function () { ... }

export function NamedExport(props) {
  // ...
}

export default DefaultExportName
```

```js
import { NamedExport } from "./store/favorites-context";
```

## `useContext` hook

`useContext` is used to enstablish a connection between application context and the React component:

```js
import { useContext } from "react";

function MeetupItem(props) {
  const ctx = useContext(FavoritesContext);
  // ...
}
```
