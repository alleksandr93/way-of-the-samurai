export const state = {
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
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'Hi, my name is John', likesCount: 13},
        {id: 3, message: 'it\'s my first post', likesCount: 5},
    ],
    sidebar:[
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Sveta'},
    ]
}
export const addPost=(postMessage:string)=>{
    let newPost={id:state.posts.length+1,message: postMessage,likesCount:0}
    state.posts.push(newPost)
}