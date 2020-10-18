import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import {clearError, logIn as logUserIn, selectUserError} from "../../slices/userSlice";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    cardContent: {
        display: "flex",
        flexDirection: "column"
    },
    logIn: {
        marginLeft: "auto",
        marginRight: "auto"
    },
    input: {
        margin: theme.spacing(2),
    }
}));

const LogIn = () => {
    const classes = useStyles();
    const logInError = useSelector(selectUserError);
    const dispatch = useDispatch();
    useEffect(() => () => dispatch(clearError()), []);

    const onSubmit = (event) => {
        event.preventDefault();
        const {target: {username: {value: username}, password: {value: password}}} = event;
        dispatch(logUserIn({username, password}))
    };

    return (
        <Card className={classes.root} variant="outlined">
            <form onSubmit={onSubmit}>
                <CardContent className={classes.cardContent}>
                    <TextField className={classes.input} id="username" label="Username"/>
                    <TextField className={classes.input} id="password" label="password"/>
                    <FormHelperText id="error-message" error>{logInError}</FormHelperText>
                </CardContent>
                <CardActions>
                    <Button size="large" color="primary" type="submit" className={classes.logIn}>Log In</Button>
                </CardActions>
            </form>
        </Card>
    );
};

export default LogIn
