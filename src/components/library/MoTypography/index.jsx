/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Typography component
 *
 * Handles all types of typography such as Heading and Paragraph elements
 * Can be customized with different fonts, color and margin
 *
 * @param {Object} children - Pass child components that are being wrapped by this component
 * @param {String} color - Font color one of "greyLight", "grey", "greyDark"
 * @param {String} font - Font family one of "breeSerif", "openSans"
 * @param {String} marginBottom - Bottom margin one of "xs", "sm", "md", "lg"
 * @param {String} text - text displayed in typography component
 * @param {String} variant - Material UI component variant, see propTypes at the bottom of component
 * @returns {<Typography/>} - returns Material UI Typography
 *
 * @see See [Material Typography](https://material-ui.com/components/typography/)
 * */

import React from "react";

import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";

const MoTypography = ({
	children,
	color,
	font,
	marginBottom,
	text,
	variant
}) => {
	const useStyles = makeStyles((theme) =>
		createStyles({
			breeSerif: {
				fontFamily: theme.breeSerif
			},
			openSans: {
				fontFamily: theme.openSans
			},
			greyLight: {
				color: theme.grey.light
			},
			grey: {
				color: theme.grey.medium
			},
			greyDark: {
				color: theme.grey.dark
			},
			xs: {
				marginBottom: theme.space?.xs
			},
			sm: {
				marginBottom: theme.space?.sm
			},
			md: {
				marginBottom: theme.space?.md
			},
			lg: {
				marginBottom: theme.space?.lg
			}
		})
	);

	const classes = useStyles();

	if (!text && !children) {
		return null;
	}

	return (
		<Typography
			className={`${classes[marginBottom]} ${classes[font]} ${classes[color]}`}
			variant={variant}
		>
			{text}
			{children}
		</Typography>
	);
};

MoTypography.propTypes = {
	color: PropTypes.oneOf(["greyLight", "grey", "greyDark"]).isRequired,
	font: PropTypes.oneOf(["breeSerif", "openSans"]),
	marginBottom: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
	text: PropTypes.string,
	variant: PropTypes.oneOf([
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"subtitle1",
		"subtitle2",
		"body1",
		"body2",
		"button",
		"caption",
		"overline"
	]).isRequired
};

export default MoTypography;
