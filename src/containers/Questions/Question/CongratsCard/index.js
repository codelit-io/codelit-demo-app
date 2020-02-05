import React from "react";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Button from "@material-ui/core/Button";
import congrats from "../../../../assets/congrats.png";
import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import styles from "./styles";
import Title from "../../../../components/shared/Title";
import withStyles from "@material-ui/core/styles/withStyles";

const CongratsCardBase = ({ isActive, classes, triggerNextQuestion }) => {
	return (
		<>
			<div className={classes.container}>
				<Grid container>
					<Grid item md={6} sm={12} xs={12}>
						<Slide
							direction="up"
							in={isActive}
							timeout={{ enter: 400, exit: 400 }}
						>
							<img alt="Congrats" className={classes.img} src={congrats} />
						</Slide>
					</Grid>
					<Grid item md={6} sm={12} xs={12}>
						<Slide
							direction="up"
							in={isActive}
							timeout={{ enter: 400, exit: 400 }}
							mountOnEnter
							unmountOnExit
						>
							<div>
								<Title text="👏Great work!👏" fade={isActive} />
								<Button
									variant="contained"
									color="primary"
									className={classes.button}
									onClick={() => triggerNextQuestion()}
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
