import React, { useEffect, useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-html";
import "ace-builds/src-min-noconflict/theme-tomorrow";

import { Grid } from "@material-ui/core";
import styles from "./styles";
import Spinner from "../../components/shared/Spinner";
import Title from "../../components/shared/Title";
import withStyles from "@material-ui/core/styles/withStyles";

const CodeEditor = ({ classes, subTopic }) => {
	const [state, setState] = useState([]);
	const [loading, setLoading] = useState(true);

	const handleOnChange = userAnswer => {
        console.log(userAnswer)
		setState({...state, question: userAnswer});
	};

	useEffect(() => {
        setState(subTopic);
        setLoading(false);
	}, [subTopic]);

	return (
		<Grid container spacing={6}>
			<Spinner loading={loading} color="primary" />

			<LiveProvider code={state.question}>
				<Grid item md={6} sm={12} xs={12}>
					<Title text={state.label} fade={true} />
					<AceEditor
						className={classes.editor}
						editorProps={{ $blockScrolling: true }}
						enableBasicAutocompletion={true}
						fontSize={14}
						mode="html"
						name="livePreview"
						onChange={handleOnChange}
						theme="tomorrow"
						style={{ width: "100%", height: "300px" }}
						value={state.question}
					/>
				</Grid>
				<Grid item md={6} sm={12} xs={12}>
					<Title text="Code Preview" fade={true} />
					<LivePreview className={classes.preview} />
				</Grid>
				<Grid item md={12} sm={12} xs={12}>
					<Title text="Debug" fade={true}></Title>
					<LiveError className={classes.error} />
				</Grid>
				<Grid item md={12} sm={12} xs={12}>
					<LiveEditor />
				</Grid>
			</LiveProvider>
		</Grid>
	);
};

export default withStyles(styles)(CodeEditor);
