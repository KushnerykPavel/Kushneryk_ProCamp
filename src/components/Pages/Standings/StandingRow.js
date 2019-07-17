import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import StandingDialog from './StandingDialog';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class StandingRow extends Component {
    state = {
        open: false,
    }

    handleClickOpen = id => {
        this.setState({ open: true })
    }

    handleClose = (e) => {
        e.stopPropagation()
        this.setState({ open: false })
    }

    render() {
        let dialogData = {
            ...{ home: this.props.row.home },
            ...{ away: this.props.row.away },
            ...{ all: this.props.row.all },
        }
        return (
            <TableRow key={this.props.row.team_id} onClick={() => this.handleClickOpen(this.props.row.team_id)}>
                <TableCell component="th" scope="row">
                    <Link
                        to={`/teams/${this.props.row.team_id}`}
                        onClick={e => e.stopPropagation()}
                    >{this.props.row.teamName}</Link>
                </TableCell>
                <TableCell >{this.props.row.forme}</TableCell>
                <TableCell align="right">{this.props.row.points}</TableCell>
                <StandingDialog
                    data={dialogData}
                    open={this.state.open}
                    handleClose={this.handleClose}
                />
            </TableRow>
        )
    }

}

export default StandingRow;