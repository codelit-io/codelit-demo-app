# HOC

- Higher Order Components wrap your component and provide it with extra functionality as props
- Props passed to wrapped component can be functions or objects
- Great for shared functionality across the codebase

* `withRouter(wrappedComponent)` Provider router props
* `withStyles(stylesObject)(wrappedComponent)` Provider classes prop to wrappedComponent from styles object. This is specific to Material UI and similar to styled-components
* `withFirebase(wrappedComponent)` Provides firebase props
* `withAuthentication(condition)(wrappedContainer)` Only authenticated can access.. condition can be false or "isAdmin" for admin
* `withEmailVerification(wrappedContainer)` Provides email verification stuff
* `withLive` [Live Editor hook](https://formidable.com/open-source/react-live/)
