
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type PostsItems = {
    posts: PostsType[]
    newPostText: string
}


const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'Hi, my name is John', likesCount: 13},
        {id: 3, message: 'it\'s my first post', likesCount: 5},
    ],
    newPostText: 'it-kamasutra'
}
export const profileReducer = (state:PostsItems=initialState,action:ActionType):PostsItems => {
   switch(action.type){
       case 'ADD_POST':
           let newPost = {
               id: state.posts.length + 1,
               message: state.newPostText,
               likesCount: 0
           }
           state.newPostText = ''
           return {...state,posts:[...state.posts,newPost]};
       case 'UPDATE_NEW_POST':
        state.newPostText = action.payload.newText
           return {...state,newPostText: action.payload.newText}
       default:
           return state;
   }
};

export const addPostAC = () => {
    return {
        type: 'ADD_POST'
    }as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE_NEW_POST',
        payload: {
            newText
        }
    } as const
}
type AddPostType = ReturnType<typeof addPostAC>
type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextAC>
type ActionType = AddPostType |UpdateNewPostTextType