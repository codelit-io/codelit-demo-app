import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";
import MoCard from "../../components/shared/MoCard";
import PageHeader from "../../components/shared/PageHeader";
import Spinner from "../../components/shared/Spinner";
import { withAuthentication } from "../../components/Session";

const Master = ({ firebase, history, match }) => {
	const [loading, setLoading] = useState(false);
	const [subTopics, setSubTopics] = useState([]);

	const TopicsList = ({ subTopics }) =>
		Object.keys(subTopics).map((subTopic, index) => (
			<Grid key={index} item xs={12} sm={12} md={6}>
				<MoCard topic={subTopics[subTopic]}></MoCard>
			</Grid>
		));

	useEffect(() => {
		setLoading(true);
		firebase.getSubTopics().on("value", snapshot => {
			const subTopics = snapshot.val().map(subTopic => ({
				...subTopic,
				url: `/master/${subTopic.label.replace(/ /g, "-")}`
			}));
			setSubTopics(subTopics);
			setLoading(false);
		});

		return () => {
			firebase.getSubTopics().off();
		};
	}, [firebase]);

	return (
		<>
			<PageHeader img="" title="Questions" history={history} />
			<Spinner loading={loading} color="primary" />
			<Grid container spacing={3}>
				<TopicsList subTopics={subTopics} />
			</Grid>
		</>
	);
};
export default withAuthentication(Master);
