import React, { lazy } from "react";
import PageHeader from "../../../components/shared/PageHeader";
import useStyles from "./styles";

const ReactPlayer = lazy(() => import("react-player"));

const Css = ({ course, topic }) => {
	const classes = useStyles();
	return (
		<>
			<PageHeader title={topic} course={course}></PageHeader>
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
			<div className={`${classes.card} ${classes.playgroundCard}`}>
				<iframe
					src="https://stackblitz.com/edit/basic-css-moskool?embed=1&file=index.html&hideExplorer=1&hideNavigation=1"
					title="basic-css-moskool"
					width="100%"
					height="100%"
					className={classes.iframe}
				/>
			</div>
		</>
	);
};

export default Css;
