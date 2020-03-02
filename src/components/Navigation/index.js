import React, { useState } from "react";

import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";
import Button from "@material-ui/core/Button";
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
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SignOutButton from "../SignOut";

const Navigation = ({ classes }) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
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
									<>
										<Button
											aria-controls="avatar-menu"
											aria-haspopup="true"
											className={classes.avatar}
											onClick={handleClick}
										>
											<Avatar
												alt="Me"
												src={authUser && authUser.photoURL}
												className={`${authUser &&
													authUser.roles &&
													authUser.roles.ADMIN &&
													classes.adminAvatar}`}
											/>
										</Button>
										<Menu
											id="avatar-menu"
											anchorEl={anchorEl}
											keepMounted
											open={Boolean(anchorEl)}
											onClose={handleClose}
										>
											{authUser ? (
												<>
													<MenuItem
														to={ROUTES.ACCOUNT.path}
														component={Link}
														onClick={handleClose}
													>
														My account
													</MenuItem>
													<SignOutButton
														handleClose={handleClose}
													></SignOutButton>
												</>
											) : (
												<>
													<MenuItem
														to={ROUTES.SIGN_IN.path}
														component={Link}
														onClick={handleClose}
													>
														Sign in
													</MenuItem>
													<MenuItem
														to={ROUTES.SIGN_UP.path}
														component={Link}
														onClick={handleClose}
													>
														Sign up
													</MenuItem>
												</>
											)}
										</Menu>
									</>
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
