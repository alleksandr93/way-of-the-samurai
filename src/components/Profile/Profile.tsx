import React from 'react';
import S from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';


export const Profile = () => {
    return (
        <div>
            <div className={S.imgContent}>
                <img src="https://static01.nyt.com/images/2012/05/06/nyregion/06BIG_SPAN/BIG-superJumbo.jpg"
                     alt=""/>
            </div>
            <div>
                ava + discription
            </div>
            <MyPosts/>
        </div>
    );
};

