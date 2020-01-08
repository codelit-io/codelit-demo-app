import React, { useState, useEffect } from "react";
import MoCard from "../../components/shared/MoCard";
import Grid from "@material-ui/core/Grid";
import PageHeader from "../../components/shared/PageHeader";
import { withAuthorization } from "../../components/Session/";
import Spinner from "../../components/shared/Spinner";

const Courses = props => {
	const [loading, setLoading] = useState(false);
	const [courses, setCourses] = useState([]);

	const CoursesList = ({ courses }) =>
	<Grid container spacing={3}>
		{Object.keys(courses).map((course, index) => (
			<Grid key={index} item sm={12} md={6} xs={12}>
				<MoCard topic={courses[course]}></MoCard>
			</Grid>
			
		))}</Grid>;

	useEffect(() => {
		setLoading(true);

		props.firebase.coursesDb().on("value", snapshot => {
			const coursesObject = snapshot.val();
			setCourses(coursesObject[props.match.params.course]);
			setLoading(false);
		});

		return () => {
			props.firebase.coursesDb().off();
		};
	}, [props]);

	return (
		<>
			<PageHeader title={props.match.params.course}></PageHeader>
			<Spinner loading={loading} color="primary" />
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<CoursesList courses={courses} />
				</Grid>
			</Grid>
		</>
	);
};

// const condition = authUser => !!authUser;
/* True for demo purposes */
const condition = authUser => true;

export default withAuthorization(condition)(Courses);
