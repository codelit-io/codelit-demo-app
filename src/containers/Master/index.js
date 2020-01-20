import React, { useEffect, useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-html";
import "ace-builds/src-min-noconflict/theme-tomorrow";

import { compose } from "recompose";
import { data } from "../../assets/dummyData";
import { Grid } from "@material-ui/core";
import MoComponent from "../../components/ComponentMaker/MoComponent";
import PageHeader from "../../components/shared/PageHeader";
import styles from "./styles";
import Title from "../../components/shared/Title";
import withStyles from "@material-ui/styles/withStyles";
import { withAuthentication } from "../../components/Session";

const reactCode = `
const Header = "<p>test</p>"

render(<Header></Header>)`;

const htmlCode = `
<body>
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
</body>`;

const Master = ({ classes, history, firebase, match }) => {
	// const [subTopics, setSubTopics] = useState(data);
	// const [topics, setTopics] = useState({ name: "test" });
	const [topic, setTopic] = useState(htmlCode);

	useEffect(() => {}, [firebase]);

	const handleOnChange = e => {
		setTopic(e);
	};

	return (
		<>
			<PageHeader img="" title="Code Playground" history={history} />
			<section>
				<Grid container spacing={6}>
					<Grid item md={6} xm={12}></Grid>
					<Grid item md={6} xm={12}>
						{/* <MoComponent {...data.leftList}></MoComponent> */}
					</Grid>
					<LiveProvider code={topic}>
						<Grid item md={6} xm={12}>
							<Title text="Update broken Html Syntax" fade={true} />
							<AceEditor
								className={classes.editor}
								editorProps={{ $blockScrolling: true }}
								enableBasicAutocompletion={true}
								fontSize={14}
								mode="html"
								name="livePreview"
								onChange={handleOnChange}
								theme="tomorrow"
								style={{ width: "100%" }}
								value={topic}
							/>
						</Grid>
						<Grid item md={6} xm={12}>
							<Title text="Code Preview" fade={true} />
							<LivePreview className={classes.preview}/>
						</Grid>
						<Grid item md={12} xm={12}>
							<LiveError />
						</Grid>
						<Grid item md={12} xm={12}>
							<Title text="Debug" fade={true}></Title>
							<LiveEditor />
						</Grid>
					</LiveProvider>
				</Grid>
			</section>
		</>
	);
};
export default compose(withAuthentication, withStyles(styles))(Master);
