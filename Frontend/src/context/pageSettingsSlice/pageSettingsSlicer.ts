import { createSlice } from "@reduxjs/toolkit";

export interface PageSettingsStateRedux {
  sideMenu: boolean;
}; 

const initialState: PageSettingsStateRedux = {
  sideMenu: false,
}

const pageSetSlice = createSlice({
  name: 'pageSettings',
  initialState,
  reducers: {
    toggleSideMenu: (state: PageSettingsStateRedux) => {
      state.sideMenu = !state.sideMenu;
    }
  }
});

export const { toggleSideMenu } = pageSetSlice.actions;
export default pageSetSlice.reducer;