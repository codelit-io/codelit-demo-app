import React from "react";
import * as ROUTES from "../../constants/routes";
import Drawer from "./Drawer";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Typography, Avatar, Grid, Box } from "@material-ui/core";
import useStyles from "./styles";
import { AuthUserContext } from "../Session";

const Navigation = () => {
	const classes = useStyles();
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
											className={classes.avatar}
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

export default Navigation;
