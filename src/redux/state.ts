let rerenderEntireTree = (state: StateType) => {
    console.log('state changed')
}


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

export const state: StateType = {
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
}

export const addPost = () => {
    let newPost = {id: state.propfilePage.posts.length + 1, message: state.propfilePage.newPostText, likesCount: 0}
    state.propfilePage.posts.push(newPost)
    state.propfilePage.newPostText = ''
    rerenderEntireTree(state)
}
export const updateNewPostText = (newText: string) => {
    state.propfilePage.newPostText = newText
    rerenderEntireTree(state)
}
export const subscribe = (observer: (state: StateType) => void) => {
    rerenderEntireTree=observer // это патерн observer наблюдатель
}