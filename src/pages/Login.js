import React, { useState } from 'react';
import { Signin } from '../admin';
 
function Login(props) {
  const email = useFormInput('');
  const password = useFormInput('');
  const [loading, setLoading] = useState(false);
 
  const handleSignin = () => {
    Signin();
    props.history.push('/dashboard');
  }
 
  return (
    <div>
      Login<br /><br />
      <div>
        Email<br />
        <input type="email" {...email} placeholder="Email" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} placeholder="Password" />
      </div>
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleSignin} disabled={loading} /><br />
    </div>
  );
}
//CREATE 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;