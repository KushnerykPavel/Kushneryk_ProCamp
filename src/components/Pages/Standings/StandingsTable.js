import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from '@material-ui/core/TableFooter';

import StandingRow from './StandingRow';

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
const StandingsTable = props => {
    console.log(props.standingsItems)
    return (
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell>Team Name</TableCell>
                    <TableCell >Forme</TableCell>
                    <TableCell align="right">Points</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.standingsItems.map(row => (
                    <StandingRow row={row} />
                ))}
            </TableBody>
            <TableFooter>
                <TablePagination
                    rowsPerPageOptions={[10, 20, 30]}
                    colSpan={3}
                    count={props.standingsItems.length}
                    rowsPerPage={props.rowsPerPage}

                    SelectProps={{
                        inputProps: { 'aria-label': 'Per page' },
                        native: true,
                    }}
                    page={props.page}
                    onChangePage={props.change}
                    onChangeRowsPerPage={props.changeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                />
            </TableFooter>
        </Table>
    )
}

export default StandingsTable;