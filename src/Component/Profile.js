import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

const isEmptyObject = (obj) => {
    return Object.entries(obj).length === 0;
}

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            firstName: '',
            lastName: '',
            message: '',
            errors: {}
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/users/me', {
            headers: {
                "Authorization": localStorage.getItem('token')
            }
        }).then(response => response.json()).then(response => {
            this.setState({
                username: response.result.username,
                firstName: response.result.firstName,
                lastName: response.result.lastName
            })
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        this.setState({
            errors:{}
        })

        let errors = {};
        if (!this.state.firstName) {
            errors.firstName = 'First Name is required'
        }

        if (!this.state.lastName) {
            errors.lastName = 'Last Name is required'
        }

        if (isEmptyObject(errors)) {
            fetch ('http://localhost:8080/api/users/me', {
                method: 'POST',
                body:JSON.stringify(this.state),
                headers: {
                    'Content-Type':'application/json',
                    "Authorization": localStorage.getItem('token')
                }
            }).then(response => response.json()).then(response => {
                if (response.result) {
                    this.setState({
                        message: response.message,
                        success: true
                    })
                    setTimeout(() => {
                        this.props.history.push('/landing')
                    },2000)
                } else {
                    this.setState({
                        message: response.message,
                        success: false
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
                <h2>Profile</h2>
                {this.state.message && <div className={`${this.state.success ? 'text-primary' : 'text-danger'}`}>{this.state.message}</div>}
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" name={'username'}
                               defaultValue={this.state.username} readOnly/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" name={'firstName'}
                               value={this.state.firstName} onChange={this.handleInputChange}/>
                        {this.state.errors.firstName && <div className="text-danger">{this.state.errors.firstName}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" name={'lastName'} value={this.state.lastName} onChange={this.handleInputChange}/>
                        {this.state.errors.lastName && <div className="text-danger">{this.state.errors.lastName}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Update</button>
                </form>
            </div>
        );
    }
}

export default withRouter(Profile);