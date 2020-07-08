import React, {Component} from 'react';
import {
    withRouter,
} from "react-router-dom";

//register api http://localhost:8080/api/register
const isEmptyObject = (obj) => {
    return Object.entries(obj).length === 0;
}

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            errors: {},
            message: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        this.setState({
            errors: {}
        })

        let errors = {};
        if (!this.state.username) {
            errors.username = 'Username is required'
        }

        if (!this.state.password) {
            errors.password = 'Password is required'
        }

        if (this.state.password.length < 8) {
            errors.password = 'Password must be at least 8 digits'
        }

        if (this.state.confirmPassword !== this.state.password) {
            errors.confirmPassword = 'Please enter the same password'
        }

        if (isEmptyObject(errors)) {
            fetch('http://localhost:8080/api/register', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json()).then(response => {
                console.log(response);
                if (response.result) {
                    this.setState({
                        message: response.message,
                        success: true
                    })
                    setTimeout(() => {
                        this.props.history.push(`/login`)
                    },3000)
                } else {
                    this.setState({
                        message: response.message,
                        success: false
                    })
                }
            })
        } else {
            this.setState({
                errors: errors
            })
        }
    }

    render() {
        return (
            <div className={'w-50 mx-auto'}>
                <h2>Register</h2>
                {this.state.message && <div className={`${this.state.success ? 'text-primary' : 'text-danger'}`}>{this.state.message}</div>}
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" name={'username'}
                               value={this.state.username} onChange={this.handleInputChange}/>
                        {this.state.errors.username && <div className="text-danger">{this.state.errors.username}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name={'password'}
                               value={this.state.password} onChange={this.handleInputChange}/>
                        {this.state.errors.password && <div className="text-danger">{this.state.errors.password}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword" name={'confirmPassword'}
                               value={this.state.confirmPassword} onChange={this.handleInputChange}/>
                        {this.state.errors.confirmPassword && <div className="text-danger">{this.state.errors.confirmPassword}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Register</button>
                </form>
            </div>
        );
    }
}

export default withRouter(Register);