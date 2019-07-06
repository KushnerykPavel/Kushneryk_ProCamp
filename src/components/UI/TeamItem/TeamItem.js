import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const TeamItem = item => {
    const classes = useStyles();

    return (
        <Grid item xs={3} md={12}>
            <Link to={`/teams/${item.team_id}`}><img className={classes.img} alt="complex" src={item.logo} /></Link>
            <Paper className={classes.paper}>{item.name} <b>({item.country})</b></Paper>
        </Grid>
    )
}

export default TeamItem;