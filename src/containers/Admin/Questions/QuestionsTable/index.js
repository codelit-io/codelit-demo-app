import React, { useState } from "react";
import MaterialTable from "material-table";

const QuestionsTable = ({
	questions,
	onEditQuestion,
	onRemoveQuestion,
	onCreateQuestion
}) => {
	const [state, setState] = useState(questions);
	const [columns] = useState([
		{ title: "Label", field: "label" },
		{ title: "Question", field: "question" },
		{ title: "Answer", field: "answer" },
		{ title: "Element", field: "element" },
		{ title: "Id", field: "id", type: "numeric" },
		{ title: "Status", field: "status" }
	]);

	return (
		questions &&
		state && (
			<MaterialTable
				title="Questions"
				columns={columns}
				data={state}
				editable={{
					onRowAdd: newData =>
						new Promise(resolve => {
							resolve();
							setState(prevState => {
								const data = [...prevState];
								data.push(newData);
								onCreateQuestion(data);
								return data;
							});
						}),
					onRowUpdate: (newData, oldData) =>
						new Promise(resolve => {
							setTimeout(() => {
								resolve();
								if (oldData) {
									setState(prevState => {
										const data = [...prevState];
										data[data.indexOf(oldData)] = newData;
										return { ...prevState, ...data };
									});
								}
							}, 600);
						}),
					onRowDelete: oldData =>
						new Promise(resolve => {
							setTimeout(() => {
								resolve();
								setState(prevState => {
									const data = [...prevState];
									data.splice(data.indexOf(oldData), 1);
									return { ...prevState, ...data };
								});
							}, 600);
						})
				}}
			/>
		)
	);
};

export default QuestionsTable;
