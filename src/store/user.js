import { createSlice } from "@reduxjs/toolkit"

export const usertSlice = createSlice({
    name: "user",
    initialState: {
        user:  JSON.parse(localStorage.getItem('user')) ?? false
    },
    reducers: {

        login: (state, actions) => {
            localStorage.setItem('user', JSON.stringify(actions.payload))
            state.user = actions.payload;
        },
        logout: state => {
            localStorage.removeItem('user')
            state.user = false
        }
    }
});


export const { login, logout } = usertSlice.actions;
export default usertSlice.reducer;