import React, { lazy, Suspense } from "react";
import { retry } from "utils/retryLazyImports";

const Confetti = lazy(() => retry(() => import("react-dom-confetti")));

const config = {
	angle: 260,
	spread: 285,
	startVelocity: 30,
	elementCount: "102",
	duration: "1000",
	width: "12px",
	height: "12px",
	colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

const MoConfetti = ({ isActive }) => {
	return (
		<div style={{ position: "absolute", top: "0", left: "50%" }}>
			<Suspense>
				<Confetti active={isActive} config={config} />
			</Suspense>
		</div>
	);
};

export default MoConfetti;
