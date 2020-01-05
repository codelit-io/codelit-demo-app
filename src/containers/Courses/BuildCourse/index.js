import React from "react";
import * as ROUTES from "../../../constants/routes";
import { Component } from "./Component";
import Grid from "@material-ui/core/Grid";
import MoCard from "../../../components/shared/MoCard";

const BuildCourse = ({ match }) => {
	const topics = [
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
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Component {...match.params}></Component>
				</Grid>
			</Grid>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					{topics.map((topic, index) => (
						<Grid key={index} item sm={12} md={12} xs={12}>
							<MoCard topic={topic}></MoCard>
						</Grid>
					))}
				</Grid>
			</Grid>
		</>
	);
};

export default BuildCourse;
