import { reducer as formReducer } from "redux-form";
import contactReducer from "./slicers/contactSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        contact: contactReducer,
        form: formReducer,
    },
});

export default store;