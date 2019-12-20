import React from "react";
import Grid from "@material-ui/core/Grid";
import { MoshCard } from "../../components/shared/MoshCard";
import * as ROUTES from "../../constants/routes";

const LandingPage = () => {
	const icons = [
		{
			label: "New Project",
			desc: "No Coding Required",
			img:
				"https://firebasestorage.googleapis.com/v0/b/mosh-599d5.appspot.com/o/tech_1.png?alt=media&token=71c84225-232d-4ca2-b391-f60632506adc",
			url: ROUTES.NEW_PROJECT
		},
		{
			label: "My Projects",
			desc: "All in one place",
			img:
				"https://firebasestorage.googleapis.com/v0/b/mosh-599d5.appspot.com/o/tech_2.png?alt=media&token=e896ba8c-ef16-4f09-ac64-6b783bc8dd54",
			url: ROUTES.NEW_PROJECT
		},
		{
			label: "My Team",
			desc: "Say Hi!",
			img:
				"https://firebasestorage.googleapis.com/v0/b/mosh-599d5.appspot.com/o/tech_3.png?alt=media&token=5426000f-2adb-4167-84dc-9b127caa5c58",
			url: ROUTES.NEW_PROJECT
		}
	];
	// const list = ["input", "button", "switch", "checkbox", "slider", "link"];
	return (
		<Grid container spacing={3}>
			{icons.map((icon, index) => (
				<Grid key={index} item sm={6} md={3} xs={12}>
					<MoshCard icon={icon}></MoshCard>
				</Grid>
			))}
		</Grid>
	);
};

export default LandingPage;
