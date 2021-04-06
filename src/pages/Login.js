import React, { useState } from 'react';
import { Signin } from '../admin';
 
function Login(props) {
  const email = useFormInput('');
  const password = useFormInput('');
 
  const handleSignin = () => {
    Signin(email.value,password.value);
  }
 
  return (
    <div id="login" className="wrap-log">
      <div className="fx-col">
        <div className="fx-col chmp">
          <label>Email</label>
          <input type="email" {...email} placeholder="Email" />
        </div>
        <div className="fx-col chmp">
          <label>Password</label>
          <input type="password" {...password} placeholder="Password" />
        </div>
      </div>
      <input type="button" value='Sign in' onClick={handleSignin}  /><br />
    </div>
  );
}
//CREATE 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChange = e => {setValue(e.target.value);}
  return {value,onChange: handleChange}
}
 
export default Login;