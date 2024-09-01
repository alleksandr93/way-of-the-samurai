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
import {StateType, StorType} from './redux/state';


type AppPropsType = {
    state: StateType
    addPost:()=>void
    updateNewPostText:(newText: string) => void
}


function App({state,addPost,updateNewPostText}: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar sidebar={state.sidebar}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs/'}
                           render={() => <Dialogs dialogs={state.dialogPage.dialogs}
                                                  messages={state.dialogPage.messages}/>}/>
                    <Route path={'/profile'}
                           render={() => <Profile profilePage={state.propfilePage} addProps={addPost}
                                                  updateNewPostText={updateNewPostText}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
