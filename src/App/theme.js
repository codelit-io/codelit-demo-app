import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import responsiveFontSizes from "@material-ui/core/styles/responsiveFontSizes";

const bigShadow =
	"0 24px 24px -18px rgba(69,104,129,.33), 0 9px 45px 0 rgba(114,119,160,.12)";

const colors = {
	grey: {
		light: "#a6a6a6",
		medium: "#424B54",
		dark: "#383c40",
		darkest: "#2b2b2b"
	},
	green: {
		light: "#41D3BD",
		dark: "#157A6E",
		darkest: ""
	},
	yellow: {
		light: "#F5D547",
		dark: "",
		darkest: ""
	},
	white: {
		medium: "#FFFFF2"
	},
	blue: {
		medium: "#276ef1"
	}
};

const padding = {
  xs: "4px",
  sm: "12px",
  md: "36px",
  lg: "48px",
  xl: "96px"
}

let theme = createMuiTheme({
	bigShadow: bigShadow,
	card: {
		boxShadow: bigShadow,
		"&:hover": {
			transform: "translateY(-5px)",
			backgroundColor: "#FFF"
		},
		"&:hover .desc": {
			color: "white"
		},
		transition:
			"transform .35s cubic-bezier(.4,0,.2,1),box-shadow .35s cubic-bezier(.4,0,.2,1)",
		transform: "translateY(0)"
	},
	container: {
		width: "calc(100vw - 28.799999999999997rem)"
	},
	flexAlignCenter: {
		display: "flex",
		alignItems: "center"
	},
	padding: padding,
	grey: colors.grey,
	green: colors.green,
	yellow: colors.yellow,
	white: colors.white,
	blue: colors.blue
});

const fontOptions = {
	breakpoints: ["sm", "md", "lg", "xl"]
};

theme = responsiveFontSizes(theme, fontOptions);

export default theme;
