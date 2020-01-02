import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	iframe: {
		borderRadius: theme.shape.borderRadius,
		border: "1px solid black"
	},
	card: {
		boxShadow: "0 0 51px 0 rgba(0,0,0,.08), 0 6px 18px 0 rgba(0,0,0,.05)",
		height: "550px",
		"&:hover": {
			boxShadow: "0 0 114px 0 rgba(0,0,0,.08), 0 30px 25px 0 rgba(0,0,0,.05)",
			background: "white"
		}
	}
}));

export default useStyles;
