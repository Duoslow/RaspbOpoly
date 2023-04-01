import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { IconButton, Avatar, Box, Typography } from '@mui/material';
import { connect, useDispatch } from "react-redux";
import { selectors, actions } from "../redux/store";

const GameStart = ({ game }) => {

  const dispatch = useDispatch();
  const NewGame = () => {
    dispatch(actions.game.newGame());
    dispatch(actions.ui.game.waitForPlayers());
  }
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
    }}
    >
      <Box >
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundImage: 'url(https://source.unsplash.com/featured/?landscape,mountains,dark)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px)',
        }}
        />
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
        />
      </Box>
      <Box sx={{ flex: 1 }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          zIndex: 1,
          marginTop: '50%',
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
  }),
)(GameStart);