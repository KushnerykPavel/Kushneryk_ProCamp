import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EventItemType from './EventItemType';


const EventListItem = (event) => {
    return (<div>
        <span>{event.elapsed} m </span>
        {event.player}({event.teamName})
        <EventItemType type={event.type} detail={event.detail} />
        <hr />
    </div>)
}

const FixtureDialog = props => (
    <Dialog
        open={props.open}
        onClose={props.handleClose}
        scroll='paper'
        fullWidth='lg'
        aria-labelledby="scroll-dialog-title"
    >
        <DialogTitle id="scroll-dialog-title">Events</DialogTitle>
        <DialogContent dividers>
            <DialogContentText>
                {props.data.map(event => <EventListItem {...event} />)}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={props.handleClose} color="primary">
                Cancel
          </Button>
        </DialogActions>
    </Dialog>
)

export default FixtureDialog;