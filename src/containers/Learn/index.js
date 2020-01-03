import React from "react";
import MoCard from "../../components/shared/MoCard";
import { Grid } from "@material-ui/core";
import PageHeader from "../../components/shared/PageHeader";
import * as ROUTES from "../../constants/routes";

const Learn = ({ match }) => {
	const icons = [
		{
			label: "Front-end",
			desc: "Learn HTML, CSS, JS and JS Frameworks",
			img: "",
			url: ROUTES.FRONTEND.path
		},
		{
			label: "Back-end",
			desc: "Learn nodeJs, mongoDB and Firebase cloud",
			img: "",
			url: ROUTES.BACKEND.path
		},
		{
			label: "DevOps",
			desc: "Learn Docker and other fun stuff",
			img: "",
			url: ROUTES.DEVOPS.path
		}
	];
	return (
		<>
			<PageHeader title={ROUTES.LEARN.title}></PageHeader>
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

export default Learn;
