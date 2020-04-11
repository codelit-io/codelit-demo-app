# React Hooks

## Custom hooks and 3rd party

- `useTheme`: [Material-ui theme](https://material-ui.com/styles/api/)
- `useStyles`: [Material-ui styles](https://material-ui.com/styles/basics/)
- `useForm`: [React hook form](https://react-hook-form.com/get-started/)
- `useCollection`: Custom hook to fetch data from firebase based on a path

- useEffect

```
useEffect(() => {
    // componentDidMount happens ones
    // componentDidUpdate happens based on prop1 and prop2
    const listener = prop1.update();

    // componentWillUnmount
    return () => listener()

}, [prop1, prop2])
```

- useState

```
const [isLoading, setIsLoading] = setState(false)

setIsLoading(true)
```

- useCallback

```
useCallback(() => {
    someHeavyMethod(prop1) {
        ...
    }

    return () => someHeavyMethod(prop1);
}, [prop1, prop2])
```

- useMemo

```
useMemo(() => {

if (prop1) {
    return [1,2, ..., 10000]
}

}, [prop1])
```
