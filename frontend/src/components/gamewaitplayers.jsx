import React, { useEffect, useState, useRef } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { IconButton, Avatar, Box, Typography, Stack, Chip } from '@mui/material';
import { connect, useDispatch } from "react-redux";
import { selectors, actions } from "../redux/store";

const GameWaitPlayers = ({ game, ui }) => {
  const dispatch = useDispatch();
  const StartGame = () => {
    // dispatch(actions.game.newGame());
    dispatch(actions.ui.setUIState('gameUI'));
    dispatch(actions.game.gameStarted());
  }

  const players = [
    { name: 'Player 1', color: 'red', position: 0, money: 1500, properties: [] },
    { name: 'Player 2', color: 'blue', position: 0, money: 1500, properties: [] },
    { name: 'Player 3', color: 'green', position: 0, money: 1500, properties: [] },
  ]

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
    }}
    >
      <Box sx={{ flex: 1 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          zIndex: 1,
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', color: 'salmon' }}>
          RaspbOpoly
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', color: 'snow' }}>
          Waiting for players...
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: 'snow' }}>
          List Of Joined Players
        </Typography>
        <Box >
          {players.map((player, index) => (
            <Box key={index} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 0.5 }}>
              <Stack direction="row" spacing={1} sx={{ color: 'snow', alignItems: 'center', justifyContent: 'center' }}>
                <Avatar sx={{ width: 38, height: 38, bgcolor: player.color, color: 'white', opacity: 0.8 }} />
                <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: 'snow' }}>
                  {player.name}
                </Typography>
                <Chip label={`$${player.money}`} sx={{ bgcolor: 'black', color: 'white', opacity: 0.8 }} />
              </Stack>
            </Box>
          ))
          }
        </Box>

        <IconButton
          sx={{
            color: 'white',
            '&:hover': {
              color: 'snow',
            },
          }}
          variant="contained"
          onClick={StartGame}
        >
          <Avatar sx={{ width: 98, height: 98, bgcolor: 'black', color: 'white', opacity: 0.8 }}>
            <PlayArrowIcon sx={{ width: 60, height: 60, }} />
          </Avatar>
        </IconButton>
      </Box>
    </Box>
  );
};

export default connect(
  (state) => ({
    game: state.game,
    ui: state.ui,
  }),
)(GameWaitPlayers);


