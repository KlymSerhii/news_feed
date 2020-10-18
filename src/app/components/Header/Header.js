import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddBoxIcon from "@material-ui/icons/AddBox";
import {logOut, selectUserStatus} from "../../slices/userSlice";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    link: {
        color: "#fff"
    },
    addButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const isUserLoggedIn = useSelector(selectUserStatus);
    const onLogOut = () => dispatch(logOut());

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/add" className={classes.link}>
                        <IconButton edge="start" className={classes.addButton} color="inherit" aria-label="menu">
                            <AddBoxIcon/>
                        </IconButton>
                    </Link>
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className={classes.link}>
                            News
                        </Link>
                    </Typography>
                    {
                        isUserLoggedIn ? (
                            <Button color="inherit" onClick={onLogOut}>Log out</Button>
                        ) : (
                            <Link to="/login" className={classes.link}>
                                <Button color="inherit">Login</Button>
                            </Link>
                        )
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header
