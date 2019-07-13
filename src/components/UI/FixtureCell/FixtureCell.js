import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import FixtureDialog from '../FixtureDialog/FixtureDialog';

import { getEventsByFixture } from '../../../providers';


const styles = theme => {
    return {
        root: {
            flexGrow: 1,
            marginTop: 50,
            marginBottom: 50,
        },
        paper: {
            padding: theme.spacing(2),
            margin: 'auto',
            maxWidth: '100%',
        },
        image: {
            width: 128,
            height: 128,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
        table: {
            minWidth: 650,
        },
    }
};


class FixtureCell extends Component {

    state = {
        open: false,
        events: [],
        isFetching: false,
        canRequest: false,
    }

    fetchEvents = (id) => {
        this.setState(
            prevState => {
                return {
                    canRequest: !prevState.canRequest,
                };
            },
            async () => {
                if (this.state.canRequest) {
                    this.setState({
                        isFetching: true,
                    });
                    try {
                        const response = await getEventsByFixture(id);
                        this.setState({
                            events: response,
                            isFetching: false,
                        });
                    } catch (e) {
                        this.setState({
                            error: e.message || e.data.message,
                            isFetching: false,
                        });
                    }
                }
            }
        );
    };

    handleClickOpen = id => {
        this.fetchEvents(id)
        this.setState({ open: true })
    }

    handleClose = (e) => {
        e.stopPropagation()
        this.setState({ open: false })
    }
    render() {
        return (
            <TableRow onClick={() => this.handleClickOpen(this.props.fixture_id)}>
                <TableCell component="th" scope="row" align="center">
                    <Link to={`/teams/${this.props.homeTeam.team_id}`}>
                        {this.props.homeTeam.team_name}
                    </Link>
                </TableCell>
                <TableCell align="right"><b>{this.props.score.fulltime}({this.props.score.halftime})</b></TableCell>
                <TableCell align="center">
                    <Link to={`/teams/${this.props.awayTeam.team_id}`}>
                        {this.props.awayTeam.team_name}
                    </Link>
                </TableCell>
                <TableCell align="right"> {this.props.event_date}</TableCell>
                <TableCell align="right"> {this.props.status}</TableCell>
                <FixtureDialog
                    open={this.state.open}
                    handleClose={this.handleClose}
                    data={this.state.events}
                />
            </TableRow >
        )
    }
}

export default withStyles(styles)(FixtureCell);