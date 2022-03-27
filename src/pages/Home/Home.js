import React, { Component, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { layDanhSachPhimAction } from '../../redux/actions/quanLyPhimActions';
//load danh sách phim từ api về



export default function Home(props) {
  const {arrPhim} = useSelector(rootReducer => rootReducer.quanLyPhimReducer);
  const dispatch =  useDispatch();
  useEffect(()=>{
    const action = layDanhSachPhimAction();
    dispatch(action);

  },[]);

  const renderPhim = () => {
    return arrPhim.map((phim,index)=> {
      return <div className='col-3 mt-2' key={index}>
        <div className='card'>
          <img src={phim.hinhAnh} alt="..." className="w-100" height={300} />
          <div className="card-body">
            <h3 style={{height:30,fontSize:15}}>{phim.tenPhim}</h3>
            <p style={{height:100}}>{phim.moTa.length > 100 ? phim.moTa.substr(0,100) +'...' : phim.moTa}</p>
            <button className='btn btn-success'>Đặt vé</button>
          </div>
        </div>
      </div>
    })
  }
  console.log('arr',arrPhim);
  return (
    <div className='container'> 
        <h3 className='text-center display-4'>Danh sách phim</h3>
        <div className='row'>
          {renderPhim()}
        </div>

    </div>
  )
}

