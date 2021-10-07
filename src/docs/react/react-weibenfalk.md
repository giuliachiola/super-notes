# React Weibenfalk

From tutorial [movies-app](https://www.youtube.com/watch?v=nTeuhbP7wdE&ab_channel=freeCodeCamp.org)
##  React `styled-components`

```js
// src/GlobalStyle.js

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #FFF;
  }

  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
```

+

```js
// App.js

import React from 'react';
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <div>
    <AllComponentsHere />
    <GlobalStyle />
  </div>
);

export default App;
```

## Custom hooks

Custom hooks should be named with `use` prefix and camelCase.

Example:

```js
// src/hooks/useHomeFetch.js

import { useState, useEffect } from 'react'
import API from '../API'

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
}

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false)
      setLoading(true)

      // ...
    } catch (err) {
      setError(true)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchMovies(1)
  }, [])

  return { state, loading, error }
}
```

+

```js
// src/components/Home.js

import React from "react";
import { useHomeFetch } from '../hooks/useHomeFetch' // import custom hook

const Home = () => {
  const { state, loading, error } = useHomeFetch() // use custom hook

  return (
    // ...
  )
}

export default Home
```

## Pass `props` in styled-components

```js
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${(props) =>
    `linear-gradient(
      to bottom, rgba(0,0,0,0)
      39%,rgba(0,0,0,0)
      41%,rgba(0,0,0,0.65)
      100%
    ),
    url('${props.image}'), var(--darkGrey)`};
  background-size: 100%, cover;
  background-position: center;
  ...
`;
```


### Destructuring `props` in styled-components

```js
import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div`
  background: ${(props) =>
    props.backdrop
      ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop}')`
      : '#000'};
  ...
`;
```

## Cleanup after render inside `useEffect()`

The function inside the `return`will be triggered each time before the next render

```js
useEffect(() => {
  effect
  return () => {
    cleanup
  }
}, [input])
```

## How to add a timeout function in a `useEffect()`

```js
useEffect(() => {
  // add delay
  const timer = setTimeout(() => {
    setSearchTerm(state)
  }, 500)

  // cleanup timer at each render
  return () => clearTimeout(timer)
}, [state, setSearchTerm])
```

## How to skip initial render using a `useRef()` trick

If we do not want a `useEffect` is triggered at mount, we can use a `useRef`

```js
const SearchBar = ({ setSearchTerm }) => {
  const initial = useRef(true) // -> initial.current = true

  useEffect(() => {
    if (initial.current) { // at first render only, this is `true`
      initial.current = false
      return
    }

    // ...
  }, [])

  return (
    // ...
  )
}
```

## Basic React routing using 'react-router-dom'

```js
// src/App.js

import React from 'react';
// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pages
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

const App = () => (
  <Router>
    {/* header is out of routing, it is present in all pages */}
    <Header />

    <Routes>
      <Routes path='/' element={<Home />} />
      <Routes path='/:movieId' element={<Movie />} />
      <Routes path='/*' element={<NotFound />} />
    </Routes>
  </Router>
)

export default App;
```

```jsx
// src/components/Thumb/index.js

import React from "react";
import { Link } from 'react-router-dom'

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {
      clickable ? (
        <Link to={`/${movieId}`}>
          <img src={image} alt='movie-thumb' />
        </Link>
      ) : (
        <img src={image} alt='movie-thumb' />
      )
    }
  </div>
)

export default Thumb
```

## Get route params

```js
// App.js

const App = () => (
  <Router>
    <Header />

    <Routes>
      <Routes path='/' element={<Home />} />
      <Routes path='/:movieId' element={<Movie />} /> {/* note the parameter name */}
      <Routes path='/*' element={<NotFound />} />
    </Routes>
  </Router>
)
```

For example at url `http://localhost:3000/580489` -> `movieId` = `580489`

```js
// MoviePage.js

import React from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { movieId } = useParams() // use `moveId` here!

  return (
    <>
      <div>Movie { movieId }</div>
    </>
  )
}

export default Movie
```

## `useEffect()` callback notes

If we declare the function `fetchMovie` _inside_ a `useEffect()`, the function will bi triggered (as expected) each time `movieId` changes.

```js
import { useState, useEffect } from 'react'

export const useMovieFetch = movieId => {
  // ...

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        // stuff
      } catch (error) {
        // error stuff
      }
    }

    fetchMovie()
  }, [movieId])

  // ...
}
```

**BUT** if we want to move the function `fetchMovie` outside the `useEffect()` like this

```js
import { useState, useEffect } from 'react'

export const useMovieFetch = movieId => {
  // ...

  // declare the function OUTSIDE of the `useEffect()`
  const fetchMovie = async () => {
    try {
      // stuff
    } catch (error) {
      // error stuff
    }
  }

  useEffect(() => {
    fetchMovie()
  }, [movieId, fetchMovie]) // note: we have to add `fetchMovie` as dependency

  // ...
}
```

in this way ^^ we have a warning:

```shell
The 'fetchMovie' function makes the dependencies of useEffect Hook (at line 33) change on every render. Move it inside the useEffect callback. Alternatively, wrap the definition of 'fetchMovie' in its own useCallback()
```

- The function `fetchMovie` is called at each render
- the `useEffect()` hook thinks that `fetchMovie` is a different function each time

So this will create an infinity loop, that's no good 💣 💥.

We have to use the `useCallback()` hook:

```js
import { useState, useEffect, useCallback } from 'react'

export const useMovieFetch = movieId => {
  // ...

  const fetchMovie = useCallback(async () => {
    try {
      // ...
    } catch (error) {
      // ...
    }
  }, [movieId])

  useEffect(() => {
    fetchMovie()
  }, [movieId, fetchMovie])

  return { state, loading, error }
}
```

## Validate props with `PropTypes` (if you do NOT use TypeScript)

[PropTypes library](https://github.com/facebook/prop-types)

Note that proptypes validation is available in browser console, in _development mode_ only.

1. Install and import library (note the capital 'P' -> `PropTypes`)

```js
import PropTypes from 'prop-types'
```

2. Below the component function, add its `propTypes` check (note the lower 'p' -> `propTypes`)

```js
Actor.propTypes = { // note: lowercased 'p'
  name: PropTypes.string, // note: capitalized 'p'
  character: PropTypes.string,
  imageUrl: PropTypes.string,
}
```

To wrap up:

```js
import React from "react";
import PropTypes from 'prop-types'

const Actor = ({ name, character, imageUrl }) => (
  <Wrapper>
    <Image src={imageUrl} alt='actor-thumb' />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
)

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default Actor
```

Note that `children` is a built-in prop, so we do not have to specify its type:

```js
const Grid = ({ header, children }) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
)

Grid.propTypes = {
  // declare just the 'header' prop
  header: PropTypes.string,
}
```

### Types

| Types | Definition |
| ---- | ---- |
| string | `PropTypes.string` |
| boolean | `PropTypes.bool` |
| function | `PropTypes.func` |
| object | `PropTypes.object` |

Note that if you want to check **each property** of the object, you have to use `shape()`:

```js
myObject: PropTypes.shape({
  name: PropTypes.string,
  age: PropTypes.number,
  callbackFn: PropTypes.func
}),
```

## Read/write from session storage

```js
// src/helpers.js

export const isPersistedState = stateName => {
  const sessionState = sessionStorage.getItem(stateName)
  return sessionState && JSON.parse(sessionState)
}
```

```js
// custom hook src/hooks/useHomeFetch.js

// Helpers
import { isPersistedState } from '../helpers'

export const useHomeFetch = () => {
  const fetchMovies = async (page, searchTerm = '') => { ... }

  // Fetch data
  useEffect(() => {
    if (!searchTerm) {
      // fetch from browser storage
      const sessionState = isPersistedState('homeState')

      if (sessionState) {
        console.info('Grabbing homepage from sessionStorage')
        setState(sessionState)
        return
      }
    }

    // fetch from API
    console.info('Grabbing homepage from API')
    setState(initialState)
    fetchMovies(1, searchTerm)
  }, [searchTerm])

  // Write to session storage
  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state))
  }, [searchTerm, state])
}
```

## Deploy React app with Router using Netlify

To make React Router working properly, we have to add in our `public/` folder a new file `_redirects`

```md
/* /index.html 200
```

With the build command `npm run build` it will be copied to the `build/` folder, that is the folder used by Netlify to host our application. [More info - How to Deploy a React Router-Based Application to Netlify](https://www.freecodecamp.org/news/how-to-deploy-react-router-based-app-to-netlify/)
