import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
    name: "transactions",
    initialState: {
        transactions: [],
    },
    reducers: {
        addTransaction: ({ transactions }, { payload: transaction }) => {
            transactions.push(transaction);
        },
        resetState: (state) => {
            state.transactions = [];
        }
    }
});

export const { addTransaction, resetState } = transactionSlice.actions;

export const selectTransactions = state => state.transactions;

export default transactionSlice.reducer;