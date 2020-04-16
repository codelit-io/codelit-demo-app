import React, { useEffect, useState, useCallback } from "react";

import Grid from "@material-ui/core/Grid";
import QuestionsList from "./QuestionsList";
import MoPage from "../../../components/shared/MoPage";
import MoProgressBar from "../../../components/shared/MoProgressBar";
import MoTitle from "../../../components/shared/MoTitle";

const QuestionsPage = ({
	authUser,
	isLoading,
	match,
	questions,
	collectionDetails,
}) => {
	const [points, setPoints] = useState(0);
	const calculateProgress = useCallback(() => {
		if (!authUser) {
			return false;
		}
		let numberOfQuestions = questions && questions.length;
		return numberOfQuestions && points
			? Math.round((points / numberOfQuestions) * 100) + "% Complete"
			: "0% Complete";
	}, [authUser, points, questions]);
	useEffect(() => {
		setPoints(authUser?.reports?.[match.params.collection]?.points);
	}, [authUser, match]);

	return (
		<MoPage title={collectionDetails?.title} isLoading={isLoading}>
			{questions && (
				<Grid container spacing={4}>
					<Grid item xs={12} sm={12} lg={6}>
						<QuestionsList
							points={points}
							questions={questions}
							url={match?.params?.collection}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<MoTitle
							text={collectionDetails.isProgressBar && "Your Progress"}
							fade={true}
							margin="0px 0 36px"
							width="100%"
						></MoTitle>
						{collectionDetails.isProgressBar && (
							<MoProgressBar
								authUser={authUser}
								points={points}
								progress={calculateProgress()}
							/>
						)}
					</Grid>
				</Grid>
			)}
		</MoPage>
	);
};

export default QuestionsPage;
