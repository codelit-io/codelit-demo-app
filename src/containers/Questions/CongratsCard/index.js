import React from "react";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import congrats from "../../../assets/congrats.png";

const CongratsCardBase = ({ isActive, classes, triggerNextQuestion }) => {
	return (
		<>
			<div className={classes.container}>
				<Grid container>
					<Grid item md={6} sm={12} xs={12}>
						<Slide
							direction="up"
							in={isActive}
							timeout={{ enter: 800, exit: 400 }}
							
						>
							<img alt="Congrats" className={classes.img} src={congrats} />
						</Slide>
					</Grid>
					<Grid item md={6} sm={12} xs={12}>
						<Slide
							direction="up"
							in={isActive}
							timeout={{ enter: 800, exit: 400 }}
							mountOnEnter
							unmountOnExit
						>
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
						</Slide>
					</Grid>
				</Grid>
			</div>
		</>
	);
};

const CongratsCard = React.memo(CongratsCardBase);

export default withStyles(styles)(CongratsCard);
