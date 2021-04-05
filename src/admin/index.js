import axios from 'axios';
const JWT = 'jwt';

export const Signin = (email,password) => {
    //localStorage.setItem(JWT, 'token decode JWT recived by node api');
    axios.post('http://localhost:3000/auth/getjwt', {email,password}).then(res => {
        if(res.data!=false) localStorage.setItem(JWT, res.data); window.location.reload(false);
    })
}

export const logout = () => {
    localStorage.removeItem(JWT);
}

export const isLogin = () => {
    if (localStorage.getItem(JWT)!= undefined) {
        return true;
    }
    return false;
}