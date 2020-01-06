import React, { useState, useEffect } from "react";
import { Component } from "./Component";
import Grid from "@material-ui/core/Grid";
import MoCard from "../../../components/shared/MoCard";
import { withAuthorization } from "../../../components/Session";
import Spinner from "../../../components/shared/Spinner";

const Topics = props => {
	const [topics, setTopics] = useState([]);
	const [loading, setLoading] = useState(true);

	const TopicList = ({ topicsProp }) => (
		<Grid container spacing={3}>
			{topicsProp.map((topic, index) => (
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
			/* Todo Make urls dynamic  */
			const constructUrl = topicsObject.map(
				topic => ({ ...topic, url: topic.label.replace(/ /g, "-")})
			);
			console.log(constructUrl)
			setTopics(topicsObject);
			setLoading(false);
		});

		return () => {
			props.firebase.topicDb().off();
		};
	}, [props]);

	return (
		<>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Component {...props.match.params}></Component>
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
