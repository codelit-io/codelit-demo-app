import React, { useState, useEffect } from "react";
import { Component } from "./Component";
import Grid from "@material-ui/core/Grid";
import MoCard from "../../../components/shared/MoCard";
import { withAuthorization } from "../../../components/Session";
import Spinner from "../../../components/shared/Spinner";
import PageHeader from "../../../components/shared/PageHeader";

const Topics = ({ firebase, match }) => {
	const [topics, setTopics] = useState([]);
	const [loading, setLoading] = useState(true);

	const TopicList = ({ topicsProp }) => (
		<Grid container spacing={3}>
			{topicsProp &&
				topicsProp.length > 0 &&
				topicsProp.map((topic, index) => (
					<Grid item key={index} sm={12} md={6} xs={12}>
						<MoCard topic={topic} key={index} icon={true}></MoCard>
					</Grid>
				))}
		</Grid>
	);

	useEffect(() => {
		setLoading(true);
		/* change filtering by subTopic to id */

		if (match.params.subTopic) {
			firebase
				.subTopicDb(
					match.params.topic,
					match.params.subTopic.replace(/-/g, " ")
				)
				.on("child_added", snapshot => {
					const topics = snapshot.val();
					setTopics(topics);
					setLoading(false);
				});
		} else {
			firebase.topicDb(match.params.topic).on("value", snapshot => {
				const topics = snapshot.val().map(topic => ({
					...topic,
					url: `/learn/${match.params.course}/${
						topic.desc
					}/${topic.label.replace(/ /g, "-")}`,
					disable: !topic.stackblitz
				}));
				setTopics(topics);
				setLoading(false);
			});
		}

		return () => {
			firebase.topicDb().off();
		};
	}, [firebase, match]);

	return (
		<>
			<PageHeader
				course={match.params.course}
				topic={match.params.topic}
				subTopic={match.params.subTopic}
			></PageHeader>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					{match.params.subTopic && (
						<Component {...match.params} topics={topics}></Component>
					)}
				</Grid>
			</Grid>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Spinner loading={loading} color="primary" />
					{!match.params.subTopic && <TopicList topicsProp={topics} />}
				</Grid>
			</Grid>
		</>
	);
};

// const condition = authUser => !!authUser;
/* Demo no auth= */
const condition = authUser => true;

export default withAuthorization(condition)(Topics);
