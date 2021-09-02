# StoryBook

[React Storybook Tutorial - YouTube playlist](https://www.youtube.com/playlist?list=PLC3y8-rFHvwhC-j3x3t9la8-GQJGViDQk)

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

We can also add another folder level in this way

```js
// src/components/input/Input.stories.js

...
export default {
  title: 'Form/UI/Input',
  component: Input,
}
...
```

## Story name

We can change the story name overriding the story label into the sidebar

```js
// src/components/button/Button.stories.js
...
export default {
  title: 'Button',
  component: Button,
}

export const Primary = () => <Button variant='primary'>Primary</Button>
...

Primary.storyName = 'Primary button label' // this is the label into the sidebar
```

## Sorting stories

[Check the official docs](https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy#sorting-stories)


## Stories within stories

We can import stories within stories

Pros:
- reduce the amount of code to be written
- you do not have to pass every props again
- if you update the main story, the other story will update

```jsx
import React from 'react'
import { ButtonPrimary } from '../Button/Button.stories' // stories, not components
import { InputLarge } from '../Input/Input.stories' // stories, not components

export default function PrimarySubscription() {
  return (
    <>
      <ButtonPrimary />
      <InputLarge />
    </>
  )
}
```

## Args

Instead of using render functions in this way

```js
// src/components/button/Button.stories.js
...
export const Primary = () => <Button variant='primary'>Primary text</Button>
export const Secondary = () => <Button variant='secondary'>Secondary text</Button>
```

we can use the template `args` (properties) like this

```js
// src/components/button/Button.stories.js
...
const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args == {
  variant: 'primary',
  children: 'Primary text'
}

export const Secondary = Template.bind({})
Secondary.args == {
  variant: 'secondary',
  children: 'Secondary text'
}
```

pros:
- the `args` approach is more appropriate to the stories, which represent the UI state of a component and the states are represented by these args objects.
- reduce the unique code
- is possible to reuse `args` to another story

```js
export const LongPrimary = Template.bind({})

LongPrimary.args == {
  ...Primary.args, // call another state args object
  children: 'LongPrimary text'
}
```

It is possible to set up `args` at component level, to be applied to all the components stories:

```js
export default {
  title: 'Form/Button',
  component: Button,
  args: { // add 'args' object
    children: 'Button text!',
  }
}

...
export const Primary = Template.bind({})

export const Primary = Template.bind({})
Primary.args == {
  variant: 'primary',
  // remove `children` from here, it inherited 'Button text!'
}
```

Remember that `args` at the story level will override and args at the component level.

## Decorators

Decorators are components that wrap a story.

For example, we have a `<Center>` component that horizontally align its child component.

Not a good way to do it is to wrap each story with the Center component:

```js
export const Primary = () => <Center><Button variant='primary'>Primary</Button></Center>
export const Secondary = () => <Center><Button variant='secondary'>Secondary</Button></Center>
```

A better way to do it is to add the `decorators` property into the default export object:
each entry is a function that automatically receives a story as its argument, and then returns the same story with parenthesis now wrapped with che Center component.

```js
export default {
  title: 'Form/Button',
  component: Button,
  decorators: [story => <Center>{story()}</Center>]
}

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
```

### Global decorators

If you want to add a decorator to _all_ the stories in your StoryBook application, we need to add it to the `preview.js`:

```js
// .storybook/preview.js

import React from 'react'
import { addDecorator } from '@storybook/react'
import Center from '../src/components/Center/Center'

addDecorator(story => <Center>{story()}</Center>)
```

(remember to remove the `decorators` property from the `Button.js` file).

## Theming using Chakra

```jsx
// preview.js

import React from 'react'
import { ThemeProvider, theme, CSSReset, Box } from '@chakra-ui'
// do not use `decorator` function in v6
...

// export instead an array of decorators
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Box m='4'>
        <Story />
      </Box>
    </ThemeProvider>
  )
]
```

## Add-ons

### Console add-on

https://storybook.js.org/addons/@storybook/addon-console

Instead of use the browser console to log messages

```jsx
...
export const Log = () => {
  <Button variantColor='blue' onClick={() => console.log('Button clicked')}>Log button</Button>
}
```

we can use Console addon:

```shell
npm install -D @storybook/addon-console
```

```jsx
// preview.js

...
import '@storybook/addon-console'
```

Now we can see console.log in our `Actions` StoryBook panel.

If we want to know who triggers the event, we have to add a decorator:

```jsx
...
import { withConsole } from '@storybook/addon-console'

...
addDecorator((storyFn, context) => withConsole()(storyFn)(context))
```

### Controls addon

Live editing props

https://storybook.js.org/addons/@storybook/addon-controls/


## Enviroment variables

Set the label in the script command:

```json
// package.json

"scripts": {
  ...
  "storybook": "set STORYBOOK_THEME=dark && start-storybook -p 6006 -s public"
  ...
}
```

and then use it into the Button component using `process.env.STORYBOOK_THEME`

```jsx
export const Log = () => {
  <Button
    variantColor='blue'
    onClick={ () => console.log('Button clicked', process.env.STORYBOOK_THEME)}>
    Log button
  </Button>
}
```
