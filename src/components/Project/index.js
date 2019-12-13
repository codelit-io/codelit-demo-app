import React from "react";
import { MoshCard } from "../shared/MoshCard";
import Grid from "@material-ui/core/Grid";

export const Project = () => {
	const icons = [
		{
			label: "Form",
			desc: "Simple form with inputs"
		},
		{
			label: "Table",
			desc: "Fetch data in a table",
		},
		{
			label: "Calender",
			desc: "Fetch data in a calendar",
		}
	];
	return (
		<Grid container spacing={1}>
			<Grid container item xs={12} spacing={3}>
				{icons.map((icon, index) => (
					<Grid key={index} item md={3} sm={4} xs={12}>
						<MoshCard icon={icon}></MoshCard>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
};
