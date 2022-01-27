import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState:{value:
        {name:"",
        email: "",
        address:"",
        phoneNumber:"",
        jobTitle:"",
        id: 480}},
        reducers:{
            addUser: (state, action) => {
                state.value = [...state, action.payload];
            },
        },
});

export const { addUser } = userSlice.action;
export default userSlice.reducer;
