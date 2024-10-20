import React, {ChangeEvent} from 'react';
import S from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {useDispatch, useSelector} from 'react-redux';
import {
    DialogPageType,
    DialogsType,
    MessageType,
    sendMessageAC,
    updateNewMessageBodyAC
} from '../../redux/dialogs-reducer';
import {RootState} from '../../redux/redux-store';



export const Dialogs = () => {
    const dispatch = useDispatch();
    const dialogPage = useSelector<RootState,DialogPageType>(state => state.dialogePage);


    const onSendMessageClick = () => {
       dispatch(sendMessageAC())
    }
    const onNewMessangeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageBodyAC(e.currentTarget.value))
    }
    const dialogsElements = dialogPage.dialogs.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)
    const messangesElements = dialogPage.messages.map(el => <Message message={el.message} key={el.id}/>)
    const newMessangeBody = dialogPage.newMessageBody
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



