import { makeStyles } from "@mui/styles";
import { BLUE_STLECT,  TABLE_BACKGROUND, WHITE_COLOR } from "../../helpers/colorsConstant";

export const useStyles = makeStyles({
  bodyStyle: {
    backgroundColor: TABLE_BACKGROUND,
    color: WHITE_COLOR,
    minHeight: "100vh",
  },
  logo: {
    width: "5%",
    borderRadius: "30px !important",
    marginLeft: "25px",
    marginBottom: "30px"
  },
  title: {
    fontSize:"30px",
    marginLeft: "3%",
    marginRight: "25%",
    color: "#00F2C3"
  },
  iconScanner:{
    width: "40px",
    height:"40px",
    marginTop: "-70px",
    marginLeft: "-100px",
    position: "absolute",
  },
  nav: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    marginBottom: "1vw !important",
  },
  scannerName: {
    background: BLUE_STLECT,
    Color: WHITE_COLOR,
    maxHeight: 35,
    fontWeight: "bolder !important",
    borderRadius: "8px !important",
    marginRight: "2vw",
  },
  iconName:{
    width:"100px",
    height:"50px",
    font:"revert-layer",
    marginTop:"25px",
    marginBottom:"1px",
    marginLeft:"80px"
  },
});
