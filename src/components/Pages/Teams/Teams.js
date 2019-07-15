import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import TeamItem from '../../UI/TeamItem/TeamItem';
import Spinner from '../../UI/Spinner/Spinner';

import { connect } from 'react-redux';

import { teamsData } from '../../../actions/teams'


const styles = theme => {
    return {
        root: {
            flexGrow: 1,
            padding: 20
        },
    }
};


const NestedGrid = props => {

    const classes = props.classes;

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

class Teams extends Component {

    componentDidMount() {
        this.props.teamsData(2)
    }

    render() {
        if (!this.props.teams.length) {
            return <Spinner />
        } else {
            return <NestedGrid data={this.props.teams} classes={this.props.classes} />
        }
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        teams: state.teams.teams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        teamsData: id => dispatch(teamsData(id))
        //teamsData: id => dispatch(teamsGetData(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Teams));