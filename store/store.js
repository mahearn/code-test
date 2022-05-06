import { configureStore } from '@reduxjs/toolkit';
import companySlice from './reducers/companySlice';

export const store = configureStore({
  reducer: {
    companies: companySlice,
  },
});
