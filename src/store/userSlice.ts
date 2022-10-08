import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface IuserState {
  isLogged: boolean;
  token?: string;
}

const initialState: IuserState = {
  isLogged: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.isLogged = true;
      state.token = action.payload;
    },
  },
});

export const { setToken } = userSlice.actions;

export const selectToken = (state: RootState): IuserState['token'] => state.user.token;

export default userSlice.reducer;
