import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import { Provider } from "react-redux";
import store from "./redux/store";
import { GlobalStyles } from '@mui/material';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <GlobalStyles styles={{
          "html, body, #root": {
            height: '100%',
          },
          
        }} />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
