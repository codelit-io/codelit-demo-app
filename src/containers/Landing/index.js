import React from "react";

import * as ROUTES from "../../constants/routes";
import congrats from "../../assets/congrats.png";
import Grid from "@material-ui/core/Grid";
import MoCard from "../../components/shared/MoCard";
import styles from "./styles";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import MoButton from "../../components/shared/MoButton";

const LandingPage = ({ classes }) => {
	const topics = [
		{
			label: "Playground",
			desc: "Live React JSX environment",
			img:
				"https://firebasestorage.googleapis.com/v0/b/tool-builder.appspot.com/o/icons%2F026-education.png?alt=media&token=59b529d9-14ae-4f05-a5eb-c758ce55b2a1",
			url: ROUTES.PLAYGROUND.path
		},
		{
			label: "Start Learning",
			desc: "Explorer Front-end topics",
			img:
				"https://firebasestorage.googleapis.com/v0/b/tool-builder.appspot.com/o/icons%2F023-teaching.png?alt=media&token=9d079583-6608-4c1f-8762-c52c15179bcc",
			url: ROUTES.LEARN.path
		},
		{
			label: "My Team",
			desc: "Say Hi!",
			img:
				"https://firebasestorage.googleapis.com/v0/b/tool-builder.appspot.com/o/icons%2F009-collaboration.png?alt=media&token=a7e1e9e8-8b2b-4a32-86ad-0302de87407e",
			disable: true
		}
	];

	return (
		<>
			<Grid container spacing={3} className={classes.container}>
				<Grid item sm={12} md={6} xs={12}>
					<Typography component="div" className={classes.heroText}>
						Learn React inspired development
					</Typography>
					<Typography className={classes.heroSubtitle}>
						Experience a new visual way of learning frontend development
					</Typography>
					<MoButton text="Get Started" href={ROUTES.QUESTIONS.path}/>
				</Grid>
				<Grid item sm={12} md={6} xs={12}>
					<Slide
						direction="up"
						in={congrats && true}
						timeout={{ enter: 400, exit: 400 }}
					>
						<img alt="Congrats" className={classes.img} src={congrats} />
					</Slide>
				</Grid>
				{topics.map((topic, index) => (
					<Grid key={index} item sm={12} md={6} xs={12}>
						<MoCard topic={topic}></MoCard>
					</Grid>
				))}
			</Grid>
			<Typography variant="subtitle1">
				Icons made by{" "}
				<a
					href="https://www.flaticon.com/authors/wanicon"
					title="wanicon"
					style={{ color: "#3a9fff" }}
				>
					wanicon
				</a>
			</Typography>
		</>
	);
};

export default withStyles(styles)(LandingPage);
