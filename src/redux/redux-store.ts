import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';

const reducers = combineReducers({
    profilePage:profileReducer,
    dialogePage:dialogsReducer,
    sidebarPage:sidebarReducer
})
export const store = createStore(reducers);

export type RootState = ReturnType<typeof reducers>;