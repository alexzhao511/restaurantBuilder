import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class MenuItemEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            price: '',
            label: '',
            description: '',
            imageUrl: ''
        }
        console.log(this.props.match.params.id);
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/api/menuItems/me/${this.props.match.params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": localStorage.getItem('token')
            },
            body: JSON.stringify(this.state)
        }).then(response => response.json()).then(response => {
            this.setState({
                category: response.result.category,
                price: response.result.price,
                label: response.result.label,
                description: response.result.description,
                imageUrl: response.result.imageUrl
            })
        })
    }

    componentDidMount() {
        fetch(`http://localhost:8080/api/menuItems/me/${this.props.match.params.id}`, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                "Authorization": localStorage.getItem('token')
            }
        }).then(response => response.json()).then(response => {
            this.setState({
                category: response.result.category,
                price: response.result.price,
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

    render() {
        return (
            <div className={'w-50 mx-auto'}>
                <form>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <input type="text" className="form-control" id="category" name={'category'}
                               aria-describedby="emailHelp" value={this.state.category} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="number" className="form-control" id="price" name={'price'}
                               aria-describedby="emailHelp" value={this.state.price} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="label">Label</label>
                        <input type="text" className="form-control" id="label" name={'label'}
                               aria-describedby="emailHelp" value={this.state.label} onChange={this.handleInputChange}/>
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
                </form>
            </div>
        );
    }
}

export default withRouter(MenuItemEdit);