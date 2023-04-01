import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import GameStart from './components/gamestart';
export default function App() {
  return (
    <Container maxWidth="sm">
      <Box>
        <GameStart  />
      </Box>
    </Container>
  );
}
