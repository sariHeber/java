import { makeStyles } from "@mui/styles";
import { BLUE_STLECT, GRAY_STLECT, GREEN_STLECT, RED_STLECT, WHITE_COLOR } from "../../../helpers/colorsConstant";

const useStyles = makeStyles({
  productName: {
    minWidth:120,
    background: BLUE_STLECT,
    color: WHITE_COLOR,
    fontWeight: "bolder !important",
    fontSize:"13px !important",
    maxHeight:41,
    marginRight:"6px",
    textAlign:"center",
    borderRadius:"8px !important"  , 
  },
  microserviceName: {
    minWidth: 120,
    background: GRAY_STLECT,
    Color: WHITE_COLOR,
    maxHeight:41,
    marginRight:"6px",
    fontWeight: "bolder !important",
    fontSize:"13px !important",
    borderRadius:"8px !important",

  },
  branch: {
    background:GREEN_STLECT,
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
  selects: {
    justifyContent: "flex-start",
    alignItems: "center",
   
  },

  box: {
    display: "flex",
    flexDirection: "row",
    marginBottom:"50px",
    marginTop: "-15px",
  },
  
  formControl:{
    border: 0,
    borderRadius: "50px !important"
  },
  inputLable:{
    fontWeight: "bolder !important",
    fontSize:"13px !important"
  }
});
export default useStyles;
