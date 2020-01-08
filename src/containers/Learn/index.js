import React from "react";
import MoCard from "../../components/shared/MoCard";
import Grid from "@material-ui/core/Grid";
import PageHeader from "../../components/shared/PageHeader";
import * as ROUTES from "../../constants/routes";
import Typography from "@material-ui/core/Typography";

const Learn = ({ match }) => {
	const topics = [
		{
			label: "Front-end",
			desc: "Learn HTML, CSS, JS and JS Frameworks",
			img: "https://firebasestorage.googleapis.com/v0/b/tool-builder.appspot.com/o/icons%2F012-startup.png?alt=media&token=15a19307-46ea-4995-87d6-2cf060098b3d",
			url: ROUTES.FRONTEND.path
		},
		{
			label: "Back-end",
			desc: "Learn nodeJs, mongoDB and Firebase cloud",
			img: "https://firebasestorage.googleapis.com/v0/b/tool-builder.appspot.com/o/icons%2F010-creativity.png?alt=media&token=db80e5d6-710d-4005-a4a1-e42c756a6387",
			disable: true,
		},
		{
			label: "DevOps",
			desc: "Learn Docker and other fun stuff",
			img: "https://firebasestorage.googleapis.com/v0/b/tool-builder.appspot.com/o/icons%2F029-wearable%20technogy.png?alt=media&token=bc20e7d4-e9b7-4674-8b5b-36bb761e693a",
			disable: true,
		}
	];
	return (
		<>
			<PageHeader title={ROUTES.LEARN.title}></PageHeader>
			<Grid container spacing={3}>
				{topics.map((topic, index) => (
					<Grid key={index} item sm={12} md={6} xs={12}>
						<MoCard topic={topic}></MoCard>
					</Grid>
				))}
			</Grid>
			{
				<Typography variant="subtitle1">
					Icons made by{" "}
					<a href="https://www.flaticon.com/authors/wanicon" title="wanicon" style={{color: "#3a9fff"}}>
						wanicon
					</a>
				</Typography>
			}
		</>
	);
};

export default Learn;
