import React, {Component} from 'react';
import {
    withRouter,
} from "react-router-dom";

const isEmptyObject = (obj) => {
    return Object.entries(obj).length === 0;
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            message: '',
            errors: {}
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
            errors:{}
        })

        let errors = {};
        if (!this.state.username) {
            errors.username = 'Username is required'
        }

        if (!this.state.password) {
            errors.password = 'Password is required'
        }

        if (isEmptyObject(errors)) {
            fetch ('http://localhost:8080/api/login', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type':'application/json'
                }
            }).then(response => response.json()).then(response => {
                if (response.result) {
                    localStorage.setItem("token", response.result)
                    this.setState({
                        message: response.message,
                        completed: true
                    })
                    setTimeout(() => {
                        this.props.history.push('/profile')
                    },3000)
                } else {
                    this.setState({
                        message: response.message,
                        completed: false
                    })
                }
            });
        }
        else {
            this.setState({
                errors: errors
            })
        }
}

    render() {
        return (
            <div className={'w-50 mx-auto'}>
                <h2>Login</h2>
                {this.state.message && <div className={`${this.state.completed ? 'text-primary' : 'text-danger'}`}>{this.state.message}</div>}
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" name={'username'}
                               aria-describedby="emailHelp" value={this.state.username} onChange={this.handleInputChange}/>
                        {this.state.errors.username && <div className="text-danger">{this.state.errors.username}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" name={'password'} value={this.state.password} onChange={this.handleInputChange}/>
                        {this.state.errors.password && <div className="text-danger">{this.state.errors.password}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Login</button>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);