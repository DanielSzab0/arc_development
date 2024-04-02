import React, {useState} from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import theme from "./components/ui/Theme";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

import LandingPage from "./components/LandingPage";
import Services from "./components/Services";
import CustomSoftware from "./components/CustomSoftware";
import MobileApps from "./components/MobileApps";

function App() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [value, setValue] = useState(0);

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header
                    value={value}
                    setValue={setValue}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={props => (
                            <LandingPage
                                {...props}
                                setValue={setValue}
                                setSelectedIndex={setSelectedIndex}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/services"
                        render={props => (
                            <Services
                                {...props}
                                setValue={setValue}
                                setSelectedIndex={setSelectedIndex}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/customsoftware"
                        render={props => (
                            <CustomSoftware
                                {...props}
                                setValue={setValue}
                                setSelectedIndex={setSelectedIndex}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/mobileapps" render={props => (
                        <MobileApps
                            {...props}
                            setValue={setValue}
                            setSelectedIndex={setSelectedIndex}
                        />
                    )}
                    />
                    <Route exact path="/websites" component={() => <div>Website Development</div>}/>
                    <Route exact path="/revolution" component={() => <div>The Revolution</div>}/>
                    <Route exact path="/about" component={() => <div>About Us</div>}/>
                    <Route exact path="/contact" component={() => <div>Contact Us</div>}/>
                    <Route exact path="/estimate" component={() => <div>Free Estimate</div>}/>
                </Switch>
                <Footer
                    setValue={setValue}
                    setSelectedIndex={setSelectedIndex}
                />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;