import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        width: '100%'
    },
}));



const StandingDialog = props => {
    const classes = useStyles();
    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            scroll='paper'
            aria-labelledby="scroll-dialog-title"
            fullWidth={true}
            maxWidth={'md'}
        >
            <DialogTitle id="scroll-dialog-title">Events</DialogTitle>
            <DialogContent dividers>
                <DialogContentText>
                    <Table className={classes.table} >
                        <TableHead>
                            <TableRow>
                                <TableCell>Location</TableCell>
                                <TableCell>Matches played</TableCell>
                                <TableCell align="right">Win</TableCell>
                                <TableCell align="right">Lose</TableCell>
                                <TableCell align="right">Goals for</TableCell>
                                <TableCell align="right">Goals against</TableCell>
                                <TableCell align="right">Draw</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.keys(props.data).map(row => (
                                <TableRow key={props.data[row].draw}>
                                    <TableCell align="left">{row}</TableCell>
                                    <TableCell align="right">{props.data[row].matchsPlayed}</TableCell>
                                    <TableCell align="right">{props.data[row].win}</TableCell>
                                    <TableCell align="right">{props.data[row].lose}</TableCell>
                                    <TableCell align="right">{props.data[row].goalsFor}</TableCell>
                                    <TableCell align="right">{props.data[row].goalsAgainst}</TableCell>
                                    <TableCell align="right">{props.data[row].draw}</TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    Cancel
          </Button>
            </DialogActions>
        </Dialog>
    )
}

export default StandingDialog;