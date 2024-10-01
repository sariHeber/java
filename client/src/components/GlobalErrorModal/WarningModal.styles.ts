import { makeStyles } from '@mui/styles'
import { ERROR_MODAL_BACKGROUND,  SHINE_RED, WHITE_COLOR } from '../../helpers/colorsConstant';
const useStyles = makeStyles({
    box: {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 200,
        backgroundColor: WHITE_COLOR,
        borderColor: SHINE_RED,
        borderWidth: "5px",
        borderStyle: "solid",
        p: 4,
        borderRadius: 10,
    },
    Typography: {
        textAlign: 'center',
    },
    btn: {
        marginTop: 6,
        width: 200,
        margin: 50,
        color:  WHITE_COLOR + " !important",
        background: ERROR_MODAL_BACKGROUND,
    }
});
export default useStyles;