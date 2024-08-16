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
      const {data: userData, message} = response;
      dispatch(setUserName(userData.name));
      dispatch(setUserEmail(userData.email));
      dispatch(setMessage(message));
      dispatch(setLoadingStatus('success-login'));

      fetch(`${BASE_URL_API}/auth/users/getUserBasicData`)
        .then(res => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        })

    })
    .catch((error) => {
      if( error.response) {
        dispatch(setMessage(error.response.data.message));
      } else {
        dispatch(setMessage('Request Error!, Try Again'));
      }

      setTimeout(() => {
        dispatch(setMessage(''));
      }, 3000);
    });
}