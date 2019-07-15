import React, { useState, useEffect } from 'react';

import Spinner from '../../UI/Spinner/Spinner';
import FixtureItem from '../../UI/FixtureItem/FixtureItem';

import { connect } from 'react-redux';
import { getFixturesLive } from '../../../actions/fixtures';

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
const LiveFixtures = props => {

    const OFFSET = 8;
    const [page, setPage] = useState(0);
    const [listData, setListData] = useState(null);

    useEffect(() => {
        props.fixturesList();
    }, [])

    const prevPage = () => {
        if (page >= 1) {
            let prev = page - 1;
            setPage(prev)
            setListData(props.fixtures.slice(OFFSET * prev, OFFSET * (prev + 1)));
        }

    }

    const nextPage = () => {
        let next = page + 1
        setPage(next)
        setListData(props.fixtures.slice(OFFSET * next, OFFSET * (next + 1)));
    }



    if (!props.fixtures) {
        return <Spinner />
    } else if (props.fixtures.length === 0) {
        return <p>Unfortunately no data yet!</p>
    } else if (!listData) {
        return (
            <div>
                <Navigation
                    prevPage={prevPage}
                    nextPage={nextPage}
                    currPage={page}
                    totalPages={parseInt(props.fixtures.length / OFFSET)}
                />
                <FixturesList fixtures={props.fixtures.slice(0, OFFSET)} />
            </div>
        );
    } else {
        return (
            <div>
                <Navigation
                    prevPage={prevPage}
                    nextPage={nextPage}
                    currPage={page}
                    totalPages={parseInt(props.fixtures.length / OFFSET)}
                />
                <FixturesList fixtures={listData} />
            </div>
        )
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