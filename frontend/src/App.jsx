import * as React from 'react';
import Container from '@mui/material/Container';
import { Box, Fade } from '@mui/material';
import { connect, useDispatch } from "react-redux";
import { selectors, actions } from "./redux/store";
import { useEffect } from 'react';
import GameStart from './components/gamestart';
import GameWaitPlayers from './components/gamewaitplayers';
import BottomBar from './components/bottomappbar';
import RollDice from './components/rolldice';
import GameMain from './components/gamemain';
const App = ({ game, ui }) => {
  useEffect(() => {
    console.log(game);
  }, [game]);
  useEffect(() => {
    console.log(ui);
  }, [ui]);
  return (
    <Container maxWidth="sm" sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      position: 'relative',
    }}>
      <Fade in={ui.startUI === 'mainUI'} timeout={1000}>
        <Box sx={{position:'absolute'}}>
          {ui.startUI === 'mainUI' && <GameStart />}
        </Box>
      </Fade>
      <Fade in={ui.startUI === 'waitPlayersUI'} timeout={1000}>
        <Box sx={{position:'absolute'}}>
          {ui.startUI === 'waitPlayersUI' && <GameWaitPlayers />}
        </Box>
      </Fade>
      <Fade in={ui.startUI === 'rolldiceUI'} timeout={1000}>
        <Box sx={{position:'absolute'}}>
          {ui.startUI === 'rolldiceUI' && <RollDice />}
        </Box>
      </Fade>
      <Fade in={ui.startUI === 'gameUI' && game.started} timeout={1000}>
        <Box sx={{position:'absolute'}}>
          {ui.startUI === 'gameUI' && <GameMain />}
        </Box>
      </Fade>
      <BottomBar />
      <Box sx={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: -1,
      }}>
        <Box
          component={'img'}
          src={'https://source.unsplash.com/featured/?landscape,mountains,dark'}
          sx={{
            width: '120vw',
            height: '120vh',
          }}
        />
        <Box sx={{
          position: 'absolute',
          backdropFilter: 'blur(5px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '120vw',
          height: '120vh',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
        />
      </Box>
    </Container>
  );
}

export default connect(
  (state) => ({
    game: state.game,
    ui: state.ui,
  }),
)(App);