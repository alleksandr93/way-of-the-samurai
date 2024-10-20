
export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type DialogPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
    newMessageBody: string

}
const initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'My message'},
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionType): DialogPageType => {
    switch (action.type) {
        case 'UPDATE_NEW_POST_TEXT':
            state.newMessageBody = action.payload.body
            return {...state,newMessageBody: action.payload.body}
        case 'SEND_MESSAGE':
            const body = state.newMessageBody
            state.newMessageBody = ''
            return {...state,messages:[...state.messages,{id: state.messages.length + 1, message: body}]};
        default:
            return state;
    }
};
export const sendMessageAC = () => {
    return {
        type: 'SEND_MESSAGE'
    } as const
}
export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        payload: {
            body
        }
    } as const
}
type SendMessageType = ReturnType<typeof sendMessageAC>
type UpdateNewMessageBody = ReturnType<typeof updateNewMessageBodyAC>
type ActionType = SendMessageType | UpdateNewMessageBody
