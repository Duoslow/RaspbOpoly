import React, { useEffect, useState, useRef } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button, Avatar, Box, Typography, Stack, Chip } from '@mui/material';
import { connect, useDispatch } from "react-redux";
import { selectors, actions } from "../redux/store";
import ReactDice, { ReactDiceRef } from 'react-dice-complete'


const RollDice = ({ game, ui }) => {
    const reactDice = useRef(null)
    const [totalValue, setTotalValue] = useState(0)
    const [dice, setDice] = useState(0)

    const rollDone = (totalValue, values) => {
        // console.log(totalValue, values)
        setTotalValue(values)
        setDice(totalValue)
    }

    const rollAll = () => {
        reactDice.current?.rollAll()
    }
    useEffect(() => {
        console.log(dice);
    }, [dice]);
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        }}
        onClick={rollAll} 
        >
            <Typography variant="h2" gutterBottom sx={{ textAlign: 'center', color: 'aliceblue' }}>
                {dice}
            </Typography>
            <ReactDice
                numDice={2}
                faceColor={'#04c4c1'}
                dotColor={'#FFFDD0'}
                dieSize={100}
                dieCornerRadius={10}
                margin={20}
                disableIndividual={true}
                rollTime={1}
                ref={reactDice}
                rollDone={rollDone}
            />
        </Box>
    );
}

export default connect(
    (state) => ({
        game: state.game,
        ui: state.ui,
    }),
)(RollDice);


