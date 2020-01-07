import React, { Suspense, useState } from "react";
import Spinner from "../../../../components/shared/Spinner";
import useStyles from "./styles";
import ReactPlayer from "react-player";

export const Component = ({ topics }) => {
	console.log(topics)
	const classes = useStyles();
	const [state, setState] = useState({ status: "" });
	return (
		<Suspense fallback={<Spinner loading={true} color="primary" />}>
			<div className={`${classes.card} ${classes.audioCard}`}>
				{topics && topics.podcast && (
					<ReactPlayer
						url={topics.podcast}
						playing
						controls={true}
						light={false}
						width="100%"
						height="50px"
					/>
				)}
			</div>
			<div
				onClick={() => setState({ status: "Saved!" })}
				className={`${classes.card} ${classes.playgroundCard}`}
			>
				{topics && topics.stackblitz && (
					<iframe
						src={topics.stackblitz}
						title="basic-html-moskool"
						width="100%"
						height="100%"
						className={classes.iframe}
					/>
				)}
			</div>
			<p>{state.status}</p>
		</Suspense>
	);
};
