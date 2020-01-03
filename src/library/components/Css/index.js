import React from "react";
import PageHeader from "../../../components/shared/PageHeader";

export const Css = ({ topic }) => {
	return (
		<>
			<PageHeader title={topic}></PageHeader>
			<pre>
				<code>{"<p class='paragraph'> I am a paragraph </p>"}</code>
			</pre>
			<pre>
				<code>{".paragraph {}"}</code>
			</pre>
		</>
	);
};

export default Css;
