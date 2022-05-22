import { all } from "@redux-saga/core/effects";
import { watchFetchRates } from "./features/currencyConverter/Form/exchangeRatesSaga";

export default function* rootSaga() {
    yield all([
        watchFetchRates(),
    ]);
}