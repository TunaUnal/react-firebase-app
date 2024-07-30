import { createSlice } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: []
    },

    
    reducers: {

        setTodos: (state, actions) => {
            state.todos = actions.payload;
        },
        deleteTodos: state => {
            state.todos = []
        }
    }
});


export const { setTodos, deleteTodos } = todoSlice.actions;
export default todoSlice.reducer;