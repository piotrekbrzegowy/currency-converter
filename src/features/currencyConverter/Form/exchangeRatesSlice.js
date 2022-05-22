import { createSlice } from "@reduxjs/toolkit";

const exchangeRatesSlice = createSlice({
    name: "rates",
    initialState: {
        status: "initial",
        ratesData: [],
    },
    reducers: {
        fetchRates: (state) => {
            state.status = "loading";
        },
        fetchRatesSuccess: (state, { payload: data }) => {
            state.status = "success";
            state.ratesData = data.rates.PLN;
        },
        fetchRatesError: (state) => {
            state.status = "error";
        },
        resetState: (state) => {
            state.status = "initial";
            state.ratesData = [];
        }
    }
})

export const { fetchRates, fetchRatesSuccess, fetchRatesError, resetState } = exchangeRatesSlice.actions;

export const selectRatesData = (state) => state.rates.ratesData;
export const selectLoading = (state) => state.rates.status === "loading";
export const selectError = (state) => state.rates.status === "error";

export default exchangeRatesSlice.reducer;