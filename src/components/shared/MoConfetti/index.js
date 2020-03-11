import React from "react";

import Confetti from "react-dom-confetti";

const config = {
	angle: -30,
	// spread: 45,
	// startVelocity: 50,
	// elementCount: "42",
	// dragFriction: "0.04",
	// duration: "3000",
	// stagger: "12",
	width: "12px",
	height: "12px",
	colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};
const config2 = {
	angle: 200,
	// spread: 65,
	// startVelocity: 50,
	// elementCount: "42",
	// dragFriction: "0.04",
	// duration: "3000",
	// stagger: "12",
	width: "12px",
	height: "12px",
	colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};
const MoConfettiBase = ({ isActive }) => {
	return (
		<>
			<div style={{ position: "absolute", top: "0", left: "0" }}>
				<Confetti active={isActive} config={config} />
			</div>
			<div style={{ position: "absolute", top: "0", right: "0" }}>
				<Confetti active={isActive} config={config2} />
			</div>
		</>
	);
};

const MoConfetti = React.memo(MoConfettiBase);

export default MoConfetti;
