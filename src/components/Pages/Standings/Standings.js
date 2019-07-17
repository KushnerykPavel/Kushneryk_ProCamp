import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import * as _ from 'lodash';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import StandingsTable from './StandingsTable';

const styles = theme => {
    return {
        indicator: {
            backgroundColor: '#3e1050',
        },
    }
}

class Standings extends Component {
    state = {
        currentTab: "all",
        rowsPerPage: 10,
        page: 1,
        standings: [
            {
                "rank": 1,
                "team_id": 85,
                "teamName": "Paris Saint Germain",
                "logo": "https://www.api-football.com/public/teams/85.png",
                "group": "Ligue 1",
                "forme": "DLWLL",
                "description": "Promotion - Champions League (Group Stage)",
                "all": {
                    "matchsPlayed": 35,
                    "win": 27,
                    "draw": 4,
                    "lose": 4,
                    "goalsFor": 98,
                    "goalsAgainst": 31
                },
                "home": {
                    "matchsPlayed": 18,
                    "win": 16,
                    "draw": 2,
                    "lose": 0,
                    "goalsFor": 59,
                    "goalsAgainst": 10
                },
                "away": {
                    "matchsPlayed": 17,
                    "win": 11,
                    "draw": 2,
                    "lose": 4,
                    "goalsFor": 39,
                    "goalsAgainst": 21
                },
                "goalsDiff": 67,
                "points": 85,
                "lastUpdate": "2019-05-04"
            },
            {
                "rank": 2,
                "team_id": 79,
                "teamName": "Lille",
                "logo": "https://www.api-football.com/public/teams/79.png",
                "group": "Ligue 3",
                "forme": "WDWDW",
                "description": "Promotion - Champions League (Group Stage)",
                "all": {
                    "matchsPlayed": 34,
                    "win": 20,
                    "draw": 8,
                    "lose": 6,
                    "goalsFor": 59,
                    "goalsAgainst": 28
                },
                "home": {
                    "matchsPlayed": 17,
                    "win": 11,
                    "draw": 4,
                    "lose": 2,
                    "goalsFor": 36,
                    "goalsAgainst": 11
                },
                "away": {
                    "matchsPlayed": 17,
                    "win": 9,
                    "draw": 4,
                    "lose": 4,
                    "goalsFor": 23,
                    "goalsAgainst": 17
                },
                "goalsDiff": 31,
                "points": 68,
                "lastUpdate": "2019-05-04"
            },
            {
                "rank": 3,
                "team_id": 80,
                "teamName": "Lyon",
                "logo": "https://www.api-football.com/public/teams/80.png",
                "group": "Ligue 1",
                "forme": "WWLLW",
                "description": "Promotion - Champions League (Qualification)",
                "all": {
                    "matchsPlayed": 34,
                    "win": 18,
                    "draw": 8,
                    "lose": 8,
                    "goalsFor": 58,
                    "goalsAgainst": 43
                },
                "home": {
                    "matchsPlayed": 17,
                    "win": 11,
                    "draw": 3,
                    "lose": 3,
                    "goalsFor": 32,
                    "goalsAgainst": 17
                },
                "away": {
                    "matchsPlayed": 17,
                    "win": 7,
                    "draw": 5,
                    "lose": 5,
                    "goalsFor": 26,
                    "goalsAgainst": 26
                },
                "goalsDiff": 15,
                "points": 62,
                "lastUpdate": "2019-05-04"
            },

        ]

    }

    handleChange = (event, value) => {
        this.setState({ currentTab: value })
    }

    handleChangePage = (event, newPage) => {
        this.setState({ page: newPage })
    }

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: parseInt(event.target.value, 10) })
    }


    render() {
        let groupedData = _.groupBy(this.state.standings, 'group')
        let groupedItems = { ...{ all: this.state.standings }, ...groupedData }

        return (
            <React.Fragment>
                <AppBar position="static" className={this.props.classes.indicator}>
                    <Tabs value={this.state.currentTab} onChange={this.handleChange}>
                        {Object.keys(groupedItems).map((el, idx) => <Tab key={idx} value={el} label={el} />)}
                    </Tabs>
                </AppBar>
                <StandingsTable
                    standingsItems={groupedItems[this.state.currentTab]}
                    rowsPerPage={this.state.rowsPerPage}
                    page={this.state.page}
                    change={this.handleChangePage}
                    changeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </React.Fragment>
        )
    }
}



export default withStyles(styles)(Standings);
