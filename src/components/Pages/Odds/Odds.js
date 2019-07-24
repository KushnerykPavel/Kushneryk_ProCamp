import React, { Component } from 'react';
import { getOdds } from '../../../providers'

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => {
    return {
        background: {
            backgroundColor: '#3e1050',
            height: 50,

        },
    }
}

class Odds extends Component {

    state = {
        odds: null
    }

    componentDidMount() {
        getOdds()
            .then(odds => this.setState({ odds: odds }))
    }

    render() {
        if (this.state.odds) {
            return (
                <Paper className={this.props.classes.background} square expansion8>
                    <div style={{ color: "white" }} >Odds</div>
                </Paper>
            )
        } else {
            return <p>Loading</p>
        }
    }
}

export default withStyles(styles)(Odds);