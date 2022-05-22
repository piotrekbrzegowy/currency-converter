import { delay, call, put, takeLatest } from "redux-saga/effects";
import { getRate } from "./exchangeRatesAPI";
import { fetchRates, fetchRatesError, fetchRatesSuccess } from "./exchangeRatesSlice";

function* fetchRatesHandler() {
    const exchangeRateAPIBaseUrl = "https://api.exchangerate.host/latest?base=";
    const currency = "EUR";
    const exchangeRatePath = `${exchangeRateAPIBaseUrl}${currency}`;

    try {
        yield delay(1000) //just to show loader
        const exchangeRate = yield call(getRate, exchangeRatePath);
        yield put(fetchRatesSuccess(exchangeRate));
    } catch (error) {
        yield put(fetchRatesError());
    };
}

export function* watchFetchRates() {
    yield takeLatest(fetchRates.type, fetchRatesHandler);
}