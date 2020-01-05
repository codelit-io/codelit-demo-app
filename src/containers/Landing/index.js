import React from "react";
import Grid from "@material-ui/core/Grid";
import MoCard from "../../components/shared/MoCard";
import PageHeader from "../../components/shared/PageHeader";
import * as ROUTES from "../../constants/routes";
import Typography from "@material-ui/core/Typography";

const LandingPage = () => {
	const topics = [
		{
			label: "Start Learning",
			desc: "Learn anything coding",
			img: "https://firebasestorage.googleapis.com/v0/b/tool-builder.appspot.com/o/icons%2F006-science.png?alt=media&token=9942d7dd-19c9-497e-8597-4cb59df6cdc7",
			url: ROUTES.LEARN.path,
		},
		{
			label: "My Lessons",
			desc: "All in one place",
			img: "https://firebasestorage.googleapis.com/v0/b/tool-builder.appspot.com/o/icons%2F026-education.png?alt=media&token=59b529d9-14ae-4f05-a5eb-c758ce55b2a1",
			disable: true,
		},
		{
			label: "My Team",
			desc: "Say Hi!",
			img: "https://firebasestorage.googleapis.com/v0/b/tool-builder.appspot.com/o/icons%2F009-collaboration.png?alt=media&token=a7e1e9e8-8b2b-4a32-86ad-0302de87407e",
			disable: true
		}
	];

	return (
		<>
			<PageHeader title={ROUTES.LANDING.title}></PageHeader>
			<Grid container spacing={3}>
				{topics.map((topic, index) => (
					<Grid key={index} item sm={6} md={3} xs={12}>
						<MoCard topic={topic}></MoCard>
					</Grid>
				))}
			</Grid>
			<Typography variant="subtitle1">
				Icons made by{" "}
				<a href="https://www.flaticon.com/authors/wanicon" title="wanicon" style={{color: "#3a9fff"}}>
					wanicon
				</a>
			</Typography>
		</>
	);
};

export default LandingPage;
