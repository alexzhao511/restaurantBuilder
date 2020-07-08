import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import CpuList from "./CpuGame/CpuList";
import CpuCreate from "./CpuGame/CpuCreate";
import CpuEdit from "./CpuGame/CpuEdit";


class App extends Component {
    render() {
        return (
            <Router>
                <Link to={'/cpus'}>Cpu List</Link>
                <Link to={'/cpus/add'}>Cpu Create</Link>
                <Switch>
                    <Route path={'/cpus'} exact>
                        <CpuList/>
                    </Route>
                    <Route path={'/cpus/add'}>
                        <CpuCreate/>
                    </Route>
                    <Route path={'/cpus/:id'}>
                        <CpuEdit/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;