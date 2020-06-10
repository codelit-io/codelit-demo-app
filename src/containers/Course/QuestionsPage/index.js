/**
 * Course page contains layout styling for the page, progress status, and a list of questions
 * @prop {Object} authUser - Passed from parent container and has everything about the logged in user
 * @prop {Array} courses - List of courses passed to this component from the db
 * @prop {Object} courseDetails - Contains details about the course we are looking at, this is queried from the db
 * @prop {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @prop {Number} points - Number of points the user has for this course
 */

import React from "react";

import Grid from "@material-ui/core/Grid";
import QuestionList from "./QuestionList";
import calculateProgress from "./calculateProgress";
import MoPage from "components/library/MoPage";
import MoProgressBar from "components/library/MoProgressBar";
import Footer from "components/shared/Footer";

const QuestionsPage = ({ authUser, courses, courseDetails, match, points }) => (
	<MoPage
		title={courseDetails?.data?.title}
		isLoading={courseDetails.isLoading || courses.isLoading}
	>
		<Grid container spacing={4} style={{ flexFlow: "wrap-reverse" }}>
			<Grid item xs={12} sm={12} md={6} lg={6}>
				<QuestionList
					authUser={authUser}
					match={match}
					points={points}
					questions={courses.data}
					url={match?.params?.collection}
				/>
			</Grid>
			<Grid item xs={12} sm={12} md={6} lg={6}>
				<MoProgressBar
					authUser={authUser}
					points={points}
					progress={calculateProgress(authUser, points, courses.data?.length)}
				/>
			</Grid>
		</Grid>
		<Footer />
	</MoPage>
);

export default QuestionsPage;
