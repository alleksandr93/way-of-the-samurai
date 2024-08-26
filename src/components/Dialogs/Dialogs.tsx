import React from 'react';
import S from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';


type DialogsPropsType = {}
export const Dialogs = ({}: DialogsPropsType) => {
    return (
        <div className={S.dialogs}>
            <div className={S.dialogsItems}>
               <DialogItem name={'Dimych'} id={'1'}/>
               <DialogItem name={'Andrey'} id={'2'}/>
               <DialogItem name={'Sveta'} id={'3'}/>
               <DialogItem name={'Sasha'} id={'4'}/>
               <DialogItem name={'Viktor'} id={'5'}/>
               <DialogItem name={'Valera'} id={'6'}/>
            </div>
            <div className={S.messages}>
                <Message message={'Hi'}/>
                <Message message={'How is your it-kamasutra?'}/>
                <Message message={'Yo'}/>
            </div>
        </div>
    );
};

type DialogItemPropsType = {
    name: string,
    id:string
}
const DialogItem = ({name,id}:DialogItemPropsType) => {
    const path = '/dialogs/'+id
    return <div className={`${S.dialog} ${S.active}`}>
        <NavLink  to={path}>{name}</NavLink>
    </div>
}

type MessagePropsType = {
    message: string
}
const Message=({message}:MessagePropsType)=> {
    return <div className={S.message}>{message}</div>
}
