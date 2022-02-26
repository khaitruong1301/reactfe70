import React, { Component } from 'react'

export default class SanPhamProps extends Component {

    
    render() {
        let {sanPham,xemChiTiet} = this.props;
        return (
            <div className='card'>
                <img src={sanPham.hinhAnh} height={300} alt='...' />
                <div className='card-body'>
                    <p>{sanPham.tenSP}</p>
                    <p>{sanPham.giaBan}</p>
                    <button className='btn btn-success' onClick={() => {
                        this.props.xemChiTiet(sanPham);
                        // xemChiTiet(sanPham)
                    }}>Xem chi tiết</button>
                </div>
            </div>
        )
    }
}
