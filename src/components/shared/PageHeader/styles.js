import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	linkText: {
		color: "#383c40",
		textTransform: "capitalize",
        textDecoration: "none",
        verticalAlign: "middle"
    },
    header: {
        marginBottom: "40px",
        textAlign: "center",
    },
    arrow: {
        fontSize: "12px"
    }
}));

export default useStyles;
