import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "@redux-saga/core";
import exchangeRatesSlice from '../features/currencyConverter/Form/exchangeRatesSlice';
import transactionSlice from '../features/currencyConverter/Form/transactionSlice';
import rootSaga from '../rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    transactions: transactionSlice,
    rates: exchangeRatesSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);