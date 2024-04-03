import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import history from "../assets/history.svg";
import profile from "../assets/poza deprofil editata.png";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";

import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles(theme => ({
    missionStatement: {
        fontStyle: "italic",
        fontWeight: 400,
        fontSize: "1.5rem",
        maxWidth: "75rem",
        lineHeight: 1.4
    },
    rowContainer: {
        paddingLeft: "5rem",
        paddingRight: "5rem",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem"
        }
    },
    avatar: {
        height: "25rem",
        width: "25rem",
        [theme.breakpoints.down("sm")]: {
            height: "20rem",
            width: "20rem",
            maxHeight: 300,
            maxWidth: 300
        }
    }
}));

export default function About(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container direction="column">
            <Grid item className={classes.rowContainer} style={{marginTop: matchesMD ? "1rem" : "2rem"}}>
                <Typography variant="h2" align={matchesMD ? "center" : undefined}>About Us</Typography>
            </Grid>
            <Grid item container justifyContent="center" className={classes.rowContainer}
                  style={{marginTop: "3rem"}}
            >
                <Typography variant="h4" align="center" className={classes.missionStatement}>
                    Whether it be person to person, business to consumer, or an individual to their interests,
                    technology is meant to bring
                    us closer to what we care about in the best way possible. Arc Development will use that principle to
                    provide fast,
                    modern, inexpensive, and aesthetic software to the Midwest and beyond.
                </Typography>
            </Grid>
            {" "}
            {/*-----History Block-----*/}
            <Grid item container className={classes.rowContainer} direction={matchesMD ? "column" : "row"}
                  alignItems={matchesMD ? "center" : undefined} justifyContent="space-around"
                  style={{marginTop: "10rem", marginBottom: "10rem"}}
            >
                <Grid item>
                    <Grid item container direction="column" lg style={{maxWidth: "35rem"}}>
                        <Grid item>
                            <Typography align={matchesMD ? "center" : undefined} variant="h4" gutterBottom>
                                History
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph
                                        style={{fontWeight: 700, fontStyle: "italic"}}
                            >
                                We're the new kid on the block.
                            </Typography>
                            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                                Founded in 2019, we’re ready to get our hands on the world’s business problems.
                            </Typography>
                            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                                It all started with one question: Why aren’t all businesses using available technology?
                                There are many different answers to that question: economic barriers, social barriers,
                                educational barriers, and sometimes institutional barriers.
                            </Typography>
                            <Typography variant="body1" align={matchesMD ? "center" : undefined} paragraph>
                                We aim to be a powerful force in overcoming these obstacles. Recent developments in
                                software engineering and computing power, compounded by the proliferation of smart
                                phones, has opened up infinite worlds of possibility. Things that have always been done
                                by hand can now be done digitally and automatically, and completely new methods of
                                interaction are created daily. Taking full advantage of these advancements is the name
                                of the game.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid item container justifyContent="center" lg>
                        <img src={history} alt="quill pen sitting on top of book"
                             style={{maxHeight: matchesMD ? 200 : "22rem"}}
                        />
                    </Grid>
                </Grid>
            </Grid>
            {" "}
            {/*-----Team Block-----*/}
            <Grid item container direction="column" alignItems="center" className={classes.rowContainer}
                  style={{marginBottom: "15rem"}}
            >
                <Grid item>
                    <Typography variant="h4" gutterBottom align="center">
                        Team
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph align="center">
                        Daniel Szabo, Founder.
                    </Typography>
                    <Typography variant="body1" paragraph align="center">
                        I started coding with a passion for creating solutions to make the world a better place.
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar alt="founder" src={profile} className={classes.avatar}/>
                </Grid>
                <Grid item container justifyContent={matchesMD ? "center" : undefined}>
                    <Hidden lgUp>
                        <Grid item lg style={{maxWidth: "45rem", padding: "1.25rem"}}>
                            <Typography variant="body1" paragraph align="center">
                                I taught myself the coding skills from different courses, and ever my
                                passion has solely been set on learning — learning about computers,
                                learning science, studying design and logical coding, always just learning.
                            </Typography>
                            <Typography variant="body1" paragraph align="center">
                                Now I’m ready to apply everything I’ve learned, and to help others with the
                                intuition I have developed.
                            </Typography>
                        </Grid>
                    </Hidden>
                    <Grid item container direction="column" lg alignItems={matchesMD ? "center" : undefined}
                          style={{marginBottom: matchesMD ? "2.5rem" : 0}}
                    >
                        <Grid item>
                            <img src={yearbook} alt="yearbook pages about founder"
                                 style={{maxWidth: matchesMD ? 300 : undefined}}
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">
                                a page from my Sophomore yearbook
                            </Typography>
                        </Grid>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item lg style={{maxWidth: "45rem", padding: "1.25rem"}}>
                            <Typography variant="body1" paragraph align="center">
                                I taught myself the coding skills from different courses, and ever my
                                passion has solely been set on learning — learning about computers,
                                learning science, studying design and logical coding, always just learning.
                            </Typography>
                            <Typography variant="body1" paragraph align="center">
                                Now I’m ready to apply everything I’ve learned, and to help others with the
                                intuition I have developed.
                            </Typography>
                        </Grid>
                    </Hidden>
                    <Grid item container direction="column" lg alignItems={matchesMD ? "center" : "flex-end"}>
                        <Grid item>
                            <img src={puppy} alt="ghey spotted puppy" style={{maxWidth: matchesMD ? 300 : undefined}}/>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">
                                my miniature dapple dachshund, Sterling
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <CallToAction setValue={props.setValue}/>
        </Grid>
    );
}

