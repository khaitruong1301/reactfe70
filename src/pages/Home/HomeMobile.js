import React, { Component, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { layDanhSachPhimAction } from '../../redux/actions/quanLyPhimActions';
//load danh sách phim từ api về



export default function HomeMobile(props) {
    const { arrPhim } = useSelector(rootReducer => rootReducer.quanLyPhimReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        const action = layDanhSachPhimAction();
        dispatch(action);

    }, []);

    const renderPhim = () => {
        return arrPhim.map((phim, index) => {
            return <div className='mt-2' key={index}>
                <div className='card'>
                    <div className='card-header bg-dark text-white'>
                        {phim.tenPhim}
                    </div>
                    <div className='card-body d-flex'>
                        <img src={phim.hinhAnh} alt="..." height={100} className="w-full" />
                        <p className='ml-3' style={{ height: 75 }}>{phim.moTa.length > 100 ? phim.moTa.substr(0, 100) + '...' : ''}</p>
                    </div>
                    <div className='card-footer text-right'>
                        <button className='btn btn-success'>Đặt vé</button>
                    </div>
                </div>
            </div>
        })
    }
    console.log('arr', arrPhim);
    return (
        <div className='container'>
            <h3 className='text-center display-4'>Danh sách phim</h3>

            {renderPhim()}


        </div>
    )
}

