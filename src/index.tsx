import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType, stor} from './redux/state';




const rerenderEntireTree=(state:StateType)=> {
    ReactDOM.render(
        <App state={state} dispatch={stor.dispatch.bind(stor)} stor={stor}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(stor.getState());

stor.subscribe(()=>rerenderEntireTree(stor.getState()))


