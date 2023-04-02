import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { IconButton, Avatar, Box, Typography } from '@mui/material';
import { connect, useDispatch } from "react-redux";
import { selectors, actions } from "../redux/store";
import { useEffect } from 'react';

const GameStart = ({ game, ui }) => {

  const dispatch = useDispatch();
  const NewGame = () => {
    // dispatch(actions.game.newGame());
    dispatch(actions.ui.setUIState('waitPlayersUI'));  
  }
  useEffect(() => {
    console.log(ui);
  }, [ui]);

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
          The Raspberry Pi Real Estate Board Game
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: 'sandybrown' }}>
          By: Duoslow
        </Typography>
        <IconButton
          sx={{
            color: 'white',
            '&:hover': {
              color: 'snow',
            },
          }}
          variant="contained"
          onClick={NewGame}
        >
          <Avatar sx={{ width: 98, height: 98, bgcolor: 'black', color: 'white', opacity: 0.8 }}>
            <PlayArrowIcon sx={{ width: 60, height: 60, }} />
          </Avatar>
        </IconButton>
      </Box>
    </Box>
  );
}

export default connect(
  (state) => ({
    game: state.game,
    ui: state.ui,
  }),
)(GameStart);