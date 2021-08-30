# Lift

If we have two children components and ChildComponent1 should pass a value to ChildComponent2, the best way to do it is that ChildComponent1 "lifts" the value to the nearest parent (= ParentComponent).

```jsx
<ParentComponent>
  <ChildComponent1 />
  <ChildComponent2 />
</ParentComponent>
```

Important: _state_ should live as close as possible to the code where it is used that state.

```jsx
function Name({name, onNameChange}) { {/* name and onNameChange passed as arguments */}
  return (
    <div>
      <label>Name: </label>
      <input value={name} onChange={onNameChange} />
    </div>
  )
}

function FavoriteAnimal({ animal, onAnimalChange}) {  {/* name and onNameChange passed as arguments */}
  return (
    <div>
      <label>Favorite Animal: </label>
      <input
        value={animal}
        onChange={onAnimalChange}
      />
    </div>
  )
}

function Display({name}) {
  return <div>{`Hey ${name}, your favourite animal is ${animal}`}</div>
}

function App() {
  const [name, setName] = React.useState('')
  const [animal, setAnimal] = React.useState('')
  return (
    <form>
      <Name
        name={name}
        onNameChange={event => setName(event.target.value)}
      />
      <FavoriteAnimal
        onAnimalChange={event => setAnimal(event.target.value)}
      />
      <Display
        name={name}
        animal={animal}
      />
    </form>
  )
}
```

# Colocation

Colocation is when you move your state closer to where is is being used.

In the example above, if we want to print out just the name without the animal, then the animal parameters should be inside the `FavouriteAnimal` functional component:

```jsx
function FavoriteAnimal() {  {/* without props */}
  const [animal, setAnimal] = React.useState('')

  return (
    <div>
      <label>Favorite Animal: </label>
      <input
        value={animal}
        onChange={event => setAnimal(event.target.value)}
      />
    </div>
  )
}
```
