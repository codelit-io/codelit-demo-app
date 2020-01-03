import React from "react";
import * as ROUTES from "../../constants/routes";
import MoCard from "../../components/shared/MoCard";
import { Grid } from "@material-ui/core";
import PageHeader from "../../components/shared/PageHeader";

const Courses = ({ match }) => {
	const icons = [
		{
			label: "Html",
			desc: "Elements on web pages",
			img: "",
			url: ROUTES.HTML.path
		},
		{
			label: "Css",
			desc: "Styling to elements",
			img: "",
			url: ROUTES.CSS.path
		},
		{
			label: "JavaScript",
			desc: "Add script functionality",
			img: "",
			url: ROUTES.JAVASCRIPT.path
		},
		{
			label: "React",
			desc: "Web Apps JS framework",
			img: "",
			url: ROUTES.REACT.path
		},
		{
			label: "Angular",
			desc: "Web Apps JS framework",
			img: "",
			url: ROUTES.ANGULAR.path
		}
	];
	return (
		<>
			<PageHeader title={match.params.course}></PageHeader>
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
