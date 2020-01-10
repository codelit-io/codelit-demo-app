import React from "react";
import Fade from "@material-ui/core/Fade";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const GooCards = ({ topics }) => (
	<Grid container spacing={3} className="cardContainer">
		{topics.map((topic, index) => (
			<Grid key={index} item sm={12} md={6} xs={12} className="cardGrid">
				<Link to={(topic && topic.url) || ""}>
					<Fade timeout={{ enter: 800 }} in={true}>
						<div className="card">
							<div>
								<h1>{index}</h1>
							</div>
							<input type="checkbox" />
							<Typography
								variant="body2"
								color="textSecondary"
								component="span"
								className="button"
							>
								{topic.label}
							</Typography>

							<p>
								Phasellus nec sem in justo pellentesque facilisis. In hac
								habitasse platea dictumst. Praesent metus tellus, elementum eu,
								semper a, adipiscing nec, purus. Maecenas tempus, tellus eget
								condimentum rhoncus, sem quam semper libero, sit amet adipiscing
								sem neque sed ipsum. Donec pede justo, fringilla vel, aliquet
								nec, vulputate eget, arcu.
							</p>
							<div className="shapes"></div>
							<div className="photo">
								<div></div>
								<div></div>
								<div></div>
							</div>
							<div className="blob">
								<div className="glob"></div>
							</div>
						</div>
					</Fade>
				</Link>
			</Grid>
		))}
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
			<defs>
				<filter id="goo">
					<feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
					<feColorMatrix
						in="blur"
						mode="matrix"
						values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
						result="goo"
					/>
					<feComposite in="SourceGraphic" in2="goo" operator="atop" />
				</filter>
			</defs>
		</svg>
		<svg className="svg" viewBox="0 0 400 400">
			<defs>
				<filter id="duotone-filter-post-one">
					<feColorMatrix
						type="matrix"
						values="0.14453125 0 0 0 0.33203125 0.71875 0 0 0 0.27734375 -0.34765625 0 0 0 0.73046875 0 0 0 1 0"
					></feColorMatrix>
				</filter>
			</defs>
		</svg>
	</Grid>
);

export default GooCards;
