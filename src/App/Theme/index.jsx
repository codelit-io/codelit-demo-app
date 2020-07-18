/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Theme component  🎠
 *
 * Provides child component with a MUI theme. Currently used with <App/ > component
 *
 * @param {Object} children - Pass child components that are being wrapped by this component
 *
 * @see See [MUI theming](https://material-ui.com/customization/theming/#responsivefontsizes-theme-options-theme)
 * */

import React, { useMemo } from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
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
  );
};

export default React.memo(Theme);
