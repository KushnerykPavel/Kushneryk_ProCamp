import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import Spinner from '../../UI/Spinner/Spinner';

import { connect } from 'react-redux';
import { teamGetData } from '../../../actions/teams';

const useStyles = makeStyles({
    card: {
        maxWidth: '80%',
        marginLeft: '10%',
        marginTop: '5%',
    },
    media: {
        height: 350,
        width: '70%',
        margin: 'auto'
    },
    table: {
        minWidth: 650,
    },
});

const TableItem = props => {
    return (
        <React.Fragment>
            <TableCell component="th" scope="row">
                {props.title}
            </TableCell>
            <TableCell align="right">{props.data}</TableCell>
        </React.Fragment>
    )
}

const TableData = props => {

    const classes = useStyles();
    const { founded, venue_address, venue_capacity,
        venue_city, venue_name, venue_surface } = props;

    return (
        <Table className={classes.table}>
            <TableBody>
                <TableRow key={founded}>
                    <TableItem title='Founded' data={founded} />
                </TableRow>
                <TableRow key={venue_address}>
                    <TableItem title='Venue address' data={venue_address} />
                </TableRow>
                <TableRow key={venue_capacity}>
                    <TableItem title='Venue capacity' data={venue_capacity} />
                </TableRow>
                <TableRow key={venue_city}>
                    <TableItem title='Venue city' data={venue_city} />
                </TableRow>
                <TableRow key={venue_name}>
                    <TableItem title='Venue name' data={venue_name} />
                </TableRow>
                <TableRow key={venue_surface}>
                    <TableItem title='Venue surface' data={venue_surface} />
                </TableRow>
            </TableBody>
        </Table>
    )
}

const Team = teamData => {

    const classes = useStyles();
    const { logo, name, country, ...taleData } = teamData;

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={logo}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name} <b>({country})</b>
                    </Typography>
                    <TableData {...taleData} />
                </CardContent>
            </CardActionArea>

        </Card>
    );
}

const MediaCard = props => {

    const teamId = props.match.params.id;

    useEffect(() => {
        props.teamData(teamId)
    }, [teamId])

    if (!props.team) {
        return <Spinner />;
    } else {
        console.log(props.team.venue_name)
        return <Team
            logo={props.team.logo}
            name={props.team.name}
            country={props.team.country}
            founded={props.team.founded}
            venue_address={props.team.venue_address}
            venue_capacity={props.team.venue_capacity}
            venue_city={props.team.venue_city}
            venue_name={props.team.venue_name}
            venue_surface={props.team.venue_surface}
        />
    }
}

const mapStateToProps = state => {

    return {
        team: state.teams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        teamData: id => dispatch(teamGetData(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MediaCard);