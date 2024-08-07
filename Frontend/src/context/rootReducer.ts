import { combineReducers } from "@reduxjs/toolkit";
import { pageSettingsReducer } from "./pageSettingsSlice";
import { userReducer } from "./userSlice";


const rootReducer = combineReducers({
  pageSettings: pageSettingsReducer,
  user: userReducer,
});

export default rootReducer;