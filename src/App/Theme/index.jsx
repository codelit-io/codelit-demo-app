import React, { useMemo } from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import getTheme from "../../theme";
import useGlobal from "store";

const Theme = ({ children }) => {
    const [isDarkMode] = useGlobal(state => state.themeOptions.isDarkMode);

    const theme = useMemo(() => getTheme({ isDarkMode }), [isDarkMode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

export default React.memo(Theme)