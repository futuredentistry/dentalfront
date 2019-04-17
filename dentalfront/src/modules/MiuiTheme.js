const MiuiTheme = {
  typography: {
    useNextVariants: true,
    fontFamily: 'Nunito Sans',
  },
  palette: {
    primary: { main: '#233D4D' },
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
      h4: {
        fontSize: '34px',
        textAlign: 'center',
        letterSpacing: '0.25px',
      },
      h5: {
        fontWeight: 300,
        fontSize: '24px',
        lineHeight: 'normal',
        textAlign: 'center',
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
    MuiButton: {
      root: {
        marginBlockEnd: '10px',
        marginBlockStart: '10px',
        height: 62,
        borderRadius: '200px',
        width: '70%',
        marginLeft: '15%',
        marginRight: '15%',
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
        fontWeight: 900,
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        letterSpacing: '0.75px',
        textTransform: 'lowercase',
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
    MuiFormControlLabel: {
      root: {
        marginLeft: 'inherit!important',
      },
    },
    MuiListItem: {
      root: {
        paddingBottom: 0,
        paddingTop: 0,
      },
    },
    MuiFormHelperText: {
      root: {
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 0,
      },
    },
  },
}
export default MiuiTheme
