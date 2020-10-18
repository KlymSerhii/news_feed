import React, {useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {useDispatch} from "react-redux";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import {loadNewsAsync} from "./slices/newsSlice";
import PrivateRoute from "./components/PrivateRoute";
import GuestRoute from "./components/GuestRoute";
import LogIn from "./components/LogIn";
import AddNews from "./components/AddNews";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadNewsAsync())
    }, []);

    return (
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <NewsList/>
                    </Route>
                    <PrivateRoute path="/add">
                        <AddNews/>
                    </PrivateRoute>
                    <GuestRoute path="/login">
                        <LogIn/>
                    </GuestRoute>
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
