import React from "react";
import DraggableContainer from "../ComponentMaker/DragAndDrop/DraggableContainer";

const LandingPage = () => {
	const list = ["input", "button", "switch", "checkbox", "slider", "link"];
	return (
		<div>
			<h1>
				Hello React + Firebase{" "}
				<span role="img" aria-label="heart">
					{" "}
					💙
				</span>
			</h1>
			<DraggableContainer list={list}></DraggableContainer>
		</div>
	);
};

export default LandingPage;
