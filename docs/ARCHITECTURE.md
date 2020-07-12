
# File Structure

Mo Skool uses a very flexible and simple file structure to layout pages and components in a way that make sense to humans and browsers.

## Containers

Containers are that main component in MoSkool and they represent pages that are being imported to React router.

A container can contain page layout component and other components only specific to this container.

***Example Container: Courses page***

```
Courses/
    CoursesPage/
        CoursesList/
        OtherComponent/
        SomeOtherComponent/
```

- ***Courses*** top layer component grabs data from the API and passes it down to the children. This container should grab authUser, firebase instance and any other high level props and passes them to the `CoursesPage`
- ***CoursesPage*** second layer component and responsible for page layout and UI details. a great place to delegate data passed from parent to dummy components
- ***CoursesList*** an optional component, in this case this is a list specific to courses. A great opportunity to refactor and make it a generic list.


## Shared Components
Components that are being used more than one time can fit in the shared category

- ***Library Components*** dummy components and mostly presentational. Can work with material ui library to provide more customized UI. e.g. buttons, grid, links, typography...
- ***Shared Components*** not always dummy components and sometimes they deals with heavy logic. e.g. firebase, sessions, login..


## Component files
It's up to you to structure components files, the following is current convention:

```
ComponentName/
    actions.js
    index.jsx
    index.test.js
    styles.jsx
```
with smaller and pure components the following is acceptable. with this approach styling will be done in each component file

```
Components/
    YourComponentName.jsx
    OtherStuff.jsx
```

## Constants
Static constants go here, such as roles and routes

## Hooks
Shared hooks are stored here and they are prefixed with `pre`

## Mocks
Mock data live here, these are helpful for united testing, dummy data and mock api response.

## Store
State management using global hook

## Utils
Shared helper functions


