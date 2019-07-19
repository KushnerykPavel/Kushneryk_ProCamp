import React, { Component } from 'react';
import { getOdds } from '../../../providers'

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => {
    return {
        background: {
            backgroundColor: '#3e1050',
            height: "10%",

        },
    }
}

class Odds extends Component {

    componentDidMount() {
        getOdds()
            .then(res => console.log(res))
    }

    render() {
        return (
            <Paper className={this.props.classes.background} square expansion8>
                <div style={{ color: "white" }} >Odds</div>
            </Paper>
        )
    }
}

export default withStyles(styles)(Odds);