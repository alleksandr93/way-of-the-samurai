import React, {ChangeEvent} from 'react';
import S from './Dialogs.module.css'
import {DialogItem} from './DialogItem/DialogsItem';
import {Message} from './Message/Message';
import {StoreType} from '../../redux/state';
import {sendMessageActionCreatorAC, updateNewMessageBodyCreatorAC} from '../../redux/dialogs-reducer';


type DialogsPropsType = {
    stor: StoreType
}
export const Dialogs = ({stor}: DialogsPropsType) => {
    const state = stor.getState()

    const onSendMessageClick = () => {
        stor.dispatch(sendMessageActionCreatorAC())
    }
    const onNewMessangeChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        stor.dispatch(updateNewMessageBodyCreatorAC(e.currentTarget.value))
    }
    const dialogsElements = state.dialogPage.dialogs.map(el => <DialogItem name={el.name} id={el.id} key={el.id}/>)
    const messangesElements = state.dialogPage.messages.map(el => <Message message={el.message} key={el.id}/>)
    const newMessangeBody = state.dialogPage.newMessageBody
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



