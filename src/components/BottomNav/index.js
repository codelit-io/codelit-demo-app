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
	const [isNext, setIsNext] = useState(true);
	const [isPrev, setIsPrev] = useState(true);

	const handleNextClick = () => {
		getQuestionById(Number(state.id) + 1);
	};

	const handlePreviousClick = () => {
		if (state.id === "0") {
			setIsPrev(false);
			return;
		}

		getQuestionById(Number(state.id) - 1);
	};

	const getQuestionById = id => {
		firebase.getQuestionById(id).onSnapshot(snapshot => {
			if (snapshot.size) {
				setIsNext(true);
				setIsPrev(true);
				let question = [];
				snapshot.forEach(doc => question.push({ ...doc.data(), uid: doc.id }));
				setState(question[0]);
				history.push(ROUTES.QUESTIONS.path + "/" + question[0].slug);
			} else {
				setIsNext(false);
			}
		});
	};

	useEffect(() => {
		if (state.id === "0") {
			setIsPrev(false);
			return;
		}
		const unsubscribe = firebase
			.question(match.params.question)
			.onSnapshot(snapshot => {
				setState(snapshot.data());
			});

		return () => unsubscribe();
	}, [firebase, match, state]);

	return (
		<Slide direction="up" in={!!question} mountOnEnter unmountOnExit>
			<div>
				<BottomNavigation
					value={state}
					className={classes.root}
					showLabels={true}
				>
					{isPrev && (
						<BottomNavigationAction
							label="Previous"
							onClick={handlePreviousClick}
							icon={<NavigateBeforeIcon />}
						/>
					)}
					<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />

					<BottomNavigationAction label="Reset" icon={<RestoreIcon />} />

					{isNext && (
						<BottomNavigationAction
							label="Next"
							onClick={handleNextClick}
							icon={<NavigateNextIcon />}
						/>
					)}
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
