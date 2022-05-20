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
                const result =  rate * transaction.amount;
                transaction.result = result.toFixed(2);
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