import React from "react";
import * as ROUTES from "../../../constants/routes";
import { Component } from "./Component";
import { Typography, Grid } from "@material-ui/core";
import MoshCard from "../../../components/shared/MoshCard";

const BuildCourse = ({ match }) => {
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
				{match.params.type}
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={8}>
					<Component {...match.params}></Component>
				</Grid>
				<Grid item xs={4}>
					<Grid container spacing={3}>
						{icons.map((icon, index) => (
							<Grid key={index} item sm={12} md={12} xs={12}>
								<MoshCard icon={icon}></MoshCard>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default BuildCourse;
