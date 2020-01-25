import React from "react";
import Grid from "@material-ui/core/Grid";
import MoCard from "../../components/shared/MoCard";
import PageHeader from "../../components/shared/PageHeader";
import * as ROUTES from "../../constants/routes";
import Typography from "@material-ui/core/Typography";

const LandingPage = () => {
	const topics = [
		{
			label: "Get Started",
			desc: "Your first step to success",
			img: "https://firebasestorage.googleapis.com/v0/b/tool-builder.appspot.com/o/icons%2F016-elearning.png?alt=media&token=cae6ea58-363c-4e6f-a7fe-563bb30b34bc",
			url: ROUTES.QUESTIONS.path
		},
		{
			label: "Start Learning",
			desc: "Explorer Front-end topics",
			img: "https://firebasestorage.googleapis.com/v0/b/tool-builder.appspot.com/o/icons%2F023-teaching.png?alt=media&token=9d079583-6608-4c1f-8762-c52c15179bcc",
			url: ROUTES.LEARN.path
		},
		{
			label: "My Lessons",
			desc: "All in one place",
			img: "https://firebasestorage.googleapis.com/v0/b/tool-builder.appspot.com/o/icons%2F026-education.png?alt=media&token=59b529d9-14ae-4f05-a5eb-c758ce55b2a1",
			disable: true
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
					<Grid key={index} item sm={12} md={6} xs={12}>
						<MoCard topic={topic}></MoCard>
					</Grid>
				))}
			</Grid>
			<Typography variant="subtitle1">
				Icons made by{" "}
				<a href="https://www.flaticon.com/authors/wanicon" title="wanicon" style={{ color: "#3a9fff" }}>
					wanicon
				</a>
			</Typography>
		</>
	);
};

export default LandingPage;
