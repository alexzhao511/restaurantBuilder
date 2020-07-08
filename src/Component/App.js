import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    Redirect
} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import OneColumnTemplate from "./OneColumnTemplate";
import Head from "./Head";
import Landing from "./Landing";
import MenuList from "./MenuList";
import MenuItemAdd from "./MenuItemAdd";
import MenuItemEdit from "./MenuItemEdit";
import Menu from "./Menu";
import LandingHead from "./LandingHead";



class App extends Component {
    render() {
        console.log(localStorage.getItem('token'))
        return (
            <Router>
                <Switch>
                    <Route path={"/"} exact>
                        <OneColumnTemplate>
                            Home Page
                        </OneColumnTemplate>
                    </Route>
                    <Route path={"/profile"}>
                        <OneColumnTemplate>
                            <Profile/>
                            {/*{!localStorage.getItem('token')? <Redirect to={'/login'}/> : <Profile/>}*/}
                        </OneColumnTemplate>
                    </Route>
                    <Route path={"/register"}>
                        <OneColumnTemplate>
                            <Register/>
                        </OneColumnTemplate>
                    </Route>
                    <Route path={"/login"}>
                        <OneColumnTemplate>
                            <Login/>
                        </OneColumnTemplate>
                    </Route>
                    <Route path={"/head"}>
                        <OneColumnTemplate>
                            <Head/>
                        </OneColumnTemplate>
                    </Route>
                    <Route path={"/landing"}>
                        <OneColumnTemplate>
                            <Landing/>
                        </OneColumnTemplate>
                    </Route>
                    <Route path={"/menuList"}>
                        <OneColumnTemplate>
                            <MenuList/>
                        </OneColumnTemplate>
                    </Route>
                    <Route path={"/menuItemAdd"}>
                        <OneColumnTemplate>
                            <MenuItemAdd/>
                        </OneColumnTemplate>
                    </Route>
                    <Route path={"/menuItemEdit/:id"}>
                        <OneColumnTemplate>
                            <MenuItemEdit/>
                        </OneColumnTemplate>
                    </Route>
                    <Route path={"/menu"}>
                        <OneColumnTemplate>
                            <Menu/>
                        </OneColumnTemplate>
                    </Route>
                    <Route path={"/landingHead"}>
                        <OneColumnTemplate>
                            <LandingHead/>
                        </OneColumnTemplate>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;