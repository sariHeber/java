import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  AZURE_COLOR,
  GRAY_COLOR,
  LIGHT_GRAY_COLOR,
  SHINING_AZURE,
  WHITE_COLOR,
} from "../../../helpers/colorsConstant";

export const useStyles = makeStyles({
  productButton: {
    backgroundColor: AZURE_COLOR,
  },
  servicesButton: {
    backgroundColor: GRAY_COLOR,
  },
  branchButton: {
    background: SHINING_AZURE,
  },
  category: {
    background: SHINING_AZURE,
  },
  box: {
    display: "inline-flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    zIndex: 1000,
    position: "relative",
    left: "-340px",
    gap: 5,
    paddingLeft: 10,
    paddingRight: 10,
    "@media (max-width: 1500px)": {
      left: "-20%",
      paddingLeft: 10,
    },
    "@media (max-width: 1300px)": {
      left: "-18%",
      paddingLeft: 10,
    },
    "@media (max-width: 1250px)": {
      top: 0,
      left: "-16%",
    },
    "@media (max-width: 1200px)": {
      top: 65,
      display: "inline-flex",
      justifyContent: "center",
    },
    "@media (max-width: 1135px)": {
      top: 10,
      display: "inline-flex",
      justifyContent: "center",
      left: 0,
    },
    "@media (max-width: 1124px)": {
      display: "inline-flex",
      justifyContent: "center",
      left: 0,
      top: 10,
    },
    "@media (max-width: 1114px)": {
      display: "inline-flex",
      justifyContent: "center",
      left: 0,
      top: 10,
    },
    "@media (max-width: 1097px)": {
      display: "inline-flex",
      justifyContent: "center",
      left: 0,
      top: 10,
    },
  },
  formControl: {
    "@media (max-width: 800px)": {
      maxWidth: "140px",
      paddingTop: "5px",
    },
  },
  inputLabel: {
    color: WHITE_COLOR + " !important",
    fontWeight: "bold !important",
    fontSize: "13px !important",
  },
  fromDate: {
    backgroundColor: AZURE_COLOR + " !important",
    width: "125px",
  },
  toDate: {
    backgroundColor: GRAY_COLOR + " !important",
    width: "125px",
    "@media (max-width: 800px)": {
      paddingTop: "5px",
    },
  },
});

export const theme = createTheme({
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          fontFamily: "Questrial",
          paddingLeft: "5px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: WHITE_COLOR,
          fontWeight: "bold",
          fontFamily: "Questrial",
          borderRadius: "6px",
          height: "41px",
          minWidth: "125px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: WHITE_COLOR,
          fontFamily: "Questrial",
          fontWeight: "bold",
          fontSize: "13px",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          width: "0.8em",
          height: "0.8em",
          color: WHITE_COLOR,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          paddingTop: "8px",
          fontSize: "13px",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: "41px",
          borderRadius: "6px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          fill: WHITE_COLOR,
          paddingTop: "5px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: GRAY_COLOR,
          color: WHITE_COLOR,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: LIGHT_GRAY_COLOR,
        },
      },
    },
  },
});
