import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import CountryItem from '../../UI/CountryItem/CountryItem';
import Spinner from '../../UI/Spinner/Spinner';

import { getCountries } from '../../../providers/index';

const ITEMS_PER_ROW = 4

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 20
    },
}));

const countriesChunksList = countries_data => {
    return countries_data.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / ITEMS_PER_ROW)

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []
        }

        let country_item = <CountryItem
            key={item.country}
            country={item.country}
            flag={item.flag}
            code={item.code}
        />

        resultArray[chunkIndex].push(country_item)

        return resultArray
    }, [])
}

const NestedGrid = props => {

    const classes = useStyles();

    let countriesChunks = countriesChunksList(props.data.api.countries)

    let countriesTable = countriesChunks.map((countriesRow, idx) => {
        return (
            <Grid container item xs={12} spacing={3} key={idx}>
                {countriesRow}
            </Grid>
        )
    })

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {countriesTable}
            </Grid>
        </div>
    );
}

export default function Countries() {
    const [countryData, setCountryData] = useState(null);

    useEffect(() => {
        getCountries().then(res => setCountryData(res));

    }, [])

    if (!countryData) {
        return <Spinner />
    } else {
        return <NestedGrid data={countryData} />
    }

}