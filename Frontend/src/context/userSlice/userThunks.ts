import { BASE_URL_API } from "../../common/constants";
import { CreateUserDTO, UserAuthDTO } from "../../common/types";
import { authUserService, creatUserService } from "../../services/users/userService";
import { AppThunk } from "../store";
import { setLoadingStatus, setMessage, setUserEmail, setUserName } from "./userSlice";

export const createUserThunkerAction = (newDataUser: CreateUserDTO): AppThunk => async (dispatch) => {
  dispatch(setLoadingStatus('loading'));

  creatUserService(newDataUser)
    .then( response => {
      const {data: createdUser, message} = response;
      dispatch(setUserName(createdUser.name));
      dispatch(setUserEmail(createdUser.email));
      dispatch(setMessage(message));
      dispatch(setLoadingStatus('success-login'));
    })
}

export const loginUserThunkerAction = (userDataToLogin: UserAuthDTO): AppThunk => async (dispatch) => {
  dispatch(setLoadingStatus('loading'));
  dispatch(setMessage('Loading ...'));

  authUserService(userDataToLogin)
    .then(response => {
      console.log(response);
      const {data: userData, message} = response;
      dispatch(setUserName(userData.name));
      dispatch(setUserEmail(userData.email));
      dispatch(setMessage(message));
      dispatch(setLoadingStatus('success-login'));

    })
    .catch((error) => {
      if( error.response) {
        dispatch(setMessage(error.response.data.message));
      } else {
        console.log(error);
        dispatch(setMessage('Request Error!, Try Again'));
      }

      setTimeout(() => {
        dispatch(setMessage(''));
      }, 3000);
    });
}

export const checkAuthenticationThunkerAction = (): AppThunk => async () => {
  fetch(`${BASE_URL_API}/auth/users/getUserProfileData`) // testing cookies for authentication
    .then(() => {
      
    });
};