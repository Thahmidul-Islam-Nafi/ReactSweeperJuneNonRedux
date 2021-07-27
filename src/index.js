import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Tile from './components/Tile';
import UncoveredTile from './components/UncoveredTile';
import Board from './components/Board'
import PreApp from './components/PreApp'
import Timer from './components/Timer'

ReactDOM.render(
  <PreApp/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
