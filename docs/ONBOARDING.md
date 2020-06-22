## ⏳ Time Line ⏳

- **30 Days** Learn all about the codebase and product
- **3 Months** Add and Upgrade features
- **6 Months** contribute to the future of the product
- **1 Year** Onboard new Devs

## ✨ Work Flow Steps ✨

### Clone repo

Open project in Github desktop or fork/clone repo. Then `yarn` and `yarn start` to start localhost

### Branches

All work is done in feature branches, branched from master and after a verified PR, merged back to master

### Test

Write test code if possible, make sure to run testing locally. Since most components use snapshot testing, run `yarn test` and click `u` to update snapshots if needed.

Test run automatically before every push

### Commits

Follow this [naming convention](https://www.conventionalcommits.org/en/v1.0.0/) to write your commits, commit as much as possible

### Possible Commit Types

- `chore`: Change build process, tooling or dependencies.
- `ci`: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- `feat`: Adds a new feature.
- `fix`: Solves a bug.
- `docs`: Adds or alters documentation.
- `style`: Improves formatting, white-space.
- `refactor`: Rewrites code without feature, performance or bug changes.
- `perf`: Improves performance.
- `test`: Adds or modifies tests.
- `revert`: Changes that reverting other changes

### Lint & Format

Run `yarn lint` after commits to lint your code, without it build could fail

ESlint and Prettier both run automatically with each commit

### PR

Creating a PR to merge to Master triggers CircleCi to run a build, test, lint the code in the PR to make sure it's good to go!! Use Github Desktop and Gitlense VS code extension

### Release

Merge PR to Release branch to trigger a release, then CircleCi will deploy the code to firebase hosting

## ✨ Folder structure ✨

### Containers

1. **Containers** are pages and represent features in the app. Each container can have components specific to it and can not be shared with other components

2. **Data Flow** generally its a good idea to initiate a call to the db and while waiting of the data start rendering the UI. This can be done by making the parent container fetch data from firebase using a React hook. Child components will most likely be rendering the layout of page. Example `Course` container

3. **Page Layout** holds layout styling and renders rest of components for the page

```
Container (data fetch)> PageComponent (layout & logic) > ChildComponents (dummy components)

```

### Components

1. **Library** Components specific to MoSkool UI Elements and they are all dumb components

2. **Shared** Components that share logic and functionality with the rest of the components and containers

### Constants

**Routes** and **Roles** can be found here
Example usage:

```
import * as ROUTES from "constants/routes";
import * as ROLES from "constants/roles";
```

### Hooks

Shared React hooks for fetching data from db

### Mocks

Mock data for testing and data simulation in components

### Utils

Shared functionality

## ✨Styling Material-UI ✨

1. Styling is done through Material-UI, by using their hooks or higher order components by using `css-in-js`
2. **Material-UI Hooks** allows more control over styling by dynamically changing style through props

```
//index.js

import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";

const MyComponent = () => {
  const useStyles = makeStyles((theme) =>
    createStyles({
      myClass: {
        //css-in-js
        ...
      },
    })
  );

  const classes = useStyles();
  return (
    ...
        <h1 className="classes.myClass"></h1>
    ...
  );
};
```

3. **Material-UI HOC** less control but can render the component with styling hooks once the component is mounted

```
// styles.js

const styles = (theme) => ({
  myClass: {
      //css-in-js
      ...
  }
});

export default styles;
```

```
// index.js

import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

const MyComponent = ({ classes }) => {
...
<h1 className="classes.myClass'></h1>
...

export default withStyles(styles)(MyComponent);
```

- [Resource](https://material-ui.com/styles/basics/)

4. **Theme** there is a theme file in `App/theme.js` containing all styling and can be used with material HOC/hooks to style components

## ✨Material-UI Grid ✨

```
// Container and spacing between elements
<Grid container spacing={4}>
    // Each item in grid based on 12 grid
     <Grid item xm={2} sm={2} md={2} lg={2}>
        ...
    </Grid>
     <Grid item xm={2} sm={2} md={2} lg={2}>
        ...
    </Grid>
</Grid>

```

## ✨Material-UI Typography ✨

```
<Typography variant="body1" gutterBottom>
    Hello React!
</Typography>

```

## ✨Material-UI Animation ✨

1. Fade, Grow, Zoom, and Slide. Returns children when `in` prop is true

```
<Fade timeout={{ enter: 800, exit: 800 }} in={true}>
    ...
</Fade>

```

## 🙋‍♀️Feature Component Example 🙋‍♀️

See `ExampleFeature` as an example component template, it contains parent container and child component and everything you need to master this coe base

## ✨Firebase ✨

Coming Soon

## ✨Higher Order Components ✨

Coming Soon

## 💥Important links 💥

[React Styleguidist](https://react-styleguidist.js.org/docs/documenting/)
