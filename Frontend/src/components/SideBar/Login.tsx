import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../context/hooks";
import { authUserThunkAction } from "../../context/userSlice/userThunks";

interface LoginProps {
  className: string;
}

function Login({className}: LoginProps): React.ReactNode {
  const [isNewAccount, setIsNewAccount] = useState(false);
  const dispatchRedux = useAppDispatch();
  const loadingState = useAppSelector(state => state.user.loadingStatus);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatchRedux(authUserThunkAction());
  }

  return (
    <div className={className}>
      <h1 className={`${className}__title`}>{isNewAccount ? 'Welcome to the best prices!' : 'Is good to see You Again!'}<span> <img className={`${className}__favIcon`} src="/favicon.svg"></img></span></h1>
      
      <button className={`${className}__create-user`} onClick={() => setIsNewAccount(state => !state)}>{isNewAccount ? 'Sing In' : 'Or create a new Account'}</button>

      <form className={`${className}__form`} onSubmit={(e) => handleLogin(e)}>
        { isNewAccount && <input className={`${className}__input`} id="password" type="text" placeholder="Insert your name" required={true} autoFocus={isNewAccount} /> }
        <input className={`${className}__input`} id="username" type="email" placeholder="Insert your Email" required={true} />
        
        <input className={`${className}__input`} id="password" type="password" placeholder="Insert your Password" required={true} />

        <button className={`${className}__submit-login`} type="submit">Entrar</button>
        {loadingState === 'loading' && <h1>Loading ... </h1>}
      </form>
    </div>
  );
};

export default Login;