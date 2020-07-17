/**
 *
 * @author MoSkool
 * @version 1.0.0
 * @visibleName Theme Mode Switch ☯
 *
 * Renders a button icon with a moon and a sun. Controls switching theme modes between
 * dark and light modes. Uses global hook to store value for the dark mode
 *
 * @withStyle - HOC provides classes object to component for styling
 * @returns {<Button/>} - returns button component from material UI
 *
 * */

import React, { useCallback } from "react";

import IconButton from "@material-ui/core/IconButton";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import useGlobal from "store";

const ThemeSwitch = () => {
    // Global State
    const [themeOptions, addToThemeOptions] = useGlobal(
        state => state.themeOptions,
        actions => actions.addToThemeOptions
    );
    // set dark mode option in local storage and cache this function with useCallback
    const cacheIsDarkMode = useCallback(() => {
        localStorage.setItem("isDarkMode", JSON.parse(!themeOptions.isDarkMode));
    }, [themeOptions.isDarkMode]);

    // Theme change handler
    const handleThemeModeChange = () => {
        // debugger
        cacheIsDarkMode();
        addToThemeOptions({ isDarkMode: !themeOptions.isDarkMode });
    };

    // Flip between icon components for each mode
    const SwitchIcon = () =>
        themeOptions.isDarkMode ? <NightsStayIcon /> : <WbSunnyIcon />;

    return (
        <IconButton
            color="primary"
            aria-label="Switch theme mode"
            aria-haspopup="true"
            onClick={() => handleThemeModeChange()}
        >
            <SwitchIcon />
        </IconButton>
    );
};

export default ThemeSwitch;
