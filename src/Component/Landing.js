import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LandingHead from "./LandingHead";
import MenuList from "./MenuList";
import Menu from "./Menu";
import Head from "./Head";

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : true,
            data: {}
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/landing/me', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                "Authorization": localStorage.getItem('token')
            }
        }).then(response => response.json()).then(response => {
            this.setState({
                loading: false,
                data: response.result
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.loading? <p>Loading</p> : (
                    <div>
                        <LandingHead {...this.state}/>
                        <Menu {...this.state}/>
                    </div>
                )}
                {/*<Link to={'/head'}>Head</Link>
                <Link to={'/menuList'}>Menu List</Link>*/}
            </div>
        );
    }
}

export default Landing;