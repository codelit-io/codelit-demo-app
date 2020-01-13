import React, { useState, useEffect } from "react";
import MoCard from "../../components/shared/MoCard";
import Grid from "@material-ui/core/Grid";
import PageHeader from "../../components/shared/PageHeader";
import { withAuthentication } from "../../components/Session/";
import Spinner from "../../components/shared/Spinner";

const Courses = ({ firebase, match, history}) => {
	const [loading, setLoading] = useState(false);
	const [courses, setCourses] = useState([]);

	const CoursesList = ({ courses }) =>
	<Grid container spacing={3}>
		{Object.keys(courses).map((course, index) => (
			<Grid key={index} item xs={12}sm={12} md={6}>
				<MoCard topic={courses[course]}></MoCard>
			</Grid>
			
		))}</Grid>;

	useEffect(() => {
		setLoading(true);
		firebase.courses().on("child_added", snapshot => {
			setCourses(snapshot.val());
			setLoading(false);
		});

		return () => {
			firebase.courses().off();
		};
	}, [firebase, match]);

	return (
		<>
			<PageHeader title={match.params.course} history={history}></PageHeader>
			<Spinner loading={loading} color="primary" />
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<CoursesList courses={courses} />
				</Grid>
			</Grid>
		</>
	);
};

export default withAuthentication(Courses);
