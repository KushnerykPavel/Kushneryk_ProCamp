import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import TeamItem from '../../UI/TeamItem/TeamItem';
import Spinner from '../../UI/Spinner/Spinner';

import { connect } from 'react-redux';
import { teamsGetData } from '../../../actions/teams';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 20
    },
}));


const NestedGrid = props => {

    const classes = useStyles();

    let teamsChunks = props.data

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

const Teams = props => {

    useEffect(() => {
        props.teamsData(2)
    }, [])

    if (!props.teams.length) {
        return <Spinner />
    } else {
        return <NestedGrid data={props.teams} />
    }

}

const mapStateToProps = state => {
    return {
        teams: state.teams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        teamsData: id => dispatch(teamsGetData(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teams);