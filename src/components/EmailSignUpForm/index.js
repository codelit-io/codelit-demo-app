import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import FormHelperText from "@material-ui/core/FormHelperText";
import styles from "./styles";
import PropTypes from "prop-types";

const EmailSignUpForm = ({ classes, onSubmit, isInvalid, onChange, error }) => {
	return (
		<main className={classes.main}>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} onSubmit={onSubmit}>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="username">Name</InputLabel>
						<Input
							id="username"
							name="username"
							type="text"
							autoFocus
							onChange={onChange}
							placeholder="Mo Sharif"
						/>
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email">Email</InputLabel>
						<Input
							id="email"
							name="email"
							type="email"
							autoFocus
							autoComplete="email"
							onChange={onChange}
							placeholder="Mo@MoSkool.web.app"
						/>
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="passwordOne">Password</InputLabel>
						<Input
							id="passwordOne"
							name="passwordOne"
                            type="password"
							onChange={onChange}
							placeholder="Password"
						/>
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="passwordTwo">Confirm Password</InputLabel>
						<Input
							id="passwordTwo"
							name="passwordTwo"
                            type="password"
							onChange={onChange}
                            placeholder="Password"
						/>
					</FormControl>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						disabled={isInvalid}
					>
						Sign Up
					</Button>
					{error && (
						<FormHelperText
							className={classes.error}
							id="component-error-text"
							margin="dense"
							error={true}
							focused={true}
						>
							{error.message}
						</FormHelperText>
					)}
				</form>
			</div>
		</main>
	);
};

EmailSignUpForm.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EmailSignUpForm);
