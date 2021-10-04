# React `styled-components`

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