import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAudios } from '@/api';
import type { RootState } from '@/src/redux/store/store';
export type TGetAudios = {
  audios: any;
  pending: boolean;
  error: boolean;
};
const initialState = {
  audios: null,
  pending: false,
  error: false,
};

export const getAudiosProvider = createAsyncThunk(
  'audios/getAudios',
  async () => {
    const response = await getAudios();

    return response;
  }
);

const getAudiosSlice = createSlice({
  name: 'audios',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAudiosProvider.pending, (state) => {
        state.pending = true;
      })
      .addCase(getAudiosProvider.fulfilled, (state, { payload }) => {
        // When the API call is successful and we get some data,the data becomes the `fulfilled` action payload
        state.pending = false;
        state.audios = payload;
      })
      .addCase(getAudiosProvider.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const selectAudios = (state: RootState) => state.audiosAll;
export default getAudiosSlice.reducer;
