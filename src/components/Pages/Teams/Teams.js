import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import TeamItem from '../../UI/TeamItem/TeamItem';
import Spinner from '../../UI/Spinner/Spinner';

import { getTeams } from '../../../providers/index';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 20
    },
}));


const NestedGrid = props => {

    const classes = useStyles();

    let teamsChunks = props.data.api.teams

    let teamsTable = teamsChunks.map((item, idx) => {
        return (
            <Grid container item xs={3} spacing={3} key={idx}>
                <TeamItem
                    key={item.team_id}
                    team_id={item.team_id}
                    name={item.name}
                    logo={item.logo}
                    country={item.country}
                />
            </Grid>
        )
    })

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {teamsTable}
            </Grid>
        </div>
    );
}

export default function Teams() {
    const [teamsData, setTeamsData] = useState(null);

    useEffect(() => {
        getTeams(2).then(res => setTeamsData(res));

    }, [])

    if (!teamsData) {
        return <Spinner />
    } else {
        return <NestedGrid data={teamsData} />
    }

}