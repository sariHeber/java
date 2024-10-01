import { makeStyles } from "@mui/styles";
import { BLUE_STLECT, GREEN_STLECT, RED_STLECT, WHITE_COLOR } from "../../../helpers/colorsConstant";

export const useStyles = makeStyles({
  
  branch: {
    background: GREEN_STLECT,
    Color: WHITE_COLOR,
    minWidth: 120,
    maxHeight:41,
    marginRight:"6px",
    fontWeight: "bolder !important",
    fontSize:"13px !important",
    borderRadius:"8px !important",
    
  },
  report: {
    background: BLUE_STLECT,
    Color: WHITE_COLOR,
    minWidth: "80 !important",
    maxHeight:41,
    marginRight:"6px",
    fontWeight: "bolder !important",
    fontSize:"13px !important",
    borderRadius:"8px !important",
  },
  
  goToReport:{
    background: RED_STLECT,
    color: WHITE_COLOR +" !important",
    minWidth: "120 !important",
    maxHeight:41,
    marginRight:"6px",
    fontWeight: "bolder !important",
    fontSize:"13px !important",
    textTransform:"none",
    borderRadius:"8px !important",
    
    
  },
  box: {
    display: "flex",
    flexDirection: "row",
    marginBottom:"50px",
    width: "60%"
  },
  inputLable:{
    fontWeight: "bolder !important",
    fontSize:"13px !important",
  }
});
