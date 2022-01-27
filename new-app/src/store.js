import { createStore} from "redux";
// import { reducer as formReducer } from "redux-form";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feature/addReducer";




export const store =  configureStore({
    reducer: {
        user: userReducer,
    },
});

// export default createStore(rootReducer);