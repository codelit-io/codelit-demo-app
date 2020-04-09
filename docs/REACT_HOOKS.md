# React Hooks

* useEffect
```
useEffect(() => {
    // componentDidMount happens ones
    // componentDidUpdate happens based on prop1 and prop2
    const listener = prop1.update();

    // componentWillUnmount 
    return () => listener()

}, [prop1, prop2])
```
* useState 

```
const [isLoading, setIsLoading] = setState(false)

setIsLoading(true)
```