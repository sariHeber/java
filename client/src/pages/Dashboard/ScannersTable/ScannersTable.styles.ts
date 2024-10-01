import { makeStyles } from '@mui/styles';
import { BUTTON_COLOR, HEADER_COLOR, PRIMARY_COLOR, WHITE_COLOR } from '../../../helpers/colorsConstant';

export const useStyles = makeStyles({
    tableRow: {
        backgroundColor: PRIMARY_COLOR,
        border: 0,
        borderColor: PRIMARY_COLOR
    },
    tableHead: {
        backgroundColor: HEADER_COLOR,
        color: WHITE_COLOR
    }
    ,
    table: {
        margin: 13,
        maxWidth: '98%',
    },
    button: {
        backgroundColor: BUTTON_COLOR,
        color: WHITE_COLOR,
        minWidth: 15,
    },
    paginatin: {
        color: WHITE_COLOR
    }
})