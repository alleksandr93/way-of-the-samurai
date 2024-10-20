
export type SidebarType = {
    id: number
    name: string
}
const initialState: SidebarType[] = [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Sveta'},
]
export const sidebarReducer = (state:SidebarType[]=initialState,action:ActionCreator) => {
    switch(action.type){
        default:
            return state;
    }
};
type ActionCreator = any
