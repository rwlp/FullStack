import React from 'react';
import StyledLogin from './StyledLogin.ts';


interface LoginProps {
  // Define here props of this Component
}

function Login({}: LoginProps): React.ReactNode {
  
  return (
    <StyledLogin className='login'>
      <h1 className='login__title'>Sign in to quickly complete your purchase.</h1>
      <form className='login__form'>
        <input className='login__email' type='email' required={true} />
        <input className='login_password' type='password' required={true} />
      </form>

      <a href='#' className='login__restore-passwd'></a>
      <span>Don't have an account?</span> <a href="#">Create Now!</a>
    </StyledLogin>
  );
}

export default Login;
