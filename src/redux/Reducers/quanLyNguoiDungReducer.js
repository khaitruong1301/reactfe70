import { USER_LOGIN } from "../../util/setting";


let usLogin;
//Kiểm tra xem localstorage có giá trị hay không để load giá trị mặc định cho userLogin
if(localStorage.getItem(USER_LOGIN)) {
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
    userLogin : usLogin
}



export const quanLyNguoiDungReducer = (state=stateDefault,action) => {
    
    switch(action.type) {

        default : return state;
    }
}