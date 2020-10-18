import React from "react";
import MUIDialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";

const Dialog = ({title, text, actions}) => {

    return (
        <MUIDialog
            open
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            {
                text && (
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {text}
                        </DialogContentText>
                    </DialogContent>
                )
            }
            <DialogActions>
                {actions}
            </DialogActions>
        </MUIDialog>
    );
};

Dialog.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    actions: PropTypes.node
};

export default Dialog;
