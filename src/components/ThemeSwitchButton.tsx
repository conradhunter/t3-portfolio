import React from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

function ThemeSwitchButton({ handleThemeSwitch, darkMode }) {
  return (
    <button
      className="mr-4 duration-100 hover:scale-110"
      onClick={handleThemeSwitch}
    >
      {darkMode ? (
        <DarkModeOutlinedIcon style={{ fontSize: "30px", color: "#fff" }} />
      ) : (
        <LightModeOutlinedIcon style={{ fontSize: "30px", color: "#fff" }} />
      )}
    </button>
  );
}

export default ThemeSwitchButton;
