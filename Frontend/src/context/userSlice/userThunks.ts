import { CreateUserDTO, UserAuthDTO } from "../../common/types";
import { authUserService, checkAuthCookieService, creatUserService, logoutUserService } from "../../services/users/userService";
import { toggleSideMenu } from "../pageSettingsSlice";
import { AppThunk } from "../store";
import { logoutUser, setLoadingStatus, setMessage, setUserProfileData } from "./userSlice";

export const createUserThunkerAction = (newDataUser: CreateUserDTO): AppThunk => async (dispatch) => {
  dispatch(setLoadingStatus('loading'));
  dispatch(setMessage('Loading ...'));

  creatUserService(newDataUser)
    .then( response => {
      const {data: createdUser, message} = response;
      dispatch(setUserProfileData({userData: createdUser, serverMsg: message}))
      dispatch(setLoadingStatus('success-login'));
    })
    .catch(error => {
      if( error.response) {
        dispatch(logoutUser());
        dispatch(setMessage(error.response.data.message));
      } else {
        dispatch(setMessage('Request Error!, Try Again'));
      }

      setTimeout(() => {
        dispatch(setMessage(''));
      }, 3000);
    });
}

export const loginUserThunkerAction = (userDataToLogin: UserAuthDTO): AppThunk => async (dispatch) => {
  dispatch(setLoadingStatus('loading'));
  dispatch(setMessage('Loading ...'));

  authUserService(userDataToLogin)
    .then(response => {
      const {data: userData, message} = response;
      dispatch(setUserProfileData({userData: userData, serverMsg: message}))
      dispatch(setLoadingStatus('success-login'));

    })
    .catch((error) => {
      if( error.response) {
        dispatch(logoutUser());
        dispatch(setMessage(error.response.data.message));
      } else {
        dispatch(setMessage('Request Error!, Try Again'));
      }

      setTimeout(() => {
        dispatch(setMessage(''));
      }, 3000);
    });
}

export const checkAuthThunkerAction = (): AppThunk => async (dispatch) => {
  checkAuthCookieService()
    .then(response => {
      const {data: createdUser, message} = response;
      dispatch(setUserProfileData({userData: createdUser, serverMsg: message}))
      dispatch(setLoadingStatus('success-login'));
    })
    .catch(() => {
      dispatch(toggleSideMenu());
    });
}

export const logoutUserThunkerAction = (): AppThunk => async (dispatch) => {
  logoutUserService()
    .then(() => {
      dispatch(logoutUser());
    })
}
