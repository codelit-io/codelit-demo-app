import React, { Suspense, useState } from "react";
import Spinner from "../../../../components/shared/Spinner";
import useStyles from "./styles";
import ReactPlayer from "react-player";

export const Component = ({ topics }) => {
	console.log('topics')
	const classes = useStyles();
	const [state, setState] = useState({ status: "" });
	return (
		<Suspense fallback={<Spinner loading={true} color="primary" />}>
			<div className={`${classes.card} ${classes.audioCard}`}>
				<ReactPlayer
					url="https://firebasestorage.googleapis.com/v0/b/tool-builder.appspot.com/o/podcasts%2FtestAudio.mp3?alt=media&token=780760ee-5214-4973-b83a-f951bbb90d1a"
					playing
					controls={true}
					light={false}
					width="100%"
					height="50px"
				/>
			</div>
			<div onClick={() => setState({status: "Saved!"})} className={`${classes.card} ${classes.playgroundCard}`}>
				<iframe
					src="https://stackblitz.com/edit/basic-html-moskool?embed=1&file=index.html&hideExplorer=1&hideNavigation=1"
					title="basic-html-moskool"
					width="100%"
					height="100%"
					className={classes.iframe}
				/>
			</div>
			<p>{state.status}</p>
		</Suspense>
	);
};
