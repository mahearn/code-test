import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  company: {},
  status: 'idle',
  error: '',
};

export const getCompanyInfo = createAsyncThunk(
  'companies/getCompanyInfo',
  async (dispatch, getState) => {
    return await axios.get('sample-data.json');
  }
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
