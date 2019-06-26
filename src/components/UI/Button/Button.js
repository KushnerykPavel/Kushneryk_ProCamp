import React from 'react';

import {  makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        color: 'white',
        margin: theme.spacing(1),
    }
}));

const Btn = props => {
    const classes = useStyles();

    return (
        <Button color="primary" className={classes.button}>
            {props.text}
        </Button>
    )
}

export default Btn;

