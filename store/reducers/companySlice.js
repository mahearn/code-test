import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//having problems getting the json file with xhr call, so just importing it here for practical purposes dev only
import companyData from '../../sample-data.json';

const initialState = {
  company: companyData,
  status: 'idle',
  error: '',
};

export const getCompanyInfo = createAsyncThunk(
  'companies/getCompanyInfo',
  companyData
);

export const companySlice = createSlice({
  name: 'companies',
  initialState,
  extraReducers: {
    [getCompanyInfo.pending]: (state, action) => {
      state.status = 'loading';
      console.log(state);
    },
    [getCompanyInfo.fulfilled]: (state, action) => {
      state.status = 'success';
      state.company = action.payload;
      console.log(state);
    },
    [getCompanyInfo.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = 'Failed to get company information';
      console.log(state);
    },
  },
});

export default companySlice.reducer;
