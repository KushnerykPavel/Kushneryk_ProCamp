import React, { Component } from 'react';

import FixtureCell from '../FixtureCell/FixtureCell';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from '@material-ui/core/TableFooter';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles(theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(2),
    }
}));

const TablePaginationActions = props => {
    const classes = useStyles();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;


    function handleBackButtonClick(event) {
        onChangePage(event, page - 1);
    }

    function handleNextButtonClick(event) {
        onChangePage(event, page + 1);
    }

    return (
        <div className={classes.root}>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="Previous Page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="Next Page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
        </div>
    );
}


class FixturesTable extends Component {

    state = {
        page: 0,
        listData: null,
        rowsPerPage: 10
    }

    handleChangePage = (event, newPage) => {
        this.setState({ page: newPage })
    }

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: parseInt(event.target.value, 10) })
    }

    render() {
        return (
            <Table size="small" >
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Home Team</TableCell>
                        <TableCell align="center">Score</TableCell>
                        <TableCell align="right">Away team</TableCell>
                        <TableCell align="left">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.fixtures
                        .slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                        .map(fixture => (
                            <FixtureCell {...fixture} key={fixture.fixture_id} />
                        ))}
                </TableBody>
                <TableFooter>
                    <TablePagination
                        rowsPerPageOptions={[10, 20, 30]}
                        colSpan={3}
                        count={this.props.fixtures.length}
                        rowsPerPage={this.state.rowsPerPage}

                        SelectProps={{
                            inputProps: { 'aria-label': 'Per page' },
                            native: true,
                        }}
                        page={this.state.page}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                    />
                </TableFooter>
            </Table>
        );
    }
}

export default FixturesTable;