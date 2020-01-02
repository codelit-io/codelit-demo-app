import React from "react";
import MoCard from "../../components/shared/MoCard";
import { Grid, Typography } from "@material-ui/core";
import * as ROUTES from "../../constants/routes";

const Courses = ({ match }) => {
	const icons = [
		{
			label: "Html",
			desc: "Elements on web pages",
			img: "",
			url: ROUTES.HTML
		},
		{
			label: "Css",
			desc: "Styling to elements",
			img: "",
			url: ROUTES.CSS
		},
		{
			label: "JavaScript",
			desc: "Functionality to elements",
			img: "",
			url: ROUTES.JAVASCRIPT
		},
		{
			label: "React",
			desc: "Web Apps JS framework",
			img: "",
			url: ROUTES.REACT
		},
		{
			label: "Angular",
			desc: "Web Apps JS framework",
			img: "",
			url: ROUTES.ANGULAR
		}
	];
	return (
		<>
			<Typography variant="h4" gutterBottom>
				{match.params.course}
			</Typography>
			<Grid container spacing={3}>
				{icons.map((icon, index) => (
					<Grid key={index} item sm={6} md={3} xs={12}>
						<MoCard icon={icon}></MoCard>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default Courses;
