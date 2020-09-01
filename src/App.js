import React from 'react';
import Grid from './containers/Grid/Grid';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { createMuiTheme, makeStyles, ThemeProvider, useTheme } from '@material-ui/core';
import Visited from './components/Visited/Visited';
import ShortestPath from './components/ShortestPath/ShortestPath';

const appTheme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#050507",
      paper: "#484345",
    },
    divider: "#dd2c00",
    action: {
      hover: "#661ff8",
      selected: "#4819a9",
      active: "#e64a19",
    },
  },
  overrides: {
    MuiListItem: {
      root: {
        fontSize: "1rem",
      },
    },
  },
  typography: {
    fontFamily: "'Karla', sans-serif",
  },
});

const useStyles = makeStyles((appTheme) => ({
  toolbar: appTheme.mixins.toolbar,
}));

const App = () => {

  const gridRef = React.useRef();
  const classes = useStyles();
  const xs = window.matchMedia("(max-width: 576px)").matches;
  const sm = window.matchMedia("(min-width: 576px)").matches;
  const md = window.matchMedia("(min-width: 768px)").matches;
  const lg = window.matchMedia("(min-width: 960px)").matches;
  const xl = window.matchMedia("(min-width: 1200px)").matches;

  const getNumberOfRows = () => {
    if (xl) return 41;
    if (lg) return 37;
    if (md) return 39;
    if (sm) return 43;
    if (xs) return 43;
    return 60;
  };

  const getNumberOfColumns = () => {
    if (xl) return 61;
    if (lg) return 45;
    if (md) return 51;
    if (sm) return 41;
    if (xs) return 31;
    return 100;
  };

  return (
    <ThemeProvider theme={appTheme}>
      <div className={classes.toolbar} />
      <div className="app">
        <Layout />
        <div className="content">
          <Grid ref={gridRef} rows={getNumberOfRows()} columns={getNumberOfColumns()} />
          <div className="data">
            <div className="dataContent">
              <Visited rows={getNumberOfRows()} columns={getNumberOfColumns} />
              <ShortestPath rows={getNumberOfRows()} columns={getNumberOfColumns()} />
            </div>
            <div>AlgoInfo......</div>
          </div>
        </div>
      </div>

    </ThemeProvider>

  );

};

export default App;
