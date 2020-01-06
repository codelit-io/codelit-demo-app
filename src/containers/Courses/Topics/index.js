import React, { useState, useEffect } from "react";
import { Component } from "./Component";
import Grid from "@material-ui/core/Grid";
import MoCard from "../../../components/shared/MoCard";
import { withAuthorization } from "../../../components/Session";
import Spinner from "../../../components/shared/Spinner";
import PageHeader from "../../../components/shared/PageHeader";

const Topics = props => {
	const [topics, setTopics] = useState([]);
	const [loading, setLoading] = useState(true);

	const TopicList = ({ topicsProp }) => (
		<Grid container spacing={3}>
			{topicsProp &&
				topicsProp.map((topic, index) => (
					<Grid item key={index} sm={6} md={3} xs={12}>
						<MoCard topic={topic} key={index}></MoCard>
					</Grid>
				))}
		</Grid>
	);

	useEffect(() => {
		setLoading(true);
		props.firebase.topicDb(props.match.params.topic).on("value", snapshot => {
			const topicsObject = snapshot.val();

			const topics =
				topicsObject &&
				topicsObject.map(topic => ({
					...topic,
					url: `learn/${topic.desc}/${topic.label.replace(/ /g, "-")}`
				}));

			setTopics(topics);
			setLoading(false);
		});

		return () => {
			props.firebase.topicDb().off();
		};
	}, [props]);

	return (
		<>
			<PageHeader title={props.match.params.topic} course={props.match.params.course}></PageHeader>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Component {...props.match.params} topics={topics}></Component>
				</Grid>
			</Grid>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Spinner loading={loading} color="primary" />
					<TopicList topicsProp={topics} />
				</Grid>
			</Grid>
		</>
	);
};

// const condition = authUser => !!authUser;
/* Demo no auth= */
const condition = authUser => true;

export default withAuthorization(condition)(Topics);
