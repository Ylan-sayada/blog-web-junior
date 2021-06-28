import { makeStyles } from '@material-ui/core/styles';

let variables = {
    baseColor: "#03A9F4",
    secondaryColor: "#0288D1",
    textLightColor: "#FFFFFF",
    error: "#f44336",
    textDarkColor: "#212121",
    textDarkSecondaryColor: "#757575",
    dividerColor: "#BDBDBD",
    big: "1.4rem",
    small: "0.8rem",
    navheight: "56px",
    facebook: "#097feb",
    twitter: "#1c9cea",
    linkedin: "#0a66c2",
}

export let buttonStyle = makeStyles({
    root: {
        color: variables.textLightColor,
        backgroundColor: variables.baseColor,
        margin: "10px 0",
        transition: 'all 0.2s ease',

        '&:hover': {

            backgroundColor: variables.secondaryColor,
        }

    }
})
export let inputStyle = makeStyles({
    root: {
        '& label': {
            color: variables.textDarkColor,
        },
        '& .MuiInput-underline.Mui-error::after,.MuiInput-underline.Mui-error::before': {
            borderBottomColor: variables.error,
        },
        '& label.Mui-focused': {
            transition: 'all 0.2s ease',
            opacity: 0,
            color: variables.secondaryColor,
        },
        margin: '10px 0',
        '& .MuiInput-underline:after,.MuiInput-underline:before': {
            borderBottomColor: variables.baseColor,
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled)::before': {
            borderBottomColor: variables.baseColor
        }

    }
})