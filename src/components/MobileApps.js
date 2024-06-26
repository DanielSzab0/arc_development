import React from "react";
import Lottie from "react-lottie";
import {Link} from "react-router-dom";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import swiss from "../assets/swissKnife.svg";
import access from "../assets/extendAccess.svg";
import engagement from "../assets/increaseEngagement.svg";

import integrationAnimation from "../animations/integrationAnimation/data.json";

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
            paddingRight: "1.5rem",
        }
    },
}));

export default function MobileApps(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: integrationAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

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
                            to="/customsoftware"
                            onClick={() => props.setSelectedIndex(1)}
                        >
                            <img src={backArrow} alt="Back to Custom Software Development Page"/>
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                            iOS/Android App Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                            Mobile apps allow you to take your tools on the go.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                            Whether you want an app for your customers, employees, or yourself, we can
                            build cross-platform native solutions for any part of your business process. This
                            opens you up to a whole new world of possibilities by taking advantage of phone
                            features like the camera, GPS, push notifications, and more.
                        </Typography>
                        <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                            Convenience. Connection.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton
                            style={{backgroundColor: "transparent"}}
                            component={Link}
                            to="/websites"
                            onClick={() => props.setSelectedIndex(3)}
                        >
                            <img src={forwardArrow} alt="Forward to Website Development Page"/>
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid>
            {" "}
            {/*-----Integration & Simultaneous Block-----*/}
            <Grid
                item
                container
                direction={matchesSM ? "column" : "row"}
                style={{marginTop: "15rem", marginBottom: "15rem"}}
                className={classes.rowContainer}
            >
                <Grid item container direction='column' md>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : undefined} variant="h4" gutterBottom>
                            Integration
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                            Our technology enables an innate interconnection
                            between web and mobile applications, putting
                            everything you need right in one convenient place.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                            This allows you to extend your reach, reinvent
                            interactions, and develop a stronger relationship with
                            your users than ever before.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item md>
                    <Lottie options={defaultOptions} style={{maxWidth: "20rem"}}/>
                </Grid>
                <Grid item container direction='column' md>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : "right"} variant="h4" gutterBottom>
                            Simultaneous Platform Support
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : "right"} variant="body1" paragraph>
                            Our cutting-edge development process allows us
                            to create apps for iPhone, Android, and tablets —
                            all at the same time.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesSM ? "center" : "right"} variant="body1" paragraph>
                            This significantly reduces costs and creates a
                            more unified brand experience across all devices.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {" "}
            {/*-----Bottom Icon Block-----*/}
            <Grid
                item
                container
                direction={matchesMD ? "column" : "row"}
                className={classes.rowContainer}
                style={{marginBottom: "15rem"}}
            >
                <Grid item container direction="column" alignItems="center" md>
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Extend Functionality
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={swiss} alt="swiss army knife"/>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    alignItems="center"
                    md
                    style={{marginTop: matchesMD ? "10rem" : 0, marginBottom: matchesMD ? "10rem" : 0}}
                >
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Extend Access
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={access} alt="tear-one-off sign" style={{maxWidth: matchesXS ? "20rem" : "28rem"}}/>
                    </Grid>
                </Grid>
                <Grid item container direction="column" alignItems="center" md>
                    <Grid item>
                        <Typography align="center" variant="h4" gutterBottom>
                            Increase Engagement
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={engagement} alt="app with notification"/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <CallToAction setValue={props.setValue}/>
            </Grid>
        </Grid>
    );
}
