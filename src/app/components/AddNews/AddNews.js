import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import {addNews as addNewNews} from "../../slices/newsSlice";

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
    addNewsButton: {
        marginLeft: "auto",
        marginRight: "auto"
    },
    input: {
        margin: theme.spacing(2),
    }
}));

const AddNews = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const [successSnackbarOpened, setSuccessSnackbarOpened] = useState(false);

    const onSnackbarClose = () => setSuccessSnackbarOpened(false);

    const onSubmit = (event) => {
        event.preventDefault();
        const {target: {title: {value: title}, text: {value: text}}} = event;
        if (title && text) {
            dispatch(addNewNews({title, text}));
            event.target.reset();
            setError(null);
            setSuccessSnackbarOpened(true);
        } else {
            setError("Both fields should be filled!")
        }
    };

    return (
        <Card className={classes.root} variant="outlined">
            <form onSubmit={onSubmit}>
                <CardContent className={classes.cardContent}>
                    <TextField className={classes.input} id="title" label="title"/>
                    <TextField className={classes.input} id="text" label="text" multiline/>
                    <FormHelperText id="error-message" error>{error}</FormHelperText>
                </CardContent>
                <CardActions>
                    <Button size="large" color="primary" type="submit" className={classes.addNewsButton}>Add</Button>
                </CardActions>
            </form>
            <Snackbar open={successSnackbarOpened} autoHideDuration={6000} onClose={onSnackbarClose}>
                <MuiAlert onClose={onSnackbarClose} severity="success">
                    This is a success message!
                </MuiAlert>
            </Snackbar>
        </Card>
    );
};

export default AddNews
