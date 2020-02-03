import React, { lazy } from "react";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

const MoConfetti = lazy(() => import("../../../components/shared/MoConfetti"));

const CongratsCard = ({ isActive, classes, triggerNextQuestion }) => {
	return (
		<>
			<div className={classes.container}>
				<Grid container>
					<Grid item md={6} sm={12} xs={12}>
						<Grow in={isActive} timeout={{ enter: 2200, exit: 400 }} mountOnEnter unmountOnExit>
							<img
								alt="Congrats"
								className={classes.img}
								src="https://firebasestorage.googleapis.com/v0/b/tool-builder.appspot.com/o/icons%2Fcongrats.png?alt=media&token=b10c7d54-60ed-431c-8e1b-7081d61fabec"
							/>
						</Grow>
					</Grid>
					<Grid item md={6} sm={12} xs={12}>
						<Grow in={isActive} timeout={{ enter: 2200, exit: 400 }} mountOnEnter>
							<div>
								<h1>Great work!</h1>
								<Button
									variant="contained"
									color="primary"
									className={classes.button}
									onClick={triggerNextQuestion}
								>
									Next Question <ArrowForwardIcon />
								</Button>
							</div>
						</Grow>
					</Grid>
				</Grid>
			</div>
			<MoConfetti isActive={isActive} />
		</>
	);
};

export default withStyles(styles)(CongratsCard);
