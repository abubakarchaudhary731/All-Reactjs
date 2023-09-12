import { createSlice } from "@reduxjs/toolkit";

const DetailSlice = createSlice({
    name: "detail",
    initialState: {},
    reducers: {
        setDetail(state , action) {
            return action.payload;
        }
    }
})

export const {setDetail} = DetailSlice.actions;
export default DetailSlice.reducer;