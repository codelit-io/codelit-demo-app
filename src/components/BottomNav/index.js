import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RestoreIcon from "@material-ui/icons/Restore";
import * as ROUTES from "../../constants/routes";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

const useStyles = makeStyles({
	root: {
		width: "100%"
	}
});

const BottomNav = ({ firebase, history, question }) => {
	const classes = useStyles();

	const [state, setState] = useState(question);

	const handleNextClick = () => {
		firebase.getQuestion(Number(state.id) + 1).on("value", snapshot => {
			setState({ ...question, ...snapshot.val() });
			history.push(
				`${ROUTES.QUESTIONS.path}/${snapshot.val().label.replace(/ /g, "-")}`
			);
		});
	};

	const handlePreviousClick = () => {
		if (state.id === "0") {
			return;
		}

		firebase.getQuestion(Number(state.id) - 1).on("value", snapshot => {
			setState({ ...question, ...snapshot.val() });
			history.push(
				`${ROUTES.QUESTIONS.path}/${snapshot.val().label.replace(/ /g, "-")}`
			);
		});
	};

	useEffect(() => {
		firebase.getQuestion(question.id).on("value", snapshot => {
			setState({ ...question, ...snapshot.val() });
		});

		return () => {
			firebase.getQuestion().off();
		};
	}, [firebase, question]);

	return (
		<BottomNavigation value={state} showLabels className={classes.root}>
			<BottomNavigationAction
				label="Previous"
				onClick={handlePreviousClick}
				icon={<NavigateBeforeIcon />}
			/>
			<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
			<BottomNavigationAction label="Nearby" icon={<RestoreIcon />} />
			<BottomNavigationAction
				label="Next"
				onClick={handleNextClick}
				icon={<NavigateNextIcon />}
			/>
		</BottomNavigation>
	);
};

export default BottomNav;
