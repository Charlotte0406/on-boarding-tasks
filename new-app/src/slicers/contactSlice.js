import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    details: null, // a space to store currently opened contact
    collections: null, // a space to store list of contacts
    error: null, // a space so that you can store any error messages
    success: null, // a space so that you can store any success messages
    status: "idle",
};

// helper function to return error objects as payload
const errorPayload = (err, thunkAPI) => {
    if (err.response) {
        return thunkAPI.rejectWithValue(err.response.data);
    }
    return thunkAPI.rejectWithValue({
        status: "error",
        message: err.message,
    });
};

export const getContactList = createAsyncThunk(
    "contact/getContactList",
    async (thunkAPI) => {
        try {
            const res = await axios.get(
                "http://malih-auth.ap-southeast-2.elasticbeanstalk.com/campaign/getAllUploadedEmails/listId/480"
            );
            return res.data;
        } catch (err) {
            return errorPayload(err, thunkAPI);
        }
    }
);

export const addNewContact = createAsyncThunk(
    "contact/addNewContact",
    async (formValues, thunkAPI) => {
        try {
            // you can use it by calling addNewContact(formValues)
            console.log(formValues);

            // the formValues is accepted by addNewContact
            // create post request and use the response data as the payload dispatched from this action
        } catch (err) {
            return errorPayload(err, thunkAPI);
        }
    }
);

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        // can be use for other data synchronous operation for example sorting contact list
    },
    extraReducers: {
        /* REDUCERS FOR getContactList */
        [getContactList.pending]: (state) => {
            state.status = "pending";
        },
        [getContactList.fulfilled]: (state, action) => {
            state.status = "fetched";
            state.collections = action.payload; // action.payload comes from res.data returned by getContactList

            // Can be useful to be used by a snackbar prop by material ui for successful alert
            state.success = {
                severity: "success",
                message: `SUCCESS: successfully fetch contacts`,
                open: true,
            };
        },
        [getContactList.rejected]: (state, action) => {
            state.status = "error";

            // Can be useful to be used by a snackbar prop by material ui for error alert
            state.error = {
                severity: "error",
                message: `ERROR: Unable to fetch contacts`,
                open: true,
            };
        },

        /* CREATE REDUCERS FOR addNewContactList here */
        [getContactList.success]: (state, action) =>{
            state.status = action.payload;
        }

    }
});

export default contactSlice.reducer;