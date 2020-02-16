import React from "react";

import * as ROUTES from "../../constants/routes";
import congrats from "../../assets/congrats.png";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import MoButton from "../../components/shared/MoButton";

const LandingPage = ({ classes }) => {
	return (
		<>
			<Grid container spacing={10} className={classes.container}>
				<Grid item sm={12} md={6} xs={12}>
					<Typography component="div" className={classes.heroText}>
						Master React frontend development
					</Typography>
					<Typography className={classes.heroSubtitle}>
						Experience a new visual way of learning frontend React and JSX development
					</Typography>
					<MoButton text="Get Started" href={ROUTES.QUESTIONS.path} />
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

				<Grid
					item
					sm={12}
					md={12}
					xs={12}
					className={classes.centeredContainer}
				>
					<Typography component="div" className={classes.heroText}>
						Try the playground!
					</Typography>
					<Typography className={classes.heroSubtitle}>
						Write code in JSX and it will render your code magically{" "}
						<span role="img" aria-label="wink">
							😉
						</span>
					</Typography>
					<MoButton text="Try the playground" href={ROUTES.PLAYGROUND.path} />
				</Grid>
			</Grid>
		</>
	);
};

export default withStyles(styles)(LandingPage);
