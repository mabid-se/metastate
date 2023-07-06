import React from "react";
import { useStyles } from "./Button-styles";
import { Grid } from "@mui/material";

const Button = ({
  variant,
  btnLink,
  onBtnClick,
  btnStartIco,
  btnText,
  btnEndIco,
}) => {
  const styleClasses = useStyles();
  return (
    <a
      href={btnLink}
      className={styleClasses.btnText}
      style={{ color: "#ffffff" }}
      onClick={onBtnClick}
    >
      <Grid
        sx={{
          py: 1,
          px: 2,
          cursor: "pointer",
          border: variant === "gradient" ? 0 : 1,
          background:
            variant === "gradient"
              ? `linear-gradient(90deg, #0092FF 0%, #6AEFFF 86.77%, #42E3FF 100%)`
              : "#07080D",
        }}
        className={styleClasses.btnContainer}
      >
        {btnStartIco && <>{btnStartIco}</>}
        <span>{btnText}</span>
        {btnEndIco && <>{btnEndIco}</>}
      </Grid>
    </a>
  );
};

export default Button;
