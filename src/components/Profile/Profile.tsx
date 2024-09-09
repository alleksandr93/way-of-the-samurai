import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './MyPosts/ProfileInfo/ProfileInfo';
import {ActionType, PostsItems} from '../../redux/state';

type ProfilePropsType = {
    profilePage:PostsItems
    dispatch: (action: ActionType) => void

}
export const Profile = ({profilePage, dispatch}: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={profilePage.posts} newPostText={profilePage.newPostText} dispatch={dispatch}/>
        </div>
    );
};

