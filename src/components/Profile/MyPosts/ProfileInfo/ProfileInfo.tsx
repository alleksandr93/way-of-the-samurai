import React from 'react';
import S from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div className={S.imgContent}>
                <img src="https://static01.nyt.com/images/2012/05/06/nyregion/06BIG_SPAN/BIG-superJumbo.jpg"
                     alt=""/>
            </div>
            <div className={S.dicriptionBlock}>
                ava + discription
            </div>
        </div>
    );
};

