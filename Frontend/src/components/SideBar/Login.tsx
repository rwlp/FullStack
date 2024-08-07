import React from "react";

interface LoginProps {
  className: string;
}

function Login({className}: LoginProps): React.ReactNode {
  
  return (
    <div className={className}>
      <h1>Is good to see You Again!</h1>
      
      <button className={`${className}__create-user`}>Or create a new Account</button>

      <form className={`${className}__form`} onSubmit={() => console.log('Loggin handle')}>
        <label className={`${className}__label-email`} htmlFor="username">Email</label>
        <input className={`${className}__input-email`} id="username" type="email" required={true} />
        
        <label className={`${className}__label-password`} htmlFor="password">Password</label>
        <input className={`${className}__input-password`} id="password" type="password" required={true} />

        <button className={`${className}__submit-login`} type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;