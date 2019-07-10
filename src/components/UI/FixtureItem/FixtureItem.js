import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';


const useStyles = makeStyles(theme => ({
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
}));

const FixtureExpansionPanel = props => {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <ExpansionPanel className={classes.paper}>
                <ExpansionPanelSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <FixtureItem {...props} />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
            </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

        </div>
    );
}

const FixtureItem = props => {
    const classes = useStyles();

    return (

        <Grid container spacing={4}>
            <Grid item>
                <ButtonBase className={classes.image}>
                    <Link to={`/teams/${props.homeTeam.team_id}`}>
                        <img className={classes.img} alt="complex" src={props.homeTeam.logo} />
                    </Link>
                </ButtonBase>
                <Typography variant="body2" gutterBottom align='center'>
                    {props.homeTeam.team_name}
                </Typography>
            </Grid>
            <Grid xs={12} sm container>
                <Grid item xs={4}>
                    <Typography variant="subtitle1" >Score Full-time: <b>{props.score.fulltime}</b></Typography>
                    <Typography variant="subtitle1">Score Half-time: <b>{props.score.halftime}</b></Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2" color="textSecondary">
                        {props.round}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {props.venue}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item>
                <ButtonBase className={classes.image}>
                    <Link to={`/teams/${props.awayTeam.team_id}`}>
                        <img className={classes.img} alt="complex" src={props.awayTeam.logo} />
                    </Link>
                </ButtonBase>
                <Typography variant="body2" gutterBottom align='center'>
                    {props.awayTeam.team_name}
                </Typography>
            </Grid>
        </Grid>

    );
}


export default FixtureExpansionPanel;