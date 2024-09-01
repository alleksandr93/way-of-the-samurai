import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './MyPosts/ProfileInfo/ProfileInfo';
import {PostsItems} from '../../redux/state';

type ProfilePropsType = {
    profilePage:PostsItems
    addProps: () => void
    updateNewPostText:(newText: string)=>void
}
export const Profile = ({profilePage, addProps,updateNewPostText}: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={profilePage.posts} newPostText={profilePage.newPostText} addProps={addProps} updateNewPostText={updateNewPostText}/>
        </div>
    );
};

