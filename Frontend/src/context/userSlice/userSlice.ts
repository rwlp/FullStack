import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDataDTO } from "../../common/types";

type LoadingType = 'loading' | 'not-requested' | 'error' | 'success-login' | 'user-created';

export interface UserStateRedux {
  loadingStatus: LoadingType;
  levelProfile: string;
  name: string;
  email: string;
  message?: string;
}
const initialState: UserStateRedux = {
  loadingStatus: 'not-requested',
  levelProfile: '',
  name: '',
  email: '',
  message: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
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
    setUserProfileData: (state: UserStateRedux, action: PayloadAction<{userData: UserDataDTO, serverMsg: string}>) => {
      state.email = action.payload.userData.email;
      state.name = action.payload.userData.name;
      state.levelProfile = action.payload.userData.levelProfile;

      state.message = action.payload.serverMsg;

    },
    logoutUser: () => {
      
      return initialState;
    }
  }
});

export const {setLoadingStatus, setMessage, setUserProfileData, logoutUser} = userSlice.actions;
export default userSlice.reducer;