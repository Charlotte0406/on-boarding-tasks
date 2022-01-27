import { createStore} from "redux";
// import { reducer as formReducer } from "redux-form";
import { userSlice } from "./feature/addReducer";
import { configureStore } from "@reduxjs/toolkit";


// export const store = createStore(
//     reducers,
//     {addUser: userReducers,}
// );

export default configureStore({
    reducer: {
        
    },
});

// export default createStore(rootReducer);