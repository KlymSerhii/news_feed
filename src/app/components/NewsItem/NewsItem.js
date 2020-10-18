import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    deleteButton: {
        marginLeft: "auto"
    }
}));

const NewsItem = ({title, text, onDelete, isUserLoggedIn}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" component="p">
                    {text}
                </Typography>
            </CardContent>
            {
                isUserLoggedIn && (
                    <CardActions>
                        <Button size="small" color="secondary" className={classes.deleteButton}
                                onClick={onDelete}>Delete</Button>
                    </CardActions>
                )
            }
        </Card>
    );
};

NewsItem.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    isUserLoggedIn: PropTypes.bool,
    onDelete: () => {}
};

export default NewsItem
