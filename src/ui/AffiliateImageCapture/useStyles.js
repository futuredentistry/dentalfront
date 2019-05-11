import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    image: {
        position: 'relative',
        width: '100% !important',
        '&:before': {
            paddingTop: '133.34%',
            content: "close-quote",
            display: 'block',
        },
        '&:hover': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
        },
    },
    imageButton: {
        position: 'relative',
        height: 36,
        marginBlockEnd: '10px',
        marginBlockStart: '10px',
        borderRadius: '200px',
        width: '70%',
        marginLeft: '15%',
        marginRight: '15%',
        color: 'white!important',
        background: '#233D4D',
        fontWeight: 900,
        fontSize: '14px',
        lineHeight: '36px',
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',

    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    photoHeader: {
        textAlign: 'left',
        marginLeft: '3px',
    },
    iconColor: {
        color: '#219653',
        position: 'relative',
        top: '5px',
    },
    greedRow: {
        paddingBottom: '3%',
    },
    headerButton: {
        marginBlockStart: '11px',
        width: '96%',
        marginLeft: '2%',
        marginRight: '2%',
        textDecoration: 'underline',
    },
    headerRight: {
        justifyContent: 'flex-end',
    }
}))

export default useStyles