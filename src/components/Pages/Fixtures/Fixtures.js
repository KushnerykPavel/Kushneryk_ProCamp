import React, { Component } from 'react';

import Spinner from '../../UI/Spinner/Spinner';
import FixturesTable from '../../UI/FixturesTable/FixturesTable';
import { connect } from 'react-redux';
import { getFixturesByLeague } from '../../../actions/fixtures';

class Fixtures extends Component {

    state = {
        page: 0,
        listData: null,
        rowsPerPage: 10
    }

    componentDidMount() {
        this.props.fixturesList();
    }

    render() {
        if (!this.props.fixtures) {
            return <Spinner />
        } else {
            return (
                <FixturesTable fixtures={this.props.fixtures} />
            );
        }

    }

}

const mapStateToProps = state => {
    return {
        fixtures: state.fixtures.fixtures,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fixturesList: () => dispatch(getFixturesByLeague())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fixtures);