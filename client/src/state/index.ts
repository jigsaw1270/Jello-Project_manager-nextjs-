import { createSlice , PayloadAction} from "@reduxjs/toolkit";

export interface initialStateTypes {
    isSIdebarCollapsed : boolean; 
    isDarkMode : boolean;
}
const initialState : initialStateTypes = {
    isSIdebarCollapsed: false,
    isDarkMode : false,
} ;


 export const globalslice =  createSlice ({
    name : " global",
    initialState,
    reducers : {

        // the  function that  changes state
        setIsSidebarCollapsed : (state , action : PayloadAction<boolean>) =>
        {
            state.isSIdebarCollapsed = action.payload;
        },
        setIsDarkMode: (state , action : PayloadAction<boolean>) =>
            {
                state.isDarkMode = action.payload;
            },
    },
 });

 export const { setIsSidebarCollapsed , setIsDarkMode} = globalslice.actions;
 export default  globalslice.reducer;