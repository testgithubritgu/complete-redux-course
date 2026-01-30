import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import counterUpdate from "../features/countUpdate/updateCount";
import updateName from "../features/namechanger/change-name";


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        updateCOunt:counterUpdate,
        updateName:updateName,
    },
});