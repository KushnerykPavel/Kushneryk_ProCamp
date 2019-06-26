import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

import Button from '../UI/Button/Button';

import appLogo from '../../assets/logo.jpg';

// logo color #3e1050
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    grid: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    appBar: {
        backgroundColor: '#3e1050'
    },
    logo: {
        margin: 10,
        width: 60,
        height: 60,
    }
}));

const SearchBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'Search' }}
            />
        </div>
    )
}

const Appbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Button text="Home" to="/" />
                    <Button text="Teams" to="/teams" />
                    <Button text="Fixtures" to="/fixtures" />
                    <Button text="Odds" to="/odds" />
                    <Grid container justify="center">
                        <Avatar alt="Premier League" src={appLogo} className={classes.logo} />
                    </Grid>
                    <SearchBar />
                </Toolbar>
            </AppBar>
        </div >
    );
}

export default Appbar;