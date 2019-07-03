import React, { useState, useEffect } from 'react';

import Spinner from '../../UI/Spinner/Spinner';
import FixtureItem from '../../UI/FixtureItem/FixtureItem';

import { getFixtures } from '../../../providers';

const FixturesList = data => {
    return data.fixtures.map(fixture => <FixtureItem key={fixture.fixture_id} {...fixture} />)
}


const Navigation = (props) => {
    return (<div>
        <button onClick={props.prevPage}>Prev</button>
        <button onClick={props.nextPage}>Next</button>
    </div >)
}
const Fixtures = () => {
    const OFFSET = 3;
    const [fixturesData, setFixturesData] = useState(null);
    const [page, setPage] = useState(0);
    const [listData, setListData] = useState(null);

    const prevPage = () => {
        if (page >= 1) {
            let prev = page - 1;
            setPage(prev)
            setListData(fixturesData.slice(OFFSET * prev, OFFSET * (prev + 1)));
        }

    }

    const nextPage = () => {
        let next = page + 1
        setPage(next)
        setListData(fixturesData.slice(OFFSET * next, OFFSET * (next + 1)));
    }

    useEffect(() => {
        getFixtures().then(res => setFixturesData(res));
    }, [])

    if (!fixturesData) {
        return <Spinner />
    } else if (!listData) {
        return (
            <div>
                <Navigation prevPage={prevPage} nextPage={nextPage} />
                <FixturesList fixtures={fixturesData.slice(0, OFFSET)} />
            </div>
        );
    } else {
        return (
            <div>
                <Navigation prevPage={prevPage} nextPage={nextPage} />
                <FixturesList fixtures={listData} />

            </div>
        )
    }

}
export default Fixtures;