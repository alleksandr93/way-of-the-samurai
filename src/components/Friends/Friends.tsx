import React from 'react';
import S from './Friends.module.css'
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/redux-store';
import {SidebarType} from '../../redux/sidebar-reducer';


export const Friends = () => {
    const sidebar = useSelector<RootState,SidebarType[]>(state => state.sidebarPage)
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

