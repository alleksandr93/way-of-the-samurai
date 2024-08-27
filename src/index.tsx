import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state} from './redux/state';



ReactDOM.render(
    <App state={state} addpost={addPost}/>,
    document.getElementById('root')
);