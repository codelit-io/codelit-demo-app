import React, { useState, useEffect } from "react";

import * as ROUTES from "../../constants/routes";
import AddIcon from "@material-ui/icons/Add";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import RestoreIcon from "@material-ui/icons/Restore";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles({
	root: {
		width: "100%"
	},
	margin: {
		margin: "10px"
	}
});

const BottomNav = ({ authUser, firebase, question, history, match }) => {
	const classes = useStyles();

	const [state, setState] = useState(question);
	const [loading, setLoading] = useState();

	const handleNextClick = () => {
		setLoading(true);

		firebase.getQuestion(Number(state.id) + 1).on("value", snapshot => {
			setState({ ...question, ...snapshot.val() });
			history.push(
				`${ROUTES.QUESTIONS.path}/${snapshot.val().label.replace(/ /g, "-")}`
			);
		});
	};

	const handlePreviousClick = () => {
		setLoading(true);

		if (state.id === "0") {
			return;
		}

		firebase.question(Number(state.id) - 1).on("value", snapshot => {
			setState({ ...question, ...snapshot.val() });
			history.push(
				`${ROUTES.QUESTIONS.path}/${snapshot.val().label.replace(/ /g, "-")}`
			);
		});
	};

	useEffect(() => {
		setLoading(true);
		const unsubscribe = firebase
			.question(match.params.question)
			.onSnapshot(snapshot => {
				setState(snapshot.data());
				setLoading(false);
			});

		return () => unsubscribe();
	}, [firebase, match]);

	return (
		<Slide direction="up" in={!loading} mountOnEnter unmountOnExit>
			<div>
				<BottomNavigation
					value={state}
					className={classes.root}
					showLabels={true}
				>
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

				{authUser && authUser.roles && authUser.roles.ADMIN && (
					<div style={{ display: "flex" }}>
						<Fab
							variant="extended"
							size="small"
							color="default"
							aria-label="add"
							className={classes.margin}
						>
							<EditIcon />
							Edit
						</Fab>
						<Fab
							variant="extended"
							size="small"
							color="default"
							aria-label="add"
							className={classes.margin}
						>
							<AddIcon />
							Add
						</Fab>
					</div>
				)}
			</div>
		</Slide>
	);
};

export default BottomNav;
