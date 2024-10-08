import { makeStyles } from "@mui/styles";
import { BLACK_COLOR, BLUE_COLOR, BLUE_COMPAR_BACKGROND, CLICKED_GREEN_BUTTON, FILTER_BUTTON, GREEN_COLOR, RED_COLOR, RED_COMPAR_BACKGROND, SHADOW_BLUE_BUTTON, SHADOW_GREEN_BUTTON, SHADOW_ON_CLICK_BLUE_BUTTON, SHADOW_RED_BUTTON, WHITE_COLOR } from "../../../helpers/colorsConstant";

const useStyles = makeStyles({
  redButtonClicked: {
    background: RED_COMPAR_BACKGROND,
    border: 0,
    borderRadius: 3,
    fontWeight: "bolder !important",
    boxShadow: SHADOW_RED_BUTTON,
    color: WHITE_COLOR,
    height: 53,
    width: 80,
  },
  redButtonNotClicked: {
    background: FILTER_BUTTON,
    borderStyle:"solid !important",
    borderColor: RED_COLOR +" !important",
    borderWidth: "1px !important",
    borderRadius: 3,
    fontWeight: "bolder !important",
    boxShadow: SHADOW_RED_BUTTON,
    color: RED_COLOR +" !important",
    height: 53,
    width: 80,
  },

  greenButtonClicked: {
    background: CLICKED_GREEN_BUTTON,
    border: 0,
    borderRadius: 3,
    fontWeight: "bolder !important",
    boxShadow: SHADOW_GREEN_BUTTON,
    color: WHITE_COLOR,
    height: 53,
    width: 80,
  },
  greenButtonNotClicked: {
    background: FILTER_BUTTON,
    borderStyle:"solid !important",
    borderColor: GREEN_COLOR +" !important",
    borderWidth: "1px !important",
    borderRadius: 3,
    fontWeight: "bolder !important",
    boxShadow: SHADOW_GREEN_BUTTON,
    color: GREEN_COLOR +" !important", 
    height: 53,
    width: 80,
  },
  blueButtonClicked: {
    background: BLUE_COMPAR_BACKGROND,
    border: 0,
    borderRadius: 3,
    boxShadow: SHADOW_ON_CLICK_BLUE_BUTTON,
    color: WHITE_COLOR,
    fontWeight: "bolder !important",
    height: 53,
    width: 80,
  },
  blueButtonNotClicked: {
    background: FILTER_BUTTON,
    borderStyle:"solid !important",
    borderColor: BLUE_COLOR +" !important",
    borderWidth: "1px !important",
    borderRadius: 3,
    fontWeight: "bolder !important",
    boxShadow: SHADOW_BLUE_BUTTON,
    color: BLUE_COLOR +" !important",
    height: 53,
    width: 80,
  },
  divNumber: {
    color: BLACK_COLOR,
    display: "block",
    width: 50,
    height: 20,
    margin: 1,
    backgroundColor: WHITE_COLOR,
    borderRadius: 10,
    fontWeight: "bolder",
  },
});
export default useStyles;
