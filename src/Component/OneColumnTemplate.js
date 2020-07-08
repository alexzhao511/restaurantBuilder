import React, {Component} from 'react';
import Header from "./Header";
import Login from "./Login";
import Footer from "./Footer";
import {Route} from "react-router-dom";

class OneColumnTemplate extends Component {
    render() {
        return (
            <div>
                <Header/>
                    {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default OneColumnTemplate;