import { createSlice } from "@reduxjs/toolkit";

const BalanceSlice = createSlice({
    name: "balance",
    initialState: [0],
    reducers: {
        balance(state , action) {
            if  (!isNaN(action.payload)) {
                const num = parseInt(action.payload);
                // console.log(+state + + num);
                return  (+state + + num);
            }
        },

        addAgain(state , action) {
            if  (!isNaN(action.payload)) {
                const num = parseInt(action.payload);
                // console.log(+state + + num);
                return  (+state + + num);
            }
           
        },
    }})

export const { balance , addAgain } = BalanceSlice.actions;
export default BalanceSlice.reducer;