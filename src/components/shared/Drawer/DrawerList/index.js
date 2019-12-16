import React from "react";
import { makeStyles } from "@material-ui/styles";
import { List, ListItem, ListItemText } from "@material-ui/core";
// import { toggleDrawer } from "../../../../util";

const useStyles = makeStyles({
	list: {
		width: "auto"
	}
});

export const DrawerList = () => {
	const classes = useStyles();
	return (
		<div
			className={classes.list}
			role="presentation"
			// onClick={() => toggleDrawer(false)}
			// onKeyDown={() => toggleDrawer(false)}
		>
			<List>
				{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
					<ListItem button key={text}>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);
};
