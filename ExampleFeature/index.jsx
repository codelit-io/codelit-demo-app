/**
 *
 * Example Feature Component
 *
 * This component is just an example for a container component in moskool
 *
 * @param {Object} authUser - Passed from parent container and has everything about the logged in user
 * @param {Object} classes - Class names that has styling details for elements - used with Material-UI
 * @param {Object} firebase - Firebase class provides access to authUser and db - comes from withAuthentication hoc
 * @param {Class} history - Firebase class provides access to authUser and db
 * @param {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @withAuthentication - HOC provides firebase and match props
 * @returns {<ExampleChild/>} - returns component which then the children fetch the correct data
 *
 *
 * */

import { Courses } from "./model";

const ExampleFeature = () => {

    const posts: Courses = {
        title: "name",
        author: "namee"
    };
    console.log(posts)
};

export default ExampleFeature;
