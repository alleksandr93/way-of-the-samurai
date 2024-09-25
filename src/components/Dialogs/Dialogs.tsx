import React, {ChangeEvent, useRef} from 'react';
import S from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {
    ActionType,
    updateNewMessageBodyCreator,
    DialogsType,
    MessageType,
    sendMessageActionCreator, StoreType
} from '../../redux/state';


type DialogsPropsType = {
    stor: StoreType

}
export const Dialogs = ({stor}: DialogsPropsType) => {
    const {dispatch} = stor
    const state = stor.getState().dialogPage
    const onSendMessageClick = () => {
        dispatch(sendMessageActionCreator())
    }
    const onNewMessangeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageBodyCreator(e.currentTarget.value))
    }
    const dialogsElements = state.dialogs.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)
    const messangesElements = state.messages.map(el => <Message message={el.message} key={el.id}/>)
    const newMessangeBody = state.newMessageBody
    return (
        <div className={S.dialogs}>
            <div className={S.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={S.messages}>
                <div>{messangesElements}</div>
                <div>
                    <div><textarea placeholder={'Enter your message'} value={newMessangeBody}
                                   onChange={onNewMessangeChange}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Add Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};



