# Mo Skool

Mo Skool is a frontend learning platform, offering fun and straightforward path to mastering frontend React development.

Although this project is still under *heavy development*, my vision for the end product is crystal clear. I see this as an excellent opportunity to add value to our community and help others enjoyably grow into frontend development.

## What Can I learn?

### Front-End
- HTML
- JavaScript
- CSS in JS
- React
- JSX

# Current Tech
The app has a React frontend and paired with a Firebase cloud backend



# Getting Started

* Install `npm i`
* Start `npm run start`
* Prettify `npm run pretty`

* check npm dependencies for updates `npm run check-updates`
* build `npm run build`
* test `npm run test`
* Deploy to prod `npm run deploy`
* Deploy to st `tbd`



# 3rd Party Dependencies
* Material UI + icons
* @sentry/browser for monitoring prod for console errors
* firebase
* material-table, an admin tool for adding questions
* react-dom-confetti: confetti effect
* react-live: code editor + live preview + error debugger
* react-typist: typist effect seen throughout
* recompose: used to compose a wrappedComponent with multiple HOCs


# Mind Map

https://www.mindmeister.com/1454606428/pages-containers


# Colors

https://coolors.co/424b54-157a6e-41d3bd-f5d547-fffff2


# Material UI

Currently using some elements form material UI but considering other options such as styled-components

**Pros:**
* Easy and convenient
* withStyles HOC provides styles to components
* Global theme
* default theme (breakpoints, spacing...)
* Dark mode ready
* Responsive + accessible

**Cons:**
* Pig heavy weight
* Hard to customize


# HOC

* `withRouter(wrappedComponent)` Provider router props
* `withStyles(stylesObject)(wrappedComponent)`  Provider classes prop to wrappedComponent from styles object. This is specific to Material UI and similar to styled-components
* `withFirebase(wrappedComponent)` Provides firebase props
* `withAuthentication(wrappedContainer)` Only authenticated can access
* `withAuthorization(wrappedContainer)` Only authorized can access based on a condition ex: admin role
* `withAuthorization(wrappedContainer)` Only authorized can access based on a condition ex: admin role
* `withEmailVerification(wrappedContainer)` Provides email verification stuff

# State management

Using context api for all firebase stuff and they are provided to most pages



All container can have access to the following props from HOC mentioned above

* classes: provides css classes for your component
* match: routing props and hold route params/state
* history: browser history api
* firebase: all firebase stuff

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



# Testing

* Jest for snapshot and integration/unit/functional testing