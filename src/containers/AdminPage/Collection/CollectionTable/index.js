import React, { useState } from "react";
import MaterialTable from "material-table";
import MoTextarea from "components/library/MoTextarea";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const CollectionTable = ({
  questions,
  onEditQuestion,
  onRemoveQuestion,
  onCreateQuestion,
  // handleRowClick,
}) => {
  const [state, setState] = useState(questions);
  const [columns] = useState([
    { title: "Id", field: "id", type: "numeric" },
    {
      title: "Label",
      field: "label",
      editComponent: (props) => <MoTextarea {...props} />,
    },
    {
      title: "Question",
      field: "question",
      editComponent: (props) => <MoTextarea {...props} />,
    },
    {
      title: "Answer",
      field: "answer",
      editComponent: (props) => <MoTextarea {...props} />,
    },
    { title: "Title", field: "title" },
    { title: "Subtitle", field: "subtitle" },
    {
      title: "Match %",
      field: "matchPercent",
      editComponent: (props) => (
        <Select
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        >
          <MenuItem value={1}>100%</MenuItem>
          <MenuItem value={0.99}>99%</MenuItem>
          <MenuItem value={0.98}>98%</MenuItem>
          <MenuItem value={0.97}>97%</MenuItem>
          <MenuItem value={0.96}>96%</MenuItem>
          <MenuItem value={0.95}>95%</MenuItem>
          <MenuItem value={0.94}>94%</MenuItem>
          <MenuItem value={0.93}>93%</MenuItem>
          <MenuItem value={0.92}>92%</MenuItem>
          <MenuItem value={0.91}>91%</MenuItem>
          <MenuItem value={0.9}>90%</MenuItem>
        </Select>
      ),
    },
    { title: "Language", field: "language" },
    { title: "Category", field: "category" },
    {
      title: "Content",
      field: "content",
      editComponent: (props) => <MoTextarea {...props} />,
    },
  ]);

  return (
    questions &&
    state && (
      <MaterialTable
        // Todo move to actions array
        // onRowClick={(event, rowData) => handleRowClick(rowData.id)}
        options={{ pageSize: 10, pageSizeOptions: [10, 20, 30, 40, 50] }}
        title="Questions"
        columns={columns}
        data={state}
        style={{ backgroundColor: "none", boxShadow: "none" }}
        editable={{
          EditField: (props) => <textarea></textarea>,
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              resolve();
              setState((prevState) => {
                let data = [...prevState];
                data.push(newData);
                onCreateQuestion(newData);
                return data;
              });
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  let data = [...prevState];
                  data[data.indexOf(oldData)] = newData;
                  onEditQuestion(newData);
                  return data;
                });
              }
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              resolve();
              setState((prevState) => {
                let data = [...prevState];
                data.splice(data.indexOf(oldData), 1);
                onRemoveQuestion(oldData.uid);
                return data;
              });
            }),
        }}
      />
    )
  );
};

export default CollectionTable;
