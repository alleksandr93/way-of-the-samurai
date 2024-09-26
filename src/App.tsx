import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {NavBar} from './components/NavBar/NavBar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {ActionType, StateType, StoreType} from './redux/state';


type AppPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
    stor:StoreType

}
function App({state, dispatch,stor}: AppPropsType) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar sidebar={state.sidebar}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs/'}
                           render={() => <Dialogs stor={stor}/>}/>
                    <Route path={'/profile'}
                           render={() => <Profile profilePage={state.propfilePage} dispatch={dispatch}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
