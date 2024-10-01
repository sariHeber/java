import { makeStyles } from '@mui/styles'
import { GRAY_BACKGROUND_COLOR, GRAY_COLOR, PRIMARY_COLOR, WHITE_COLOR } from '../../helpers/colorsConstant';
const useStyles = makeStyles({
    box: {
        backgroundColor: GRAY_BACKGROUND_COLOR,
        borderRadius: 5,
    },
    body: {
        backgroundColor: PRIMARY_COLOR,
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'flex-start',
        height: '100vh'
    },
    title: {
        color: WHITE_COLOR
    },
    Typography: {
        color: WHITE_COLOR
    },
    textField: {
        borderColor: GRAY_BACKGROUND_COLOR,
        borderWidth: '0.5px',
        borderStyle: 'solid',
        '& label.Mui-focused': {
            color: WHITE_COLOR,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '',

        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: WHITE_COLOR,
            },
            '&:hover fieldset': {
                borderColor: WHITE_COLOR,
            },
            '&.Mui-focused fieldset': {
                borderColor: WHITE_COLOR,
            },
        },
    },
    img: {
        width: 150,
        borderRadius: 100
    },
    btn: {
        backgroundColor: GRAY_COLOR +" !important",
        color: WHITE_COLOR +" !important"
    },

    logo: {
        width: "5%",
        borderRadius: "30px !important",
    },
    div: {
        display: 'flex',
        alignContent: 'flex-start',
        margin: 13,
    },
});
export default useStyles;