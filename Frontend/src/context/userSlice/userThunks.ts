import { AppThunk } from "../store";
import { setLoadingStatus, setToken } from "./userSlice";

export const authUserThunkAction = (): AppThunk => async (dispatch) => {
  dispatch(setLoadingStatus('loading'));

  setTimeout(() => {
    dispatch(setLoadingStatus('success-login'));
    dispatch(setToken('fjdla'));
  }, 3000)
}