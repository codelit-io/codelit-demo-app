# React Hooks

## Custom hooks and 3rd party

- `useTheme`: [Material-ui theme](https://material-ui.com/styles/api/)
- `useStyles`: [Material-ui styles](https://material-ui.com/styles/basics/)
- `useForm`: [React hook form](https://react-hook-form.com/get-started/)
- `useCollection`: Custom hook to fetch data from firebase based on a path and return an array of docs
- `useCollections`: Custom hook to fetch data from firebase and return a list of all collections
- `useCollectionDetails`: Custom hook to fetch data about a collection based on a route path

### useEffect

- Make side effects to your components and do some async magic. You can fetch db and update UI based on some props.
- It replaces `componentDidMount`, `componentDidUpdate` and `componentWillUnmount` in one location
- Dependency array must be provided with props the code inside useEffect needs

```
useEffect(() => {
    // componentDidMount happens ones
    // componentDidUpdate happens based on prop1 and prop2
    const listener = prop1.doSomeThingFun();

    // componentWillUnmount
    return () => listener()

}, [prop1, prop2])
```

### useState

- State for your component

```
const [isLoading, setIsLoading] = setState(false)

setIsLoading(true)
```

### useCallback

- Cache heavy functionality and complex calculations to prevent them from running again on re-render

```
useCallback(() => {
    someHeavyMethod(prop1) {
        ...
    }

    return () => someHeavyMethod(prop1);
}, [prop1, prop2])
```

### useMemo

- Cache values you need to return to prevent them from returning value on every render

```
useMemo(() => {

if (prop1) {
    return [1,2, ..., 10000]
}

}, [prop1])
```

### useGlobal

[See State Management](docs/STATE_MANAGEMENT.md)
