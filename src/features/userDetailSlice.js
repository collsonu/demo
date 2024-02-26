import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const createUser = createAsyncThunk(
    "createUser",
    async (data, { rejectWithValue }) => {
        const response = await axios({
            url: "/api/crud",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: data
        })

        try {
            const result = await response.json();
            return result
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export const userDetail = createSlice({
    name: 'userDetail',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
                console.error(action.payload.message);
            });
    },
});


export default userDetail.reducer;