import { createBrowserHistory } from 'history'
import axios from 'axios'
//Cấu hình các hằng số của hệ thống 

//domain backend
export const DOMAIN = 'https://movienew.cybersoft.edu.vn';
export const TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyNiIsIkhldEhhblN0cmluZyI6IjEzLzEwLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2NTYxOTIwMDAwMCIsIm5iZiI6MTYzMzE5NDAwMCwiZXhwIjoxNjY1NzY2ODAwfQ.TMg-RWGpT6_kH-eG3Pbw5j_8yWUP84LrkWZAFj-Drfk';

export const USER_LOGIN = 'userLogin';
export const ACCESSTOKEN = 'accessToken';
//Giúp chuyển hướng trang của route
export const history = createBrowserHistory();

//config axios 
export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000,
});

http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        ['TokenCybersoft']: TOKEN_CYBERSOFT,
        ['Authorization']: 'Bearer ' + localStorage.getItem(ACCESSTOKEN)
    }
    return config;
}, (errors) => {
    return Promise.reject(errors)
})