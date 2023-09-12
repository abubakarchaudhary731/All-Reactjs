import { createSlice } from "@reduxjs/toolkit";

const ExpenseSlice = createSlice({
    name: "expenses",
    initialState: [],
    reducers: {
        addExpense(state , action) {
            state.unshift(action.payload);
        },
        addHist(state , action) {
            const currentTime = new Date();
            const newEntry = {
                ...action.payload,
            formData: {
            ...action.payload.formData,
            time: currentTime.toLocaleTimeString(),
            },
            };
        state.unshift(newEntry);
        },
        
        deleteExpense(state , action) {
            state.splice(action.payload, 1);
        },
    }
})
// console.log(ExpenseSlice.actions.Detail());


export const {addExpense ,deleteExpense , addHist } = ExpenseSlice.actions;
export default ExpenseSlice.reducer;