import React, { lazy, useEffect, useState } from "react";

import * as ROUTES from "../../constants/routes";
import { AuthUserContext, withAuthentication } from "../../components/Session";

const QuestionsPage = lazy(() => import("./QuestionsPage"));

const Questions = ({ firebase, match, history }) => {
	const [configs, setConfigs] = useState({});
	useEffect(() => {
		firebase
			.moskool()
			.doc(match.params.collection)
			.get()
			.then(doc => {
				if (doc.exists) {
					setConfigs(doc.data());
				} else {
					history.push(ROUTES.NOT_FOUND.path);
				}
			})
			.catch(error => {
				console.log("Error getting document:", error);
			});

		return () => {
			setConfigs({});
		};
	}, [firebase, match, history]);

	return (
		<AuthUserContext.Consumer>
			{authUser =>
				configs &&
				configs.slug && (
					<QuestionsPage
						authUser={authUser}
						configs={configs}
						firebase={firebase}
					/>
				)
			}
		</AuthUserContext.Consumer>
	);
};
export default withAuthentication(Questions);
