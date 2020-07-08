import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class MenuList extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : []
        }
    }

    componentDidMount() {
        this.getMenuList()
    }

    getMenuList = () => {
        fetch('http://localhost:8080/api/menuItems/me', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                "Authorization": localStorage.getItem('token')
            }
        }).then(response => response.json()).then(response => {
            this.setState({
                data: response.result
            })
        })
    }

    handleDelete = (id) => {
        if (window.confirm("Are you sure to delete this item?")) {
            fetch((`http://localhost:8080/api/menuItems/me/${id}`), {
                method: 'DELETE',
                headers: {
                    'Content-Type':'application/json',
                    "Authorization": localStorage.getItem('token')
                }
            }).then(response => response.json()).then(response => {
                if (response.result) {
                    this.getMenuList();
                }
            })
        }
        }


    render() {
        let {data} = this.state;
        console.log(data);
        return (
            <div className={'w-50 mx-auto'}>
                <h2 className={"mb-3"}>Menu List</h2>
                <Link to={'/menuItemAdd'} className="btn btn-primary mb-3">Add Menu Item</Link>
                <Link className="float-right btn btn-primary max-width" to ={'/landing'}>Back</Link>
                <div className={'menuList'}>
                    <ul className="list-group">
                        {data.map((item, key) => {
                            return (
                                <li className="list-group-item" key={item.id}>
                                    {item.label}
                                    <button type="button" className="btn btn-danger float-right" onClick={(e) => {
                                        e.preventDefault();
                                        this.handleDelete(item.id);
                                    }}>Delete</button>
                                    <button type="button" className="btn btn-secondary float-right mr-1" onClick={(e) => {
                                        e.preventDefault();
                                        this.props.history.push(`menuItemEdit/${item.id}`)
                                    }}>Edit</button>
                                </li>
                            );
                        }
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(MenuList);