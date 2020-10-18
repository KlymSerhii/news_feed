import React from "react";
import {
    Route,
    Redirect,
} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUserStatus} from "../../slices/userSlice";

const GuestRoute = ({children, ...rest}) => {
    const isUserLoggedIn = useSelector(selectUserStatus);

    return (
        <Route
            {...rest}
            render={({location}) =>
                isUserLoggedIn ? (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: {from: location}
                        }}
                    />
                ) : (
                    children
                )
            }
        />
    );
};

export default GuestRoute
