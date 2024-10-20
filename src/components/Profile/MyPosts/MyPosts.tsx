import React, {useRef} from 'react';
import S from './MyPosts.module.css';
import {Post} from './Post/Post';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/redux-store';
import {addPostAC, PostsType, updateNewPostTextAC} from '../../../redux/profile-reducer';


export const MyPosts = () => {
    const posts = useSelector<RootState,PostsType[]>(state => state.profilePage.posts)
    const newPostText = useSelector<RootState,string>(state => state.profilePage.newPostText)
    const dispatch = useDispatch();
    const postsElements = posts.map(el => <Post key={el.id} message={el.message} likesCount={el.likesCount}/>)
    const newPostElement = useRef<HTMLTextAreaElement>(null)
    const addPost = () => {

        if (newPostElement.current) {
            dispatch(addPostAC())
        }
    }
    const onPostChange = () => {
        if (newPostElement.current) {
            dispatch(updateNewPostTextAC(newPostElement.current.value));
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

