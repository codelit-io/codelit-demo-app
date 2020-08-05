/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Example Feature Component 👶🏼
 *
 * This component is just an example for a container component in moskool
 * This is a good example of functional components using all available React hooks and props
 *
 * @param {Object} classes - Class names that has styling details for elements
 * @param {Boolean} isLoading -  boolean flag for loading state
 * @param {Array} users - array of users passed from parent
 * @withStyles - Material-UI HOC provides classes to component and takes in a styles object
 * @returns {<ExampleChild/>} - returns component which then the children fetch the correct data
 *
 * @see See [Dumb Components](https://medium.com/@pramonowang/advanced-react-component-patterns-dumb-component-and-smart-component-4cb50fa63aa9)
 * */

import React from "react";

import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

// Props passed from parent
const ExampleChild = ({ classes, isLoading, users }) => { };
// TODO finish me
// withStyles  material-ui hoc - pass in a styles object and wraps the component
export default withStyles(styles)(ExampleChild);
