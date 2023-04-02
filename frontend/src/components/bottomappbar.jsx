import * as React from 'react';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import CasinoIcon from '@mui/icons-material/Casino';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { AppBar, Box, CssBaseline, Toolbar, Typography, IconButton, Paper, Fab, List, ListItem, ListItemAvatar, ListItemText, ListSubheader, Avatar } from '@mui/material';
import { connect, useDispatch } from "react-redux";
import { selectors, actions } from "../redux/store";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const BottomBar = ({ ui, game }) => {
    const [value, setValue] = React.useState(1);
    const dispatch = useDispatch();
    const rolldice = () => {
        // dispatch(actions.game.newGame());
        dispatch(actions.ui.setUIState('rolldiceUI'));
    }
    const gameui = () => {
        if (game.started) {
            dispatch(actions.ui.setUIState('gameUI'));
        }
        else {
            dispatch(actions.ui.setUIState('mainUI'));
        }
    }
    const actionsui = () => {
        dispatch(actions.ui.setUIState('actionsUI'));
    }
    return (
        <Box>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    "& .Mui-selected, .Mui-selected > svg": {
                        color: "#04c4c1"
                    },
                    bgcolor: 'aliceblue',

                }}
            >
                <BottomNavigationAction label="Roll a dice" icon={<CasinoIcon />} onClick={rolldice} />
                <BottomNavigationAction label="Game" icon={<PlayArrowIcon />} onClick={gameui} />
                <BottomNavigationAction label="Actions" icon={<MenuIcon />} onClick={actionsui} />
            </BottomNavigation>
        </Box>
    );
}

export default connect(
    (state) => ({
        ui: state.ui,
        game: state.game,
    }),
)(BottomBar);