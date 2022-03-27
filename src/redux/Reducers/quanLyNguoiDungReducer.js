import { USER_LOGIN } from "../../util/setting";


let usLogin;
//Kiểm tra xem localstorage có giá trị hay không để load giá trị mặc định cho userLogin
if(localStorage.getItem(USER_LOGIN)) {
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
    userLogin : usLogin,
    userProfile: {}

}



export const quanLyNguoiDungReducer = (state=stateDefault,action) => {
    
    switch(action.type) {
        case 'LAY_THONG_TIN_NGUOI_DUNG': {
            state.userProfile  = action.userProfile;
            return {...state};
        }
        default : return state;
    }
}