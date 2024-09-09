import React, {useRef} from 'react';
import S from './MyPosts.module.css';

import {Post} from './Post/Post';
import {ActionType, PostsItems, PostsType} from '../../../redux/state';


type MyPostsPropsType = {
    posts: PostsType[];
    newPostText:string
    dispatch: (action: ActionType) => void
}
export const MyPosts = ({posts,newPostText, dispatch}: MyPostsPropsType) => {
    const postsElements = posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)
    const newPostElement = useRef<HTMLTextAreaElement>(null)
    const addPost = () => {
       debugger
        if (newPostElement.current) {
            dispatch({type:'ADD-POST'})

        }
    }
    const onPostChange = () => {
        if(newPostElement.current) {
            dispatch({type:'UPDATE-NEW_POST',payload:{newText:newPostElement.current.value}});
        }

    }
    return <div className={S.postsBlock}>
        <h3>My Posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement} value={newPostText} onChange={onPostChange}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>

        </div>
        <div className={S.posts}>
            {postsElements}
        </div>
    </div>

};

