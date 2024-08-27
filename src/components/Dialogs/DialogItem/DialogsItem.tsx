import {NavLink} from 'react-router-dom';
import S from '../Dialogs.module.css';
import React from 'react';

type DialogItemPropsType = {
    name: string,
    id: number
}
export const DialogItem = ({name, id}: DialogItemPropsType) => {
    const path = '/dialogs/' + id
    return <div >
        <NavLink className={`${S.dialog}`} activeClassName={S.active}  to={path}>{name}</NavLink>
    </div>
}
