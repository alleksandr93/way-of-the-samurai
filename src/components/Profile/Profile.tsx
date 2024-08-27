import React from 'react';
import S from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './MyPosts/ProfileInfo/ProfileInfo';
import {AppPropsType, PostsType} from '../../App';

type ProfilePropsType = {
    posts: PostsType[]
    addProps: (postMessage: string) => void
}
export const Profile = ({posts, addProps}: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts} addProps={addProps}/>
        </div>
    );
};

