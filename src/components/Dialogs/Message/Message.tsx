import S from '../Dialogs.module.css';
import React from 'react';

type MessagePropsType = {
    message: string
}
export const Message = ({message}: MessagePropsType) => {
    return <div className={S.message}>{message}</div>
}


