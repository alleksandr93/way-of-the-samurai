

export const stor:any = {
    _state: {
        sidebar: [
            {id: 1, name: 'Andrey'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Sveta'},
        ]
    },
    _callSubcriber() {
        // console.log('s')
    },
    getState() {
        // return this._state
    },
    subscribe() {
        // this._callSubcriber = callback // это патерн observer наблюдатель
    },
    dispatch(action:any) {
        // this._state.propfilePage = profileReducer(this._state.propfilePage, action)
        // this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        // this._callSubcriber()

    }
}





