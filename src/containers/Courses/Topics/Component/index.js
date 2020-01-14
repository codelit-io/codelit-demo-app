import React, { Suspense, useState } from "react";

import Dnd from "../../../../components/Dnd";
// import ReactPlayer from "react-player";
import Spinner from "../../../../components/shared/Spinner";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

const Component = ({ topics, classes }) => {
	const [state] = useState({ status: "" });
	return (
		<Suspense fallback={<Spinner loading={true} color="primary" />}>
			{/* <div className={`${classes.card} ${classes.audioCard}`}>
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
			</div> */}
			{/* <div
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
			</div> */}
			<Dnd></Dnd>

			<p>{state.status}</p>
		</Suspense>
	);
};

export default withStyles(styles)(Component);