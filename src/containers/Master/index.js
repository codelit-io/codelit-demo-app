import React, { useEffect, useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-html";
import "ace-builds/src-min-noconflict/theme-tomorrow";

import { compose } from "recompose";
import { data } from "../../assets/dummyData";
import { Grid } from "@material-ui/core";
import MoComponent from "../../components/ComponentMaker/MoComponent";
import styles from "./styles";
import withStyles from "@material-ui/styles/withStyles";
import { withAuthentication } from "../../components/Session";

const Master = ({ classes, history, firebase, match }) => {
	const [subTopics, setSubTopics] = useState(data);
	const [topics, setTopics] = useState({ name: "test" });
	useEffect(() => {}, [firebase]);

	const handleOnChange = e => {
		console.log(e);
	};

	return (
		<>
			<h1>
				Code Playground
				<span role="img" aria-label="cool emoji">
					😎
				</span>
			</h1>
			<section>
				<Grid container spacing={3}>
					<Grid item md={6} xm={12}>
						<AceEditor
							className={classes.editor}
							editorProps={{ $blockScrolling: true }}
							enableBasicAutocompletion={true}
							fontSize={14}
							mode="html"
							name="UNIQUE_ID_OF_DIV"
							onChange={handleOnChange}
							theme="tomorrow"
							value="<body>
                            <section>
                                <h1>I am a Heading 1</h1>
                                <h2>I am a Heading 2</h2>
                                <h3>I am a Heading 3</h3>
                                <h4>I am a Heading 4</h4>
                            </section>
                            
                            <section>
                                <p>I am a paragraph</p>
                                <span>I am a span</span>
                                <span>-</span>
                                <span>I am also a span</span>
                            </section>
                            </body>"
						/>
					</Grid>
					<Grid item md={6} xm={12}>
						{/* <MoComponent {...data.leftList}></MoComponent> */}
					</Grid>
					<LiveProvider
						code="<body>
                            <section>
                                <h1>I am a Heading 1</h1>
                                <h2>I am a Heading 2</h2>
                                <h3>I am a Heading 3</h3>
                                <h4>I am a Heading 4</h4>
                            </section>
                            
                            <section>
                                <p>I am a paragraph</p>
                                <span>I am a span</span>
                                <span>-</span>
                                <span>I am also a span</span>
                            </section>
                            </body>"
					>
						<Grid item md={6} xm={12} className={classes.editor}>
							<LiveEditor />
						</Grid>
						<Grid item md={6} xm={12}>
							<LivePreview />
						</Grid>
						<Grid item md={12} xm={12}>
							<LiveError />
						</Grid>
					</LiveProvider>
				</Grid>
			</section>
		</>
	);
};
export default compose(withAuthentication, withStyles(styles))(Master);
