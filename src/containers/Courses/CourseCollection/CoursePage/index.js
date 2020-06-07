/**
 * Displays the grid for the lessons containing question cards and progress for the course
 * @prop {Object} authUser - Passed from parent container and has everything about the logged in user
 * @prop {Object} collectionDetails - Passes information about the course/collection such as title and other flags
 * @prop {Boolean} isLoading - Loading flag passed from parent container
 * @prop {Object} match - Contains information about how a <Route path> matched the URL - comes from withRouter and passed to withAuthentication hoc
 * @prop {Array} courses - List of courses passed down from parent container
 * @prop {requestCallback} calculateProgress - callback function to calculate progress, pass it authUser, points, and length of questions in the course
 */

import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";
import CourseList from "./CourseList";
import MoPage from "components/library/MoPage";
import MoProgressBar from "components/library/MoProgressBar";
import MoPageSubtitle from "components/library/MoPageSubtitle";

const CoursePage = ({
	authUser,
	collectionDetails,
	isLoading,
	match,
	courses,
	calculateProgress,
}) => {
	const [points, setPoints] = useState(0);
	useEffect(() => {
		let points = authUser?.reports?.[match.params.collection]?.points;
		if (points) {
			setPoints(points);
		}
	}, [authUser, match]);

	return (
		<MoPage title={collectionDetails?.title} isLoading={isLoading}>
			{courses && (
				<Grid container spacing={4} style={{ flexFlow: "wrap-reverse" }}>
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<CourseList
							points={points}
							courses={courses}
							authUser={authUser}
							match={match}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<MoPageSubtitle margin="0px 0 36px" width="100%">
							Your Progress
						</MoPageSubtitle>

						{collectionDetails.isProgressBar && (
							<MoProgressBar
								authUser={authUser}
								points={points}
								progress={calculateProgress(
									authUser,
									points,
									courses?.length
								)}
							/>
						)}
					</Grid>
				</Grid>
			)}
		</MoPage>
	);
};

export default CoursePage;
