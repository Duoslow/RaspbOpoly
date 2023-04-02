import React, { useEffect, useState, useRef } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { IconButton, Avatar, Box, Typography, Stack, Chip } from '@mui/material';
import { connect, useDispatch } from "react-redux";
import { selectors, actions } from "../redux/store";

const GameMain = ({ game, ui }) => {
  const data = [
    { id: 1, name: 'Player 1', color: 'red', position: 0, money: 1500, properties: [{ id: 1, name: 'Beylikdüzü', owner: 1, tier: 1 }, { id: 2, name: 'test', owner: 1, tier: 1 }] },
    { id: 2, name: 'Player 2', color: 'blue', position: 0, money: 1500, properties: [{ id: 3, name: 'test', owner: 2, tier: 1 }] },
    { id: 3, name: 'Player 3', color: 'green', position: 0, money: 1500, properties: [{ id: 4, name: 'test', owner: 3, tier: 1 }] },
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
        <Typography variant="h3" sx={{ textAlign: 'center', color: 'salmon', position: 'fixed', top: 0 }}>
          RaspbOpoly
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', color: 'snow' }}>
          Game Started
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: 'snow' }}>
          List Of Joined Players
        </Typography>
        <Box >
          {data.map((player, index) => (
            <Box key={index} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 0.5 }}>
              <Stack direction="row" spacing={1} sx={{ color: 'snow', alignItems: 'center', justifyContent: 'center' }}>
                <Avatar sx={{ width: 38, height: 38, bgcolor: player.color, color: 'white', opacity: 0.8 }} />
                <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: 'snow' }}>
                  {player.name}
                </Typography>
                <Chip label={`$${player.money}`} sx={{ bgcolor: 'black', color: 'white', opacity: 0.8 }} />
              </Stack>
            </Box>
          ))}
        </Box>
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: 'snow' }}>
          List Of Properties
        </Typography>
        <Box >
          {data.map((player, index) => (
            <Box key={index} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 0.5 }}>
              <Stack direction="row" spacing={1} sx={{ color: 'snow', alignItems: 'center', justifyContent: 'center' }}>
                <Stack direction="column" spacing={1} sx={{ color: 'snow', alignItems: 'center', justifyContent: 'center' }}>
                  <Stack direction="row" spacing={1} sx={{ color: 'snow', alignItems: 'center', justifyContent: 'center' }}>
                    <Avatar sx={{ width: 38, height: 38, bgcolor: player.color, color: 'white', opacity: 0.8 }} />
                    <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: 'snow' }}>
                      {player.name}
                    </Typography>
                  </Stack>
                  <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: 'snow' }}>
                    {player.properties.map((property, index) => (
                      <Chip key={index} label={property.name} sx={{ bgcolor: 'snow', color: player.color, margin: 0.5 }} />
                    ))}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default connect(
  (state) => ({
    game: state.game,
    ui: state.ui,
  }),
)(GameMain);