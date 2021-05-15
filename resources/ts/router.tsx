import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Task from './pages/tasks/index'
import Search from './pages/search/index'
import Mypage from './pages/mypage/index'
import User from './templates/user'

const Router = () => {
    return (
        <BrowserRouter>
            <div className="header">
                <div className="header_nav">
                    <Link to="/web/task">Task</Link>
                    <Link to="/web/search">Search</Link>
                    <Link to="/web/mypage">Mypage</Link>
                    <Link to="/web/user">User</Link>
                </div>
            </div>
            <div className="container">
                <Switch>
                    <Route path="/web/search">
                        <Search />
                    </Route>
                    <Route path="/web/mypage">
                        <Mypage />
                    </Route>
                    <Route path="/web/task">
                        <Task />
                    </Route>
                    <Route path={"/web/user"}>
                        <User />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}


export default Router