import { makeStyles } from "@mui/styles";
import { BLACK_COLOR, MINT_GREEN, PRIMARY_COLOR, SHINE_ORANGE, SHINE_RED, TABLE_BACKGROUND, TABLE_HEAD } from "../../../helpers/colorsConstant";

export const useStyles = makeStyles({
  table: {
    backgroundColor: TABLE_BACKGROUND,
    minWidth: "98vw",
    maxWidth: "98vw !important",
    margin: "0.5vw",
    marginTop: "10vh",
  },
  tableHead: {
    backgroundColor: TABLE_HEAD,
    borderColor: TABLE_BACKGROUND +" !important",
  },
  tableRow: {
    backgroundColor: PRIMARY_COLOR,
  },
  indexTableCell: {
    textAlign: "left",
    maxWidth: "1vw !important",
    width: "1vw !important",
  },
  statusTableCell: {
    textAlign: "left",
    maxWidth: "7vw !important",
    width: "6vw !important",
  },
  descriptionTableCell: {
    textAlign: "left",
    maxWidth: "27vw !important",
    width: "27vw !important",
  },
  tableCellCompare: {
    visibility: "hidden",
    borderColor: TABLE_BACKGROUND +" !important",
  },
  equalIcon: {
    background: MINT_GREEN,
    padding: 4,
    borderRadius: 2,
  },
  notEqualIcon: {
    background: SHINE_RED,
    padding: 4,
    borderRadius: 2,
  },
  compareCell: {
    borderColor: TABLE_BACKGROUND +" !important",
    backgroundColor: TABLE_BACKGROUND,
    width: "12vw",
  },
  passedStatusDiv: {
    display: "flex",
    width: "100px",
    height: "27px",
    background: MINT_GREEN,
    borderRadius: 7,
    color: BLACK_COLOR,
    fontWeight: "bold",
  },
  icon: {
    width: "5px",
    margin: "2px",
  },
  status: {
    margin: "5px",
  },
  failedStatusDiv: {
    display: "flex",
    width: "95px",
    height: "27px",
    background: SHINE_RED,
    borderRadius: 7,
    color: BLACK_COLOR,
    fontWeight: "bold",
  },
  notMatch: {
    background: SHINE_ORANGE,
    display: "flex",
    width: "120px",
    height: "27px",
    borderRadius: 7,
    color: BLACK_COLOR,
    fontWeight: "bold",
  },
});
