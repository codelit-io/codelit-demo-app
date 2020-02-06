import React from "react";

import Grid from "@material-ui/core/Grid";
import Slide from "@material-ui/core/Slide";
import styles from "./styles";
import Title from "../../../../components/shared/Title";
import withStyles from "@material-ui/core/styles/withStyles";
import MoButton from "../../../../components/shared/MoButton";

const CongratsCardBase = ({ isActive, classes, triggerNextQuestion }) => {
	return (
		<>
			<div className={classes.container}>
				<Grid container>
					<Grid item md={6} sm={12} xs={12}>
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
								<MoButton  text="Next Question" handleClick={triggerNextQuestion} />
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
