import { configureStore } from '@reduxjs/toolkit';
import transactionSlice from '../features/currencyConverter/Form/transactionSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionSlice,
  },
});
