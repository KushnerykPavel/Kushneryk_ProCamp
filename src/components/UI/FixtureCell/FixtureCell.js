import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import FixtureDialog from '../FixtureDialog/FixtureDialog';

import { getEventsByFixture } from '../../../providers';


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
                <TableCell component="th" scope="row" align="left">
                    <Link to={`/teams/${this.props.homeTeam.team_id}`}>
                        {this.props.homeTeam.team_name}
                    </Link>
                </TableCell>
                <TableCell align="center"><b>{this.props.score.halftime}{this.props.score.fulltime ? `(${this.props.score.fulltime})` : ''}</b></TableCell>
                <TableCell align="right">
                    <Link to={`/teams/${this.props.awayTeam.team_id}`}>
                        {this.props.awayTeam.team_name}
                    </Link>
                </TableCell>
                <TableCell align="left"> {this.props.status}</TableCell>
                <FixtureDialog
                    open={this.state.open}
                    handleClose={this.handleClose}
                    data={this.state.events}
                />
            </TableRow >
        )
    }
}

export default FixtureCell;