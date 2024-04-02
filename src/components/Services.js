import React from "react";
import {Link} from "react-router-dom";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ButtonArrow from "./ui/ButtonArrow";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2rem",
        }
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
    },
    subtitle: {
        marginBottom: "1rem"
    },
    icon: {
        marginLeft: "2rem",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: "10rem",
        [theme.breakpoints.down("sm")]: {
            padding: 25,
        }
    },
}));

export default function Services(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container direction="column">
            <Grid item style={{marginLeft: matchesSM ? 0 : "5rem", marginTop: matchesSM ? "1rem" : "2rem"}}>
                <Typography
                    align={matchesSM ? "center" : undefined}
                    variant="h2"
                    gutterBottom
                >
                    Services
                </Typography>
            </Grid>
            {" "}
            {/*-----iOS/Android Block-----*/}
            <Grid item>
                <Grid
                    container
                    direction="row"
                    justifyContent={matchesSM ? "center" : "flex-end"}
                    className={classes.serviceContainer}
                    style={{marginTop: matchesSM ? "1rem" : "5rem"}}
                >
                    <Grid
                        item
                        style={{
                            textAlign: matchesSM ? "center" : undefined,
                            width: matchesSM ? undefined : "35rem"
                        }}

                    >
                        <Typography variant="h4">
                            iOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Access. Increase Engagement.
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web experience or create a standalone app{" "}
                            {matchesSM ? null : <br/>}with either mobile platform.
                        </Typography>
                        <Button
                            component={Link}
                            to="/mobileapps"
                            variant="outlined"
                            className={classes.learnButton}
                            onClick={() => {
                                props.setValue(1);
                                props.setSelectedIndex(2);
                            }}
                        >
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : "5rem"}}>
                        <img className={classes.icon} alt="custom software icon" src={mobileAppsIcon} width="250rem"/>
                    </Grid>
                </Grid>
            </Grid>
            {" "}
            {/*-----Custom Services Block-----*/}
            <Grid item>
                <Grid
                    container
                    direction="row"
                    justifyContent={matchesSM ? "center" : undefined}
                    className={classes.serviceContainer}
                    style={{marginLeft: matchesSM ? 0 : "5rem"}}
                >
                    <Grid
                        item
                        style={{
                            textAlign: matchesSM ? "center" : undefined,
                            width: matchesSM ? undefined : "35rem"
                        }}
                    >
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete Digital solution, from investigation to{" "}
                            <span className={classes.specialText}>celebration.</span>
                        </Typography>
                        <Button
                            component={Link}
                            to="/customsoftware"
                            variant="outlined"
                            className={classes.learnButton}
                            onClick={() => {
                                props.setValue(1);
                                props.setSelectedIndex(1);
                            }}
                        >
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt="mobile phone icon" src={customSoftwareIcon}/>
                    </Grid>
                </Grid>
            </Grid>
            {" "}
            {/*-----Websites Block-----*/}
            <Grid item>
                <Grid
                    container
                    direction="row"
                    justifyContent={matchesSM ? "center" : "flex-end"}
                    className={classes.serviceContainer}
                    style={{marginBottom: "10rem"}}
                >
                    <Grid
                        item
                        style={{
                            textAlign: matchesSM ? "center" : undefined,
                            width: matchesSM ? undefined : "35rem"
                        }}
                    >
                        <Typography variant="h4">
                            Websites Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for Search Engines, built for speed.
                        </Typography>
                        <Button
                            component={Link}
                            to="/websites"
                            variant="outlined"
                            className={classes.learnButton}
                            onClick={() => {
                                props.setValue(1);
                                props.setSelectedIndex(3);
                            }}
                        >
                            <span style={{marginRight: 10}}>Learn More</span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : "5rem"}}>
                        <img className={classes.icon} alt="website icon" src={websitesIcon} width="250rem"/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}