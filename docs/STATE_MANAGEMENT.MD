# Older State management tools

Using context api for all firebase stuff and they are provided to most pages

* classes: provides css classes for your component
* match: routing props and hold route params/state
* history: browser history api
* firebase: all firebase stuff

# State management using Hooks

## Component
In your component you can select and set data for global state

```
import useGlobal from "store";

const [name, addToName] = useGlobal(
    state => state.name,
    actions => actions.addToName
)

// Select data
console.log(name) // 'mo'

// Set data
addToName('Jo')

```

## Actions
Found in `actions/index.js` or can live with your component files
```
YourFeature/
    actions.js
    index.jsx
    index.test.jsx
    styles.js
```    

```
export const addToName = (store, data) => {
  const name = {
    ...store.state.name,
    ...data
  };
  store.setState({ name });
};
```


[use-global-hook](https://www.npmjs.com/package/use-global-hook)