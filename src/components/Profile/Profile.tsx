import React from 'react';
import S from './Profile.module.css';


export const Profile = () => {
    return (
        <div className={S.content}>
            <div className={S.imgContent}>
                <img src="https://static01.nyt.com/images/2012/05/06/nyregion/06BIG_SPAN/BIG-superJumbo.jpg"
                     alt=""/>
            </div>
            <div>
                ava + discription
            </div>
            <div>
                My posts
                <div>
                    new post
                </div>
            </div>
            <div>
                <div>
                    post1
                </div>
                <div>
                    post2
                </div>
            </div>
        </div>
    );
};

