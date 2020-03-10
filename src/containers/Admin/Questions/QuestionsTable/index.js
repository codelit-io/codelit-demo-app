import React, { useState } from "react";
import MaterialTable from "material-table";
import MoTextarea from "../../../../components/shared/MoTextarea";

const QuestionsTable = ({
	questions,
	onEditQuestion,
	onRemoveQuestion,
	onCreateQuestion,
	handleRowClick
}) => {
	const [state, setState] = useState(questions);
	const [columns] = useState([
		{ title: "Id", field: "id", type: "numeric" },
		{
			title: "Label",
			field: "label",
			editComponent: props => <MoTextarea {...props} />
		},
		{
			title: "Question",
			field: "question",
			editComponent: props => <MoTextarea {...props} />
		},
		{
			title: "Answer",
			field: "answer",
			editComponent: props => <MoTextarea {...props} />
		},
		{ title: "Topic", field: "topic" },
		{ title: "Language", field: "language" },
		{ title: "Category", field: "category" },
		{
			title: "Content",
			field: "content",
			editComponent: props => <MoTextarea {...props} />
		}
	]);

	return (
		questions &&
		state && (
			<MaterialTable
				onRowClick={(event, rowData) => handleRowClick(rowData.id)}
				options={{ pageSize: 10, pageSizeOptions: [10, 20, 30, 40, 50] }}
				title="Questions"
				columns={columns}
				data={state}
				editable={{
					EditField: props => <textarea></textarea>,
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
								onRemoveQuestion(oldData.uid);
								return data;
							});
						})
				}}
			/>
		)
	);
};

export default QuestionsTable;
