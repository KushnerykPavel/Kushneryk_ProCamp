import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';

import Spinner from '../../UI/Spinner/Spinner';

import { connect } from 'react-redux';
import { getFixturesLive } from '../../../actions/fixtures';
import FixturesTable from '../../UI/FixturesTable/FixturesTable';

const styles = theme => {
    return {
        indicator: {
            backgroundColor: '#3e1050',
        },
    }
}

class LiveFixtures extends Component {

    componentDidMount() {
        this.props.fixturesList();
    }

    render() {
        return this.props.fixtures ? <FixturesTable fixtures={this.props.fixtures} /> : <Spinner />
    }
}


class Home extends Component {
    state = {
        value: "all"
    }

    handleChange = (event, value) => {
        console.log(value)
        this.setState({ value: value })
    }

    render() {
        return (
            <Grid container spacing={4} >
                <Grid item xs={4} >
                    <AppBar position="static" className={this.props.classes.indicator}>
                        <Tabs value={this.state.value} onChange={this.handleChange}>
                            <Tab value="all" label="Live" />
                            <Tab value="pl" label="Premier League" />
                        </Tabs>
                    </AppBar>
                    {this.state.value === "all" ? <LiveFixtures {...this.props} /> : <p>Premier League</p>}
                </Grid>
                <Grid item xs={4} >
                    <p>Item2</p>
                </Grid>
                <Grid item xs={4} >
                    <p>Item2</p>
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
        fixturesList: () => dispatch(getFixturesLive())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));