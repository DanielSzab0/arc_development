import React from "react";
import {Link} from "react-router-dom";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import analytics from "../assets/analytics.svg";
import seo from "../assets/seo.svg";
import outreach from "../assets/outreach.svg";
import ecommerce from "../assets/ecommerce.svg";

import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles(theme => ({
    heading: {
        maxWidth: "40rem"
    },
    arrowContainer: {
        marginTop: "0.5rem"
    },
    rowContainer: {
        paddingLeft: "5rem",
        paddingRight: "5rem",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem"
        }
    },
    paragraphContainer: {
        maxWidth: "30rem"
    }
}));

export default function Websites(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container direction="column">
            <Grid
                item
                container
                direction="row"
                justifyContent={matchesMD ? "center" : undefined}
                className={classes.rowContainer}
                style={{marginTop: matchesSM ? 0 : "1rem"}}
            >
                <Hidden mdDown>
                    <Grid
                        item
                        className={classes.arrowContainer}
                        style={{marginRight: "1rem", marginLeft: "-3.5rem"}}
                    >
                        <IconButton
                            style={{backgroundColor: "transparent"}}
                            component={Link}
                            to="/mobileapps"
                            onClick={() => props.setSelectedIndex(2)}
                        >
                            <img src={backArrow} alt="Back to iOS/Android App Development Page"/>
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                            Website Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                            Having a website is a necessity in today’s business world. They give you one
                            central, public location to let people know who you are, what you do, and why
                            you’re the best at it.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                            From simply having your hours posted to having a full fledged online store,
                            making yourself as accessible as possible to users online drives growth and
                            enables you to reach new customers.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton
                            style={{backgroundColor: "transparent"}}
                            component={Link}
                            to="/services"
                            onClick={() => props.setSelectedIndex(0)}
                        >
                            <img src={forwardArrow} alt="Forward to Services Page"/>
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            {" "}
            {/*-----Analytics Block-----*/}
            <Grid
                item
                container
                direction={matchesSM ? "column" : "row"}
                alignItems="center"
                className={classes.rowContainer}
                style={{marginTop: "15rem"}}
            >
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesSM ? "center" : undefined} variant="h4" gutterBottom>
                                Analytics
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img
                                src={analytics}
                                style={{marginLeft: "-2.75rem"}}
                                alt="graph with magnifying glass revealing 1.s and 0.s"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer}>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1">
                        Knowledge is power, and data is 21st Century
                        gold. Analyzing this data can reveal hidden
                        patterns and trends in your business,
                        empowering you to make smarter decisions
                        with measurable effects.
                    </Typography>
                </Grid>
            </Grid>
            {" "}
            {/*-----E-Commerce Block-----*/}
            <Grid
                item
                container
                direction={matchesSM ? "column" : "row"}
                alignItems="center"
                justifyContent="flex-end"
                className={classes.rowContainer}
                style={{marginBottom: "15rem", marginTop: "15rem"}}
            >
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>
                                E-Commerce
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img
                                src={ecommerce}
                                alt="world outline made of dollar sign"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{marginLeft: matchesSM ? 0 : "1rem"}} className={classes.paragraphContainer}>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                        It’s no secret that people like to shop online.
                    </Typography>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                        In 2017 over $2.3 trillion was spent in e-commerce, and
                        it’s time for your slice of that pie.
                    </Typography>
                </Grid>
            </Grid>
            {" "}
            {/*-----Outreach Block-----*/}
            <Grid
                item
                container
                direction={matchesSM ? "column" : "row"}
                alignItems="center"
                className={classes.rowContainer}
            >
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align={matchesSM ? "center" : undefined} variant="h4" gutterBottom>
                                Outreach
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img
                                src={outreach}
                                style={{marginLeft: "-2.75rem"}}
                                alt="megaphone"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{marginLeft: matchesSM ? 0 : "1rem"}} className={classes.paragraphContainer}>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1">
                        Draw people in with a dazzling website.
                        Showing off your products online is a great
                        way to help customers decide what’s right for
                        them before visiting in person.
                    </Typography>
                </Grid>
            </Grid>
            {" "}
            {/*-----Search Engine Block-----*/}
            <Grid
                item
                container
                direction={matchesSM ? "column" : "row"}
                alignItems="center"
                justifyContent="flex-end"
                className={classes.rowContainer}
                style={{marginBottom: "15rem", marginTop: "15rem"}}
            >
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography align="center" variant="h4" gutterBottom>
                                Search Engine<br/>Optimization
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img
                                src={seo}
                                alt="website standing on winner's podium"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{marginLeft: matchesSM ? 0 : "1rem"}} className={classes.paragraphContainer}>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                        How often have you ever been to the second page of Google results?
                    </Typography>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                        If you’re like us, probably never.
                    </Typography>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                        Customers don’t go there either, so we make sure your website is designed to the end up on top.
                    </Typography>
                </Grid>
            </Grid>
            <CallToAction setValue={props.setValue}/>
        </Grid>
    );
}