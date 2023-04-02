import React, { useEffect, useState, useRef } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button, Avatar, Box, Typography, Stack, Chip, Grid, Paper, Fade } from '@mui/material';
import { connect, useDispatch } from "react-redux";
import { selectors, actions } from "../redux/store";

const Actions = ({ game, ui }) => {
  const [clickedaction, setClickedAction] = useState('');
  const [lastclickedaction, setLastClickedAction] = useState('');
  const dispatch = useDispatch();
  const GetGoMoney = () => {
    // dispatch(actions.game.goMoney());
    setClickedAction('GetGoMoney');
  }
  const PayJail = () => {
    // dispatch(actions.game.payJail());
    setClickedAction('PayJail');
  }
  const PayPlane = () => {
    // dispatch(actions.game.PayPlane());
    setClickedAction('PayPlane');
  }
  const PropertyExchange = () => {
    // dispatch(actions.game.propertyExchange());
    setClickedAction('PropertyExchange');
  }
  const PayMortgage = () => {
    // dispatch(actions.game.payMortgage());
    setClickedAction('PayMortgage');
  }
  const PayInsurance = () => {
    // dispatch(actions.game.payInsurance());
    setClickedAction('PayInsurance');
  }
  const PayBank = () => {
    // dispatch(actions.game.payBank());
    setClickedAction('PayBank');
  }
  const PayPlayer = () => {
    // dispatch(actions.game.payPlayer());
    setClickedAction('PayPlayer');
  }
  const FinishTheGame = () => {
    // dispatch(actions.game.finishTheGame());
    dispatch(actions.ui.setUIState('mainUI'));
  }
  const Descriptions = {
    GetGoMoney: { 'name': 'Get Go Money', 'description': 'Get $200 from the bank.' },
    PayJail: { 'name': 'Pay Jail', 'description': 'Pay $100 to get out of jail.' },
    PayPlane: { 'name': 'Pay Plane', 'description': 'Pay $200 to fly to any location.' },
    PropertyExchange: { 'name': 'Property Exchange', 'description': 'Exchange any property with any other player.' },
    PayMortgage: { 'name': 'Pay Mortgage', 'description': 'Pay $100 for Mortgage.' },
    PayInsurance: { 'name': 'Pay Insurance', 'description': 'Pay $200 for Insurance.' },
    PayBank: { 'name': 'Pay Bank', 'description': 'Pay any amount to the bank for saving.' },
    PayPlayer: { 'name': 'Pay Player', 'description': 'Pay any amount to any player.' },
  }
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
      }}>
        <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', color: 'salmon', pt: 1 }}>
          Actions
        </Typography>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}>
          <Fade in={clickedaction === '' ? false : true} timeout={1000}>
            <Box>
              {clickedaction === '' ? null : <>
                <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', color: 'white' }}>
                  {Descriptions[clickedaction].name}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: 'aquamarine' }}>
                  {Descriptions[clickedaction].description}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', color: 'aquamarine' }}>
                  Please scan your card to confirm.
                </Typography>
              </>
              }
            </Box>
          </Fade>
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        pb: 20,
      }}>
        <Grid container spacing={3} sx={{ height: '50%', width: '100%' }}>
          <Grid item xs={6}>
            <Paper elevation={3}>
              <Button variant="contained" color="success" onClick={GetGoMoney} sx={{ height: '7vh', width: '100%', }}>
                Get Go Money
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3}>
              <Button variant="contained" color="success" onClick={PayJail} sx={{ height: '7vh', width: '100%', }}>
                Pay Jail
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3}>
              <Button variant="contained" color="success" onClick={PayPlane} sx={{ height: '7vh', width: '100%', }}>
                Pay Plane
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3}>
              <Button variant="contained" color="success" onClick={PropertyExchange} sx={{ height: '7vh', width: '100%', }}>
                Property Exchange
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3}>
              <Button variant="contained" color="success" onClick={PayMortgage} sx={{ height: '7vh', width: '100%', }}>
                Pay Mortgage
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3}>
              <Button variant="contained" color="success" onClick={PayInsurance} sx={{ height: '7vh', width: '100%', }}>
                Pay Insurance
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3}>
              <Button variant="contained" color="success" onClick={PayBank} sx={{ height: '7vh', width: '100%', }}>
                Pay Bank
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3}>
              <Button variant="contained" color="success" onClick={PayPlayer} sx={{ height: '7vh', width: '100%', }}>
                Pay Player
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3}>
              <Button variant="contained" color="error" onClick={FinishTheGame} sx={{ height: '7vh', width: '100%', }}>
                Finish The Game
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box >
      <Box sx={{ flex: 1 }} />
    </Box >
  );
}

export default connect(
  (state) => ({
    game: state.game,
    ui: state.ui,
  }),
)(Actions);




