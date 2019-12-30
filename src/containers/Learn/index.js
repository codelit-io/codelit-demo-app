import React from "react";
import MoshCard from "../../components/shared/MoshCard";
import { Grid, Typography } from "@material-ui/core";
import * as ROUTES from "../../constants/routes";

const Learn = ({ match }) => {
	const icons = [
		{
			label: "Front-end",
			desc: "Learn HTML, CSS, JS and JS Frameworks",
			img: "",
			url: ROUTES.FRONTEND
		},
		{
			label: "Back-end",
			desc: "Learn nodeJs, mongoDB and Firebase cloud",
			img: "",
			url: ROUTES.BACKEND
		},
		{
			label: "DevOps",
			desc: "Learn Docker and other fun stuff",
			img: "",
			url: ROUTES.DEVOPS
		}
	];
	return (
		<>
			<Typography variant="h4" gutterBottom>
				Pick your career path
			</Typography>
			<Grid container spacing={3}>
				{icons.map((icon, index) => (
					<Grid key={index} item sm={6} md={3} xs={12}>
						<MoshCard icon={icon}></MoshCard>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default Learn;
