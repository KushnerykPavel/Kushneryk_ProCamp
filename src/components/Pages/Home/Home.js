import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

import Spinner from '../../UI/Spinner/Spinner';

import { connect } from 'react-redux';
import { getFixturesLive } from '../../../store/actions/fixtures';
import FixturesTable from '../../UI/FixturesTable/FixturesTable';

const styles = theme => {
    return {
        indicator: {
            backgroundColor: '#3e1050',
        },
    }
}

class LiveFixturesSegment extends Component {

    state = {
        value: "all"
    }

    handleChange = (event, value) => {
        this.props.fixturesList(value);
        this.setState({ value: value })
    }

    componentDidMount() {
        this.props.fixturesList(this.state.value);
    }

    render() {
        const fixures = this.props.fixtures ? <FixturesTable fixtures={this.props.fixtures} /> : <Spinner />
        return (
            <React.Fragment>
                <AppBar position="static" className={this.props.classes.indicator}>
                    <Tabs value={this.state.value} onChange={this.handleChange}>
                        <Tab value="all" label="Live" />
                        <Tab value="pl" label="Premier League" />
                    </Tabs>
                </AppBar>
                {fixures}
            </React.Fragment>
        )
    }
}

class StandingsSegment extends Component {
    render() {
        return (<p>Standings List</p>)
    }
}


class Home extends Component {
    render() {
        return (
            <Grid container spacing={2} >
                <Grid item xs={5} >
                    <LiveFixturesSegment {...this.props} />
                </Grid>
                <Grid item xs={4} >
                    <StandingsSegment {...this.props} />
                </Grid>
                <Grid item xs={3} >
                    <p>Odds</p>
                </Grid>
            </Grid>
        )
    }
}


const mapStateToProps = state => {
    return {
        fixtures: state.fixtures.fixtures
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fixturesList: type => dispatch(getFixturesLive(type)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));