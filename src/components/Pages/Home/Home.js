import React, { Component } from 'react';

import Spinner from '../../UI/Spinner/Spinner';

import { connect } from 'react-redux';
import { getFixturesLive } from '../../../actions/fixtures';
import FixturesTable from '../../UI/FixturesTable/FixturesTable';

class LiveFixtures extends Component {

    componentDidMount() {
        this.props.fixturesList();
    }

    render() {
        return this.props.fixtures ? <FixturesTable fixtures={this.props.fixtures} /> : <Spinner />
    }
}


const Home = props => {
    return (
        <LiveFixtures {...props} />
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);