import React from 'react';
import S from './Friends.module.css'
import {SideBarType} from '../../App';
type FriendsPropsType = {
    sidebar:SideBarType[]
}
export const Friends = ({sidebar}:FriendsPropsType) => {
    const mapSidebar= sidebar.map(el=>{
        return <div key={el.id} className={S.container}>
            <div className={S.avatar}></div>
            <div>{el.name}</div>
        </div>
    })
    return (
        <div className={S.main}>
            <h2 className={S.title}>Friends</h2>
            <div className={S.block}>
                {mapSidebar}
            </div>

        </div>
    );
};

