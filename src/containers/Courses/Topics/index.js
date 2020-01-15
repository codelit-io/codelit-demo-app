import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import MoCard from "../../../components/shared/MoCard";
import { withAuthentication } from "../../../components/Session";
import Spinner from "../../../components/shared/Spinner";
import PageHeader from "../../../components/shared/PageHeader";
import DragAndDrop from "../../../components/DragAndDrag";

const Topics = ({ firebase, match, history }) => {
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

	const data = {
		items: [
			{
				id: "0",
				label: "Button",
				element: "button",
				question: "<button> I am a Button <button>",
				answer: "<button> I am a Button </button>",
				status: "😴"
			},
			{
				id: "1",
				label: "Paragraph",
				element: "typography",
				question: "I am a Paragraph </p>",
				answer:   "<p> I am a Paragraph </p>",
				status: "🤕"
			},
			{
				id: "2",
				label: "Input",
				element: "input",
				question: "<input value='I am a text Input' type='NULL' />",
				answer:   "<input value='I am a text Input' type='text' />",
				status: "😷"
			},
			{
				id: "3",
				label: "Switch",
				element: "switch",
				question: "<switch> I am a Material switch",
				answer:   "<switch> I am a Material switch </switch>",
				status: "🤒"
			},
			{
				id: "4",
				label: "Checkbox",
				element: "checkbox",
				question: "<input type='NULL' /> I am a checkbox",
				answer:   "<input type='checkbox' /> I am a checkbox",
				status: "🤧"
			},
			{
				id: "5",
				label: "Slider",
				element: "slider",
				question: "<Slider > I am a Material Slider",
				answer:   "<Slider > I am a Material Slider </Slider>",
				status: "🥵"
			},
			{
				id: "6",
				label: "Html Link",
				element: "link",
				question: "<a src='moskool.com'> I am an html link </a>",
				answer:   "<a href='moskool.com'> I am an html link </a>",
				status: "😵"
			},
			{
				id: "7",
				label: "Html text Input",
				element: "inputHtml",
				question: "< type='text' />",
				answer:   "<input type='text' />",
				status: "🥶"
			},
			{
				id: "8",
				label: "Html submit button",
				element: "buttonHtml",
				question: "<button type='NULL'>I am a submit button :)</button>",
				answer:   "<button type='submit'>I am a submit button :)</button>",
				status: "🤒"
			}
		],
		selected: [
			{
				id: "9",
				label: "Drop Elements 👇",
				element: "typography",
				question: "I am Awesome! 😎",
				answer: "I am Awesome! 😎",
				status: "🧐"
			}
		]
	};

	useEffect(() => {
		setLoading(true);
		/* change filtering by subTopic to id */
		if (match.params.subTopic) {
			firebase.subTopic(match.params.topic).on("child_added", snapshot => {
				setTopics(snapshot.val());
				setLoading(false);
			});
		} else {
			firebase.topics(match.params.course, match.params.topic).on("value", snapshot => {
				const topics = snapshot.val().topics.map(topic => ({
					...topic,
					url: `/learn/${match.params.course}/${topic.desc}/${topic.label.replace(/ /g, "-")}`,
					disable: !topic.stackblitz
				}));
				setTopics(topics);
				setLoading(false);
			});
		}

		return () => {
			firebase.subTopic().off();
			firebase.topics().off();
		};
	}, [firebase, match]);

	return (
		<>
			<PageHeader course={match.params.course} topic={match.params.topic} subTopic={match.params.subTopic} history={history}></PageHeader>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					{match.params.subTopic && <DragAndDrop {...data} />}
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

export default withAuthentication(Topics);
