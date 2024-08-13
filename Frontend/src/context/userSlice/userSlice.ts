import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LoadingType = 'loading' | 'not-requested' | 'error' | 'success-login' | 'user-created';

export interface UserStateRedux {
  token: string | null;
  loadingStatus: LoadingType;
  name: string;
  email: string;
  message?: string;
}
const initialState: UserStateRedux = {
  token: '',
  loadingStatus: 'not-requested',
  name: '',
  email: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state: UserStateRedux, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setLoadingStatus: (state: UserStateRedux, action: PayloadAction<LoadingType>) => {
      state.loadingStatus = action.payload;
    },
    setUserName: (state: UserStateRedux, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setUserEmail: (state: UserStateRedux, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setMessage: (state: UserStateRedux, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    logoutUser: () => {
      return initialState;
    }
  }
});

export const {setToken, setLoadingStatus, setUserName, setUserEmail, setMessage, logoutUser} = userSlice.actions;
export default userSlice.reducer;