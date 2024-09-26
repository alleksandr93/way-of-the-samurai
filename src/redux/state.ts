import {addPostActionCreatorAC, profileReducer, updateNewPostTextActionCreatorAC} from './profile-reducer';
import {dialogsReducer, sendMessageActionCreatorAC, updateNewMessageBodyCreatorAC} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';

export type StateType = {
    propfilePage: PostsItems
    dialogPage: DialogPageType
    sidebar: SidebarType[]
}
export type DialogPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
    newMessageBody: string

}
export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostsItems = {
    posts: PostsType[]
    newPostText: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type SidebarType = {
    id: number
    name: string
}

export type AddPostActionType = ReturnType<typeof addPostActionCreatorAC>
export type updateNewPostTextActionType =ReturnType<typeof updateNewPostTextActionCreatorAC>
export type AddMessageActionType = ReturnType<typeof updateNewMessageBodyCreatorAC>
export type SendMessageActionType = ReturnType<typeof sendMessageActionCreatorAC>

export type ActionType = AddPostActionType | updateNewPostTextActionType | AddMessageActionType | SendMessageActionType

export type StoreType = {
    _state: StateType
    _callSubcriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}

export const stor: StoreType = {
    _state: {
        propfilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 11},
                {id: 2, message: 'Hi, my name is John', likesCount: 13},
                {id: 3, message: 'it\'s my first post', likesCount: 5},
            ],
            newPostText: 'it-kamasutra'
        },
        dialogPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'My message'},
            ],
            newMessageBody: ''
        },
        sidebar: [
            {id: 1, name: 'Andrey'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Sveta'},
        ]
    },
    _callSubcriber() {
        console.log('s')
    },
    getState() {
        return this._state
    },
    subscribe(callback) {
        this._callSubcriber = callback // это патерн observer наблюдатель
    },
    dispatch(action: ActionType) {
        this._state.propfilePage = profileReducer(this._state.propfilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubcriber()

    }
}





