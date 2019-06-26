import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        color: 'white',
        margin: theme.spacing(1),
        textDecoration: 'none'
    }
}));

const Btn = props => {
    const classes = useStyles();

    return (
        <Link to={props.to} >
            <Button
                color="primary"
                className={classes.button}
            >
                {props.text}
            </Button >
        </Link>
    )
}

export default Btn;

