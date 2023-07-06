// ---| MUI Imports |---
import { makeStyles } from "@mui/styles";

// ---| Project Imports |---
// import { myTheme } from "../../theme";

export const useStyles = makeStyles((myTheme) => ({
  btnText: {
    fontFamily: "Montserrat",
    fontWeight: "medium",
    textDecoration: "none",
    textTransform: "capitalize",
    textDecoration: "none",
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    gap: 6,
    borderRadius: 32,
    padding: "4px 10px",
  },
}));
