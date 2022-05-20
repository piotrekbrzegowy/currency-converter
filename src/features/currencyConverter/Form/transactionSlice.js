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
        removeTransaction: ({ transactions }, { payload: id }) => {
            const index = transactions.findIndex(({ transactionId }) => transactionId === id);
            transactions.splice(index, 1);
        },
        updateTransaction: ({transactions}, { payload: rate }) => {
            transactions.forEach((transaction) => {
                transaction.result = rate * transaction.amount
            })
        },
        resetState: (state) => {
            state.transactions = [];
        }
    }
});

export const { addTransaction, removeTransaction, updateTransaction, resetState } = transactionSlice.actions;

export const selectTransactions = state => state.transactions.transactions;

export default transactionSlice.reducer;