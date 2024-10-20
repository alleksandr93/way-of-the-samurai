import React from 'react';
import S from './NavBar.module.css'
import {NavLink} from 'react-router-dom';
import {Friends} from '../Friends/Friends';

export const NavBar = () => {
    return (<div>
            <nav className={S.nav}>
                <div className={`${S.item}`}><NavLink activeClassName={S.activeLink} to={'/profile'}>Profile</NavLink>
                </div>
                <div className={S.item}><NavLink activeClassName={S.activeLink} to={'/dialogs'}>Messages</NavLink></div>
                <div className={S.item}><NavLink activeClassName={S.activeLink} to={'/news'}>News</NavLink></div>
                <div className={S.item}><NavLink activeClassName={S.activeLink} to={'/music'}>Music</NavLink></div>
                <div className={S.item}><NavLink activeClassName={S.activeLink} to={'/settings'}>Settings</NavLink>
                </div>
                <Friends />
            </nav>

        </div>
    );
};

