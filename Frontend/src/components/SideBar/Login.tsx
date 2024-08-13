import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../context/hooks";
import { createUserThunkerAction, loginUserThunkerAction } from "../../context/userSlice/userThunks";

interface LoginProps {
  className: string;
}

function Login({className}: LoginProps): React.ReactNode {
  const [isNewAccount, setIsNewAccount] = useState(false);
  const dispatchRedux = useAppDispatch();
  const loadingState = useAppSelector(state => state.user.loadingStatus);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (isNewAccount) {
      dispatchRedux(createUserThunkerAction({name: name, email: email, password: password}));
      return;
    }

    dispatchRedux(loginUserThunkerAction({email: email, password: password}));

  }

  return (
    <div className={className}>
      <h1 className={`${className}__title`}>{isNewAccount ? 'Welcome to the best prices!' : 'Is good to see You Again!'}<span> <img className={`${className}__favIcon`} src="/favicon.svg"></img></span></h1>
      
      <button className={`${className}__create-user`} onClick={() => setIsNewAccount(state => !state)}>{isNewAccount ? 'Sing In' : 'Or create a new Account'}</button>

      <form className={`${className}__form`} onSubmit={(e) => handleLogin(e)}>
        { isNewAccount && <input className={`${className}__input`} id="name" name="name" type="text" placeholder="Insert your name" required={true} autoFocus={isNewAccount} /> }
        <input className={`${className}__input`} id="email" type="email" name="email" placeholder="Insert your Email" required={true} />
        
        <input className={`${className}__input`} id="password" type="password" name="password"  placeholder="Insert your Password" required={true} />

        <button className={`${className}__submit-login`} type="submit">Entrar</button>
        {loadingState === 'loading' && <h1>Loading ... </h1>}
      </form>
    </div>
  );
};

export default Login;