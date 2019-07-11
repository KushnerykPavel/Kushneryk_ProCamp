import React, { Component } from 'react';

import Spinner from '../../UI/Spinner/Spinner';
import FixtureItem from '../../UI/FixtureItem/FixtureItem';

import { connect } from 'react-redux';
import { getFixturesByLeague } from '../../../actions/fixtures';

const FixturesList = data => {
    return data.fixtures.map(fixture => <FixtureItem key={fixture.fixture_id} {...fixture} />)
}


const Navigation = (props) => {
    return (<div>
        <button onClick={props.prevPage}>Prev</button>
        <p style={{ display: 'inline-block', margin: 10 }}>
            Page: {props.currPage + 1} of {props.totalPages}
        </p>
        <button onClick={props.nextPage}>Next</button>
    </div >)
}
class Fixtures extends Component {
    OFFSET = 8;

    state = {
        page: 0,
        listData: null
    }

    prevPage = () => {
        if (this.state.page >= 1) {
            let prev = this.state.page - 1;
            this.setState({
                listData: this.props.fixtures.slice(this.OFFSET * prev, this.OFFSET * (prev + 1)),
                page: prev
            })
        }

    }

    nextPage = () => {
        let next = this.state.page + 1
        this.setState({
            listData: this.props.fixtures.slice(this.OFFSET * next, this.OFFSET * (next + 1)),
            page: next
        })
    }

    componentDidMount() {
        this.props.fixturesList();
    }

    render() {
        if (!this.props.fixtures) {
            return <Spinner />
        } else if (!this.state.listData) {
            return (
                <div>
                    <Navigation
                        prevPage={this.prevPage}
                        nextPage={this.nextPage}
                        currPage={this.state.page}
                        totalPages={parseInt(this.props.fixtures.length / this.OFFSET)}
                    />
                    <FixturesList fixtures={this.props.fixtures.slice(0, this.OFFSET)} />
                </div>
            );
        } else {
            return (
                <div>
                    <Navigation
                        prevPage={this.prevPage}
                        nextPage={this.nextPage}
                        currPage={this.state.page}
                        totalPages={parseInt(this.props.fixtures.length / this.OFFSET)}
                    />
                    <FixturesList fixtures={this.state.listData} />
                </div>
            )
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