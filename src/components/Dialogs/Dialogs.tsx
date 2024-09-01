import React, {useRef} from 'react';
import S from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {DialogsType, MessageType} from '../../redux/state';



type DialogsPropsType = {
    dialogs:DialogsType[]
    messages:MessageType[]

}
export const Dialogs = ({dialogs,messages,}: DialogsPropsType) => {
    const addMessage=()=>{
        if(areaRef.current){
            alert(areaRef.current.value)
        }
    }
    const areaRef=useRef<HTMLTextAreaElement>(null)
    const dialogsElements = dialogs.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)
    const messangesElements = messages.map(el => <Message message={el.message} key={el.id}/>)
    return (
        <div className={S.dialogs}>
            <div className={S.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={S.messages}>
                {messangesElements}
            </div>
            <div>
                <textarea ref={areaRef}></textarea>
                <button onClick={addMessage}>Add Message</button>
            </div>
        </div>
    );
};



