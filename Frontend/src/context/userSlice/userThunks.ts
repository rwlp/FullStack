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
      dispatch(setLoadingStatus('success-login'))
    })
}

export const loginUserThunkerAction = (userDataToLogin: UserAuthDTO): AppThunk => async (dispatch) => {
  dispatch(setLoadingStatus('loading'));

  authUserService(userDataToLogin)
    .then(response => {
      const {data: userData, message} = response;
      console.log(userData);
      dispatch(setUserName(userData.name));
      dispatch(setUserEmail(userData.email));
      dispatch(setMessage(message));
      dispatch(setLoadingStatus('success-login'))
    });
}