import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface UserStateRedux {
  token: string | null;
  loadingStatus: 'loading' | 'not-requested' | 'error' | 'success-login';
  name: string;
  email: string;
  levelNumber: number;
  levelName: string;
  messageError?: string;
}
const initialState: UserStateRedux = {
  token: '',
  loadingStatus: 'not-requested',
  name: '',
  email: '',
  levelNumber: 0,
  levelName: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state: UserStateRedux, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setLoadingStatus: (state: UserStateRedux, action: PayloadAction<'loading' | 'not-requested' | 'error' | 'success-login'>) => {
      state.loadingStatus = action.payload;
    }
  }
});

export const {setToken, setLoadingStatus} = userSlice.actions;
export default userSlice.reducer;