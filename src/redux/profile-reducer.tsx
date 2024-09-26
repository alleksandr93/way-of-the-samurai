import {ActionType, PostsItems} from './state';

export const profileReducer = (state:PostsItems,action:ActionType) => {
   switch(action.type){
       case 'ADD_POST':
           let newPost = {
               id: state.posts.length + 1,
               message: state.newPostText,
               likesCount: 0
           }
           state.posts.push(newPost)
           state.newPostText = ''
           return state
       case 'UPDATE_NEW_POST':
        state.newPostText = action.payload.newText
           return state
       default:
           return state;
   }
};

export const addPostActionCreatorAC = () => {
    return {
        type: 'ADD_POST'
    }as const
}
export const updateNewPostTextActionCreatorAC = (newText: string) => {
    return {
        type: 'UPDATE_NEW_POST',
        payload: {
            newText
        }
    } as const
}