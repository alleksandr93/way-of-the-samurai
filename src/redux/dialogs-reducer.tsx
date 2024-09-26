import {ActionType, DialogPageType} from './state';

export const dialogsReducer = (state: DialogPageType, action: ActionType) => {
    switch (action.type) {
        case 'UPDATE_NEW_POST_TEXT':
            state.newMessageBody = action.payload.body
            return state
        case 'SEND_MESSAGE':
            const body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: state.messages.length + 1, message: body})
            return state
        default:
            return state;
    }
};
export const sendMessageActionCreatorAC = () => {
    return {
        type: 'SEND_MESSAGE'
    } as const
}
export const updateNewMessageBodyCreatorAC = (body: string) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        payload: {
            body
        }
    } as const
}
