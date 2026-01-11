import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import counterUpdate from "../features/countUpdate/updateCount";


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        updateCOunt:counterUpdate,
    },
});