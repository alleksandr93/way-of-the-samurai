import React from 'react';
import S from './NavBar.module.css'
export const NavBar = () => {
    return (
        <nav className={S.nav}>
            <div className={`${S.item} ${S.active}`}><a href={'/profile'}>Profile</a></div>
            <div className={S.item}><a href={'/dialogs'}>Messages</a></div>
            <div className={S.item}><a href={'/news'}>News</a></div>
            <div className={S.item}><a href={'/music'}>Music</a></div>
            <div className={S.item}><a href={'/settings'}>Settings</a></div>
        </nav>
    );
};

