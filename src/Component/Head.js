import React, {Component} from 'react';
import {
    Link,
} from "react-router-dom";

class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: '',
            description: '',
            imageUrl: ''
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/api/heads/me', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": localStorage.getItem('token')
            },
            body: JSON.stringify(this.state)
        }).then(response => response.json()).then(response => {
            this.setState({
                label: response.result.label,
                description: response.result.description,
                imageUrl: response.result.imageUrl
            })
        })
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/heads/me', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                "Authorization": localStorage.getItem('token')
            }
        }).then(response => response.json()).then(response => {
            this.setState({
                label: response.result.label,
                description: response.result.description,
                imageUrl: response.result.imageUrl
            })
        })
        }


    render() {
        return (
            <div className={'w-50 mx-auto'}>
                <form>
                    <div className="form-group">
                        <label htmlFor="label">Label</label>
                        <input type="text" className="form-control" id="label" name={'label'}
                               aria-describedby="emailHelp" defaultValue={this.state.label}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control" id="description" name={'description'}
                               aria-describedby="emailHelp" value={this.state.description} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageUrl">Image URL</label>
                        <input type="text" className="form-control" id="imageUrl" name={'imageUrl'} value={this.state.imageUrl} onChange={this.handleInputChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Update</button>
                    <Link className="float-right btn btn-primary max-width" to ={'/landing'}>Back</Link>
                </form>
            </div>
        );
    }
}

export default Head;