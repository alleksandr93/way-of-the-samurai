import React from 'react';
import S from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './MyPosts/ProfileInfo/ProfileInfo';


export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};

