import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import CountryItem from '../../UI/CountryItem/CountryItem';
import Spinner from '../../UI/Spinner/Spinner';

import { getTeams } from '../../../providers/index';

const ITEMS_PER_ROW = 4

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 20
    },
}));

const teamsChunksList = teams_data => {
    return teams_data.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / ITEMS_PER_ROW)

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []
        }

        let team_item =
            <CountryItem
                key={item.team_id}
                country={item.name}
                flag={item.logo}
                code={item.country}
            />

        resultArray[chunkIndex].push(team_item)

        return resultArray
    }, [])
}

const NestedGrid = props => {

    const classes = useStyles();

    let teamsChunks = teamsChunksList(props.data.api.teams)

    let teamsTable = teamsChunks.map((teamsRow, idx) => {
        return (
            <Grid container item xs={12} spacing={3} key={idx}>
                {teamsRow}
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