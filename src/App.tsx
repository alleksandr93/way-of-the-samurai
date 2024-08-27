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
import {addPost, state} from './redux/state';

export type AppPropsType = {
    state:StateType
    addpost:(postMessage:string)=>void
}
type StateType={
    dialogs:DialogsType[]
    messages:MessagesType[]
    posts:PostsType[]
    sidebar:SideBarType[]
}
export type DialogsType = {
    id:number
    name:string
}
export type MessagesType = {
    id:number
    message:string
}
export type PostsType = {
    id:number
    message:string
    likesCount:number
}
export type SideBarType = {
    id:number
    name:string
}

function App({state,addpost}:AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar sidebar={state.sidebar}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs/'} render={() => <Dialogs dialogs={state.dialogs} messages={state.messages} />}/>
                    <Route path={'/profile'} render={() => <Profile posts={state.posts} addProps={addpost}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
