import React from "react";

import * as ROUTES from "../../constants/routes";
import congrats from "../../assets/congrats.png";
import CheckIcon from "@material-ui/icons/Check";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import styles from "./styles";
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import rocketLearn from "../../assets/rocket-learn.png";
import withStyles from "@material-ui/core/styles/withStyles";
import MoLink from "../../components/shared/MoLink";

const LandingPage = ({ classes }) => {
	return (
		<>
			<Grid container spacing={6} className={classes.container}>
				<Grid item sm={12} md={6} xs={12}>
					<Typography component="div" className={classes.heroText}>
						Master React development for free!
					</Typography>
					<Typography className={classes.heroSubtitle}>
						Experience a modern interactive approach to mastering React frontend
						development.
					</Typography>
					<MoLink text="Get Started" href={ROUTES.QUESTIONS.path} />
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
			</Grid>
			<Grid container spacing={6} className={classes.container}>
				<Grid item sm={12} md={6} xs={12}>
					<Typography component="div" className={classes.heroText}>
						Free learning for everyone!
					</Typography>
					<ListItem>
						<ListItemAvatar className={classes.checkMark}>
							<CheckIcon />
						</ListItemAvatar>
						<ListItemText
							primary="Presentational HTML"
							secondary="HTML and CSS in JS"
						/>
					</ListItem>
					<ListItem>
						<ListItemAvatar className={classes.checkMark}>
							<CheckIcon />
						</ListItemAvatar>
						<ListItemText
							primary="Styling HTML Elements"
							secondary="CSS in JS"
						/>
					</ListItem>
					<ListItem>
						<ListItemAvatar className={classes.checkMark}>
							<CheckIcon />
						</ListItemAvatar>
						<ListItemText
							primary="JavaScript Functionality"
							secondary="JavaScript"
						/>
					</ListItem>
					<ListItem>
						<ListItemAvatar className={classes.checkMark}>
							<CheckIcon />
						</ListItemAvatar>
						<ListItemText primary="React Components" secondary="JSX" />
					</ListItem>
				</Grid>

				<Grid item sm={12} md={6} xs={12}>
					<Slide
						direction="up"
						in={congrats && true}
						timeout={{ enter: 400, exit: 400 }}
					>
						<img alt="Congrats" className={classes.img} src={rocketLearn} />
					</Slide>
				</Grid>
			</Grid>
			<Grid container spacing={6} className={classes.container}>
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
					<MoLink text="Try the playground" href={ROUTES.PLAYGROUND.path} />
				</Grid>
			</Grid>
		</>
	);
};

export default withStyles(styles)(LandingPage);
