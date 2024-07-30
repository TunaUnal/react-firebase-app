import { configureStore } from "@reduxjs/toolkit";
import user from "./user";
import todos from "./todos";
export default configureStore({
    reducer: {
        user,
        todos
    }
    
})