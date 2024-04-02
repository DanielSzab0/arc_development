import {createTheme} from "@material-ui/core";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/pacifico/400.css';
import '@fontsource/raleway/100.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/700.css';


const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"
const arcGray = "#868686"

export default createTheme({
    palette: {
        common: {
            blue: arcBlue,
            orange: arcOrange
        },
        primary: {
            main: arcBlue
        },
        secondary: {
            main: arcOrange
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem"
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white",
        },
        h2: {
           fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: arcBlue,
            lineHeight: 1.5
        },
        h3: {
           fontFamily: "Pacifico",
           fontSize: "2.5rem",
           color: arcBlue
        },
        h4: {
            fontFamily: "Raleway",
            fontSize: "1.5rem",
            color: arcBlue,
            fontWeight: 800
        },
        subtitle1: {
            fontSize: "1.25rem",
            fontWeight: 400,
            color: arcGray
        },
        subtitle2: {
            color: "white",
            fontSize: "1.25rem",
            fontWeight: 400
        },
        body1: {
            fontSize: "1,25rem",
            color: arcGray,
            fontWeight: 400
        },
        learnButton: {
            borderColor: arcBlue,
            color: arcBlue,
            borderWidth: 2,
            textTransform: "none",
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold"
        }
    }
});