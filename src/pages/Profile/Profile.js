import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { layThongTinNguoiDung } from '../../redux/actions/quanLyNguoiDungAction';
import { ACCESSTOKEN } from '../../util/setting';

export default function Profile(props) {
    const { userProfile } = useSelector(rootReducer => rootReducer.quanLyNguoiDungReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        //Gọi api lấy thông tin người dùng để load lên redux
        const action = layThongTinNguoiDung();
        dispatch(action);
    }, [])

    console.log('userProfile', userProfile)
    //trang nay sẽ hiển thị thông tin của người đăng nhập

    if(!localStorage.getItem(ACCESSTOKEN)) {
        alert('Yêu cầu đăng nhập tài khoản !');
        return <Redirect to='/login' />
    }

    return (
        <div className='container'>
           <p> Tài khoản: {userProfile.taiKhoan}</p>
           <p>Họ tên: {userProfile.hoTen}</p> 
           <p>Email: {userProfile.email}</p>
           <p> Số điện thoại: {userProfile.soDT}</p>
        </div>
    )
}
