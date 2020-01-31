import React, { useState } from "react";
import MaterialTable from "material-table";

const QuestionsTable = ({
	questions,
	onEditQuestion,
	onRemoveQuestion,
	onCreateQuestion,
	handleRowClick
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
				onRowClick={(event, rowData) => handleRowClick(rowData.slug)}
				options={{ pageSize: 10, pageSizeOptions: [10, 20, 30, 40, 50] }}
				title="Questions"
				columns={columns}
				data={state}
				editable={{
					onRowAdd: newData =>
						new Promise(resolve => {
							resolve();
							setState(prevState => {
								let data = [...prevState];
								data.push(newData);
								onCreateQuestion(newData);
								return data;
							});
						}),
					onRowUpdate: (newData, oldData) =>
						new Promise(resolve => {
							resolve();
							if (oldData) {
								setState(prevState => {
									let data = [...prevState];
									data[data.indexOf(oldData)] = newData;
									onEditQuestion(newData);
									return data;
								});
							}
						}),
					onRowDelete: oldData =>
						new Promise(resolve => {
							resolve();
							setState(prevState => {
								let data = [...prevState];
								data.splice(data.indexOf(oldData), 1);
								onRemoveQuestion(oldData.slug);
								return data;
							});
						})
				}}
			/>
		)
	);
};

export default QuestionsTable;
