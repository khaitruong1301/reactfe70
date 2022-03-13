import { THEM_NGUOI_DUNG } from "./types/baiTapQuanLyNguoiDungType"



export const themNguoiDungAction = (nguoiDung) =>{

    //Xử rất nhiều mới ra được object
    
    return {
        type:THEM_NGUOI_DUNG,
        // nguoiDung:nguoiDung
        nguoiDung
    }
}