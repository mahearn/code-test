import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  company: {},
  status: 'idle',
  error: '',
};

export const getCompanyInfo = createAsyncThunk(
  'companies/getCompanyInfo',
  async (dispatch, getState) => {
    return await fetch('sample-data.json').then((res) => res.json());
  }
);

export const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: {
    [getCompanyInfo.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getCompanyInfo.fulfilled]: (state, action) => {
      state.status = 'success';
      state.company = action.payload;
    },
    [getCompanyInfo.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = 'Failed to get company information';
    },
  },
});

export default companySlice.reducer;
