import { configureStore } from "@reduxjs/toolkit";
import ExpenseSlice from "./Slices/ExpenseSlice";
import DetailSlice from "./Slices/DetailSlice";
import BalanceSlice from "./Slices/BalanceSlice";

const Store = configureStore({
    reducer:{
        Expense: ExpenseSlice,
        Detail: DetailSlice,
        balance: BalanceSlice,
    }
})

export default Store;