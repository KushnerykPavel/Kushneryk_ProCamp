import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getPremierLeagueStandings } from '../../../store/actions/standings'

import { withStyles } from '@material-ui/core/styles';
import * as _ from 'lodash';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import StandingsTable from './StandingsTable';
import Spinner from '../../UI/Spinner/Spinner';

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
        page: 0,
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

    componentDidMount() {
        this.props.fetchPLStandings()
    }
    render() {

        if (!this.props.standings) {
            return <Spinner />
        } else {
            let groupedData = _.groupBy(this.props.standings, 'group')
            let groupedItems = { ...{ all: this.props.standings }, ...groupedData }
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
}


const mapStateToProps = state => {
    return {
        standings: state.standings.standings
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPLStandings: () => (dispatch(getPremierLeagueStandings()))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Standings));
