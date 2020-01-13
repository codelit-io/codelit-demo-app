import React from "react";

import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";
import Drawer from "./Drawer";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

const Navigation = ({ classes }) => {
	return (
		<div className={classes.root}>
			<AppBar position="static" color="default" className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					<Grid container spacing={3} className={classes.container}>
						<Grid item xs={4} sm={4} md={4} lg={4}>
							<Drawer />
						</Grid>
						<Grid item xs={4} sm={4} md={4} lg={4}>
							<Typography className={classes.title} variant="h6" noWrap>
								<Link
									to={ROUTES.LANDING.path}
									style={{ color: "#383c40", textDecoration: "none" }}
								>
									<Box
										fontWeight="fontWeightLight"
										className={classes.linkText}
									>
										Mo Skool
									</Box>
								</Link>
							</Typography>
						</Grid>
						<Grid item xs={4} sm={4} md={4} lg={4}>
							<AuthUserContext.Consumer>
								{authUser => (
									<Link to={ROUTES.ACCOUNT.path}>
										<Avatar
											alt="Me"
											src={authUser && authUser.photoURL}
											className={`${classes.avatar} ${authUser &&
												authUser.roles &&
												authUser.roles.ADMIN &&
												classes.adminAvatar}`}
										/>
									</Link>
								)}
							</AuthUserContext.Consumer>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default withStyles(styles)(Navigation);
