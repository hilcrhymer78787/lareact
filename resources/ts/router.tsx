import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Task from './pages/tasks/index'
import Search from './pages/search/index'
import User from './pages/user/index'
import UserTask from './templates/UserTask'

const Router = () => {
    return (
        <BrowserRouter>
            <div className="header">
                <div className="header_nav">
                    <Link to="/web/task">Task</Link>
                    <Link to="/web/search">Search</Link>
                    <Link to="/web/user">User</Link>
                    <Link to="/web/usertask">Usertask</Link>
                </div>
            </div>
            <div className="container">
                <Switch>
                    <Route path="/web/search">
                        <Search />
                    </Route>
                    <Route path="/web/user">
                        <User />
                    </Route>
                    <Route path="/web/task">
                        <Task />
                    </Route>
                    <Route path={"/web/usertask"}>
                        <UserTask />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}


export default Router