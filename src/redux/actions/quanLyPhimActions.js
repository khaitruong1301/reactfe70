import { http } from "../../util/setting"




export const layDanhSachPhimAction = () => {

    return async dispatch => {
        try {
            let result = await http.get('/api/quanlyphim/laydanhsachphim?maNhom=GP01');

            //sau khi lấy được dữ liệu phim dispatch lên reducer
            dispatch({
                type:'LAY_DANH_SACH_PHIM',
                arrPhim:result.data.content
            })

        }catch (err) {
            console.log({err})
        }
    }
}