const MiuiTheme = {
  typography: {
    useNextVariants: true,
    fontFamily: 'Open Sans',
  },
  palette: {
    primary: { main: '#000' },
    secondary: { main: '#fff' },
  },

  overrides: {
    MuiBackdrop: {
      root: {
        opacity: '0.2!important',
      },
    },
    MuiTypography: {
      h3: {
        fontSize: '26px',
        lineHeight: '1.69',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#44566c',
      },
      h6: {
        fontSize: '16px',
        lineHeight: '1.69',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#44566c',
      },
      subtitle1: {
        fontSize: '14px',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#8996a6',
        letterSpacing: '0.5px',
      },
      body2: {
        textAlign: 'center',
      },
    },
    MuiFab: {
      root: {
        height: 125,
        width: 125,
      },
      sizeSmall: {
        height: 40,
        width: 40,
      },
      sizeMedium: {
        height: 75,
        width: 75,
      },
    },
    MuiButton: {
      root: {
        marginBlockEnd: '10px',
        marginBlockStart: '10px',
        height: 50,
        borderRadius: '10px',
        fontSize: '18px',
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
      },
      sizeSmall: {
        height: 36,
        width: '40%',
        marginLeft: '30%',
        marginRight: '30%',
        marginBlockEnd: '5px',
        marginBlockStart: '5px',
        fontSize: '14px',

      },
      sizeLarge: {
        height: 75,
        width: '60%',
        marginLeft: '20%',
        marginRight: '20%',
        marginBlockEnd: '7px',
        marginBlockStart: '7px',
        fontSize: '14px',
      },
      label: {
        // textTransform: 'capitalize',
        fontWeight: 600,
        fontStretch: 'normal',
        fontStyle: 'normal',
        textAlign: 'left',
      },
      flat: {
        marginBlockEnd: '0px',
        marginBlockStart: '0px',
        height: 40,
      },
    },
    MuiFormControl: {
      root: {
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',

      },
    },
    MuiInputLabel: {
      root: {
        fontSize: '14px',
        fontWeight: 'bold',
        letterSpacing: '1.2px',
        color: '#8996a6',
      },
    },

    MuiInput: {
      underline: {
        borderBottom: '2px solid #824fa0',
      },
    },
  },
}
export default MiuiTheme
