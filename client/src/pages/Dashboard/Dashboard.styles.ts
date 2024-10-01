import { makeStyles } from "@mui/styles";
import { BLACK_COLOR } from "../../helpers/colorsConstant";

export const useStyles = makeStyles({
  logo: {
    width: "75px",
    borderRadius: "30px !important",
    marginLeft: "2%",
  },
  div: {
    display: "flex",
    alignContent: "flex-start",
  },
  header: {
    position: "sticky",
    zIndex: 999,
    backgroundColor: BLACK_COLOR,
    top: 0,
    width: "100%",
    paddingTop: "5px",
    paddingBottom: "30px",
    "@media (max-width: 1200px)": {
      flexWrap: "wrap",
      paddingBottom: "50px",
    },
    "@media (max-width: 1130px)": {
      paddingBottom: "30px",
    },
  },

  ScannersGraf: {
    width: 90,
  },
  allGraf: {
    justifyContent: "center",
    alignItems: "center !important",
    display: "flex",
    flexFlow: "wrap",
    gap: 25,
    "@media (max-width: 1000px)": {
      alignItems: "center !important",
      flexDirection: "row",
      justifyContent: "center",
    },
    "@media (max-width: 700px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
});
