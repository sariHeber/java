import { makeStyles } from '@mui/styles'
import { GRAY_BACKGROUND_COLOR, LIGHT_GRAY_COLOR, TOOLTIP_BACKGROUND, TOOLTIP_SHADOW, WHITE_COLOR } from '../../../helpers/colorsConstant';
const useStyles = makeStyles({
  headerCard: {
    float: "left",
    margin: 12,
    textAlign: 'left'
  },
  nameCard: {
    fontSize: 13,
    color: LIGHT_GRAY_COLOR,
    marginBottom: 0,
  },
  iconCard: {
    marginTop: 0,
    float: "left",
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  icon: {
    width: '50%',
    height: '1.8vw',
  },
  sum: {
    flex: 'none',
    fontSize: 27
  },
  type: {
    float: "right",
    margin: 12,
  },
  styleCard: {
    fontFamily: 'Questrial',
    backgroundColor: GRAY_BACKGROUND_COLOR,
    position: "relative",
    height: 350,
    color: WHITE_COLOR,
    width: '32%',
    paddingRight: 2,
    paddingLeft: 0,
    overflow: "hidden",
    overflowX: 'auto',
    "@media (max-width: 1500px)": {
      width: '45%',
    },
    "@media (max-width: 700px)": {
      width: '80%',
      height: 320,
    },
    
  },
  allScannersCard: {
    fontFamily: 'Questrial',
    width: '99.5%',
    backgroundColor: GRAY_BACKGROUND_COLOR,
    position: "relative",
    height: 350,
    color: WHITE_COLOR,
    overflow: "hidden",
    overflowX: 'auto',
    overflowClipBox: 'padding-box'
  },
  header: {
    position: 'sticky',
    left: 5
  },
  tooltip: {
    borderRadius: '0.25rem',
    background: TOOLTIP_BACKGROUND,
    padding: '1rem',
    boxShadow: TOOLTIP_SHADOW,
    textAlign: 'center'
  }
  
});
export default useStyles