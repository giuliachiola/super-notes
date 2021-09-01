# StoryBook

Create a StoryBook app

```shell
npx create-react-app .

npx sb init
```

## How StoryBook works

When you are running `npm run storybook`, StoryBook goes to the `.storybook/main.js` configuration file and checks the patterns to load the appropriate stories:

```js
// .storybook/main.js

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  ...
}
```

then goes to the stories, e.g. the Button component

```js
// src/components/button/Button.stories.js

import React from 'react'
import Button from './Button'

export default {
  title: 'Button', // mandatory, unique in the entire project
  component: Button,
}

// every named exports rapresent a story
// each line is a functional component
export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
```

then StoryBook
- reads the default export `Button` and add it to the sidebar nav
- picks up the named exports and renders the other components

Since `Button.stories.js` is using the `<Button>` component, StoryBook goes to the `Button.js` component

```js
import React from 'react'

import './Button.css'

export default function Button(props) {
  const { variant = 'primary', children, ...rest } = props

  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  )
}
```

- imports the CSS file
- and returns an HTML `<button>` element with class names and text.

## Tips

If we want to add a group/folder into the sidebar.

In this example, Button and Input will go under the same parent Form folder.

```js
// src/components/button/Button.stories.js

...
export default {
  title: 'Form/Button',
  component: Button,
}
...
```

```js
// src/components/input/Input.stories.js

...
export default {
  title: 'Form/Input',
  component: Input,
}
...
```
