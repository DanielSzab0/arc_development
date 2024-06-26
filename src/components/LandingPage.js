import React from "react";
import Lottie from "react-lottie";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import CallToAction from "./ui/CallToAction";

import animationsData from "../animations/landinganimation/data";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";


const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "50rem",
        minWidth: "21rem",
        marginTop: "2rem",
        marginLeft: "10%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: "30rem"
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    buttonContainer: {
        marginTop: "1rem"
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width: 145
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
            marginBottom: "2rem",
        }
    },
    mainContainer: {
        marginTop: "5rem",
        [theme.breakpoints.down("md")]: {
            marginTop: "3rem"
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2rem",
        }
    },
    heroTextContainer: {
        minWidth: "21.5rem",
        marginLeft: "1rem",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    heroText: {
        [theme.breakpoints.down("sm")]: {
            paddingLeft: 35,
            paddingRight: 35
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
        marginTop: "12rem",
        [theme.breakpoints.down("sm")]: {
            padding: 25,
        }
    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10rem",
        [theme.breakpoints.down("sm")]: {
            paddingTop: "8rem",
            paddingBottom: "8rem",
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
            width: "100%"
        }
    },
    infoBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%"
    }
}));

export default function LandingPage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationsData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Grid container direction="column" className={classes.mainContainer}>
            {/*-----Hero Block-----*/}
            <Grid item>
                <Grid
                    container
                    justifyContent="flex-end"
                    alignItems="center"
                    direction="row"
                >
                    <Grid sm item className={classes.heroTextContainer}>
                        <Typography className={classes.heroText} variant="h2" align="center">
                            Bringing West Technology<br/>to the East
                        </Typography>
                        <Grid container justifyContent="center" className={classes.buttonContainer}>
                            <Grid item>
                                <Button
                                    component={Link}
                                    to="/estimate"
                                    variant="contained"
                                    className={classes.estimateButton}
                                    onClick={() => props.setValue(5)}
                                >
                                    Free Estimate
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    component={Link}
                                    to="/revolution"
                                    className={classes.learnButtonHero}
                                    variant="outlined"
                                    onClick={() => props.setValue(2)}
                                >
                                    <span style={{marginRight: 10}}>Learn More</span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie options={defaultOptions} height={"100%"} width={"100%"}/>
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
                >
                    <Grid
                        item
                        style={{
                            marginLeft: matchesSM ? 0 : "5rem",
                            textAlign: matchesSM ? "center" : undefined
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
            {/*-----iOS/Android Block-----*/}
            <Grid item>
                <Grid
                    container
                    direction="row"
                    justifyContent={matchesSM ? "center" : "flex-end"}
                    className={classes.serviceContainer}
                >
                    <Grid item style={{textAlign: matchesSM ? "center" : undefined}}>
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
                        <img className={classes.icon} alt="custom software icon" src={mobileAppsIcon}/>
                    </Grid>
                </Grid>
            </Grid>
            {" "}
            {/*-----Websites Block-----*/}
            <Grid item>
                <Grid
                    container
                    direction="row"
                    justifyContent={matchesSM ? "center" : undefined}
                    className={classes.serviceContainer}
                >
                    <Grid
                        item
                        style={{
                            marginLeft: matchesSM ? 0 : "5rem",
                            textAlign: matchesSM ? "center" : undefined
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
                    <Grid item>
                        <img className={classes.icon} alt="website icon" src={websitesIcon}/>
                    </Grid>
                </Grid>
            </Grid>
            {" "}
            {/*-----The Revolution Block-----*/}
            <Grid item>
                <Grid
                    container
                    style={{height: "100rem", marginTop: "12rem"}}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction="column" style={{textAlign: "center"}}>
                                <Grid item>
                                    <Typography variant="h3" gutterBottom>
                                        The Revolution
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Visionary insights coupled with cutting-edge technology is a recipe for
                                        revolution.
                                    </Typography>
                                    <Button
                                        component={Link}
                                        to="/revolution"
                                        variant="outlined"
                                        className={classes.learnButtonHero}
                                        onClick={() => {props.setValue(2)}}
                                    >
                                        <span style={{marginRight: 10}}>Learn More</span>
                                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionBackground}/>
                </Grid>
            </Grid>
            {/*-----Information Block-----*/}
            <Grid item>
                <Grid
                    container
                    style={{height: "80rem"}}
                    alignItems="center"
                    direction="row"
                    className={classes.infoBackground}
                >
                    <Grid
                        item
                        container
                        style={{textAlign: matchesXS ? "center" : "inherit"}}
                        direction={matchesXS ? "column" : "row"}
                    >
                        <Grid item sm style={{marginLeft: matchesXS ? 0 : matchesSM ? "2rem" : "5rem"}}>
                            <Grid
                                container
                                style={{marginBottom: matchesXS ? "10rem" : 0}}
                                direction="column"
                            >
                                <Typography variant="h2" style={{color: "white"}}>
                                    About Us
                                </Typography>
                                <Typography variant="subtitle2">
                                    Let's get personal.
                                </Typography>
                                <Grid item>
                                    <Button
                                        component={Link}
                                        to="/about"
                                        variant="outlined"
                                        style={{color: "white", borderColor: "white"}}
                                        className={classes.learnButton}
                                        onClick={() => {props.setValue(3)}}
                                    >
                                        <span style={{marginRight: 10}}>Learn More</span>
                                        <ButtonArrow width={10} height={10} fill="white"/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            sm
                            style={{
                                marginRight: matchesXS ? 0 : matchesSM ? "2rem" : "5rem",
                                textAlign: matchesXS ? "center" : "right"
                            }}
                        >
                            <Grid container direction="column">
                                <Typography variant="h2" style={{color: "white"}}>
                                    Contact Us
                                </Typography>
                                <Typography variant="subtitle2">
                                    Say Hello!<span role="img" aria-label="waving hand">👋🏻</span>
                                </Typography>
                                <Grid item>
                                    <Button
                                        component={Link}
                                        to="/contact"
                                        variant="outlined"
                                        style={{color: "white", borderColor: "white"}}
                                        className={classes.learnButton}
                                        onClick={() => {props.setValue(4)}}
                                    >
                                        <span style={{marginRight: 10}}>Learn More</span>
                                        <ButtonArrow width={10} height={10} fill="white"/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/*-----Call To Action Block-----*/}
            <Grid item>
                <CallToAction setValue={props.setValue}/>
            </Grid>
        </Grid>
    );
}
