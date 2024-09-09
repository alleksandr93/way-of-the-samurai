import {type} from 'node:os';


export type StateType = {
    propfilePage: PostsItems
    dialogPage: DialogPageType
    sidebar: SidebarType[]
}
export type DialogPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
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

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type updateNewPostTextActionType = {
    type: 'UPDATE-NEW_POST'
    payload: {
        newText: string
    }
}

export type ActionType = AddPostActionType | updateNewPostTextActionType

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
        },
        sidebar: [
            {id: 1, name: 'Andrey'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Sveta'},
        ]
    },
    _callSubcriber() {
        console.log('ooo')
    },

    getState() {
        return this._state
    },
    subscribe(callback) {
        this._callSubcriber = callback // это патерн observer наблюдатель
    },

    dispatch(action: ActionType) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: this._state.propfilePage.posts.length + 1,
                message: this._state.propfilePage.newPostText,
                likesCount: 0
            }
            this._state.propfilePage.posts.push(newPost)
            this._state.propfilePage.newPostText = ''
            this._callSubcriber()
        } else if (action.type === 'UPDATE-NEW_POST') {
            this._state.propfilePage.newPostText = action.payload.newText
            this._callSubcriber()
        }else {
            throw Error('Error')
        }
    }
}


