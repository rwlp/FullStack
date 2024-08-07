import { createSlice } from "@reduxjs/toolkit";


export interface UserStateRedux {
  token: string | null;
}
const initialState: UserStateRedux = {
  token: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  }
});

export const {} = userSlice.actions;
export default userSlice.reducer;