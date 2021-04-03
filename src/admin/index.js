import axios from 'axios';
const TOKEN_KEY = 'jwt';

export const Signin = () => {
    localStorage.setItem(TOKEN_KEY, 'token decode JWT recived by node api');
    // axios.post('').then(res => {
    //     const persons = res.data;
    //     this.setState({ persons });
    // })
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}