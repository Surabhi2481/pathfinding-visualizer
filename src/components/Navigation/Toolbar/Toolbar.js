import React from 'react';
import { IconButton, Typography, Button, makeStyles } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
            marginRight: theme.spacing(6),
        },
    },
    titlebar: {
        display: "flex",
        flexGrow: 1,
    },
    toolButton: {
        marginRight: "1vw",
    },
}));


const Toolbar = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.titlebar}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={props.drawerToggleClicked}
                className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                Pathfinding Visualizer
        </Typography>
            <Button
                className={classes.toolButton}
                variant="text"
                disableElevation
                onClick={() => props.visualize()}
                disabled={props.anim}
            >
                Visualize
        </Button>
            <Button
                className={classes.toolButton}
                variant="text"
                disableElevation
                onClick={() => props.clearGrid()}
                disabled={props.anim}
            >
                Clear Board
        </Button>
            <Button
                className={classes.toolButton}
                variant="text"
                disableElevation
                onClick={() => props.visualizeMaze(props.animateMaze)}
                disabled={props.anim}
            >
                Add Maze
        </Button>
        </div>

    );
};

export default Toolbar;