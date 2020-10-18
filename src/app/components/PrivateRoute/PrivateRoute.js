import React from "react";
import {
    Route,
    Redirect,
} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUserStatus} from "../../slices/userSlice";

const PrivateRoute = ({children, ...rest}) => {
    const isUserLoggedIn = useSelector(selectUserStatus);

    return (
        <Route
            {...rest}
            render={({location}) =>
                isUserLoggedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute
