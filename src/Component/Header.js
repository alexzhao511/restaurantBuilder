import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Profile from "./Profile";
import OneColumnTemplate from "./OneColumnTemplate";


class Header extends Component {
    /*render() {
        return (
            <div>
                {localStorage.getItem('token')
                    ?  <>
                        <Link to={"/"}>Profile</Link>{'|'}
                        <Link to={'#'} onClick={(e)=> {
                            e.preventDefault();
                            localStorage.clear();
                            this.props.history.push('/login')
                        }
                        }>Logout</Link>
                    </>
                    : <>
                        <Link to={"/register"}>Register</Link>{'|'}
                        <Link to={"/login"}>Login</Link>{'|'}
                    </>
                }
            </div>
        );
    }*/
    render() {
        return (
            <div>
                <header>
                    <div className="header-section">
                        <div className="container-fluid ">
                            <nav className="navbar navbar-expand-lg header-navbar ">
                                <a className=" navbar-brand navbar-logo scroll" href="#wrapper">
                                        <img className="mb-0 logo-dark" src="assets/svg/logo-dark.svg" alt=""/>
                                </a>
                                <button className="navbar-toggler btn-navbar-toggler" type="button"
                                        data-toggle="collapse" data-target=".nav-menu" aria-expanded="true"
                                        aria-label="Toggle navigation">
                                    <span className="fa fa-bars"></span>
                                </button>
                                <div
                                    className="nav-menu navbar-collapse navbar-collapse justify-content-end py-0 collapse show">
                                    <ul className=" navbar-nav  header-navbar-nav">

                                        <li><Link className=" nav-link scroll" to={"/register"}>Register</Link></li>
                                        <li><Link className=" nav-link scroll" to={"/login"}>Login</Link></li>
                                        <li><Link className=" nav-link scroll" to={"/landing"}>Landing</Link></li>
                                        <li className="ml-lg-auto"><a className=" nav-link nav-divider scroll"
                                                                      href="#reservation">
                                            <img src="assets/svg/ring-bell-light.svg" alt=""
                                                 className="max-width-xsm bell-light"/>
                                                <img src="assets/svg/ring-bell-dark.svg" alt="" className="max-width-xsm bell-dark"/></a>
                                        </li>
                                        <li><Link className=" nav-link scroll" to={"/"}>Profile</Link></li>
                                        {/*<li><a className=" nav-link pr-0 pb-sm-4 pb-sm-0" href="index.html"><span
                                            className="fa fa-phone mr-3"></span>613-287-1111</a></li>*/}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default withRouter(Header);
