import React, {Component} from 'react';
import { withRouter } from "react-router-dom";

class CpuList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        console.log(this.props);
        fetch('http://localhost:8080/api/cpus', {}).then(response => response.json()).then(response => {
            this.setState({
                data: response.result
            })
        });
    }

    delete = (deleteItem) => {
        console.log(deleteItem);
        let result = window.confirm("Are you sure to delete this record?")
        if (result) {
            fetch(`http://localhost:8080/api/cpus/${deleteItem}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => response.json()).then(response => {
                console.log(response);
            })

        }
        else {


        }
    }

    render() {
        return (
            <div>
                <h2>CPU LIST</h2>
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Label</th>
                        <th>Description</th>
                        <th>Core</th>
                        <th>Price</th>
                        <th>Speed</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody id="tbody">
                    {
                        this.state.data.map(cpu => {
                            return (
                                <tr key={cpu.id}>
                                    <th>{cpu.id}</th>
                                    <th>{cpu.label}</th>
                                    <th>{cpu.description}</th>
                                    <th>{cpu.core}</th>
                                    <th>{cpu.price}</th>
                                    <th>{cpu.speed}</th>
                                    <th><button onClick={() => {
                                        this.props.history.push(`/cpus/${cpu.id}`)
                                    }}>
                                        Edit
                                    </button></th>
                                    <th><button onClick={() => {
                                        this.delete(cpu.id)
                                    }}>Delete</button></th>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>

        );
    }
}

export default withRouter (CpuList);