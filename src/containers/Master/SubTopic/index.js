import React, { useEffect, useState } from "react";

import CodeEditor from "../../../components/CodeEditor";
import PageHeader from "../../../components/shared/PageHeader";
import { withAuthentication } from "../../../components/Session";
import Spinner from "../../../components/shared/Spinner";

const SubTopic = ({ firebase, history, match }) => {
	const [loading, setLoading] = useState(false);
	const [subTopic, setSubTopic] = useState({});

    // const CodeEditorBase = ({})
	useEffect(() => {
		const subTopicRoute = match.params.subTopic;

		setLoading(true);

		firebase.getSubTopics().on("value", snapshot => {
			const filteredSubTopic = snapshot
				.val()
                .filter(s => s.label === subTopicRoute.replace(/-/g, " "));
                
            /* Future Update */
            /* Fetch data based on post id rather than label */
            /* Fetch individual posts instead of the whole thing */
            /* Use FB collections to help with this */

			setSubTopic(filteredSubTopic[0]);
			setLoading(false);
		});

		return () => {
			firebase.getSubTopics(subTopicRoute).off();
		};
	}, [firebase, match]);

	return (
		<>
			<PageHeader img="" title="Code Playground" history={history} />
			<Spinner loading={loading} color="primary" />
			<CodeEditor subTopic={subTopic} />
		</>
	);
};
export default withAuthentication(SubTopic);
