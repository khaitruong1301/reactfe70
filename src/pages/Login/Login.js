import React, { Component } from 'react'
import {connect} from 'react-redux'
import { dangNhapAction } from '../../redux/actions/quanLyNguoiDungAction'
class Login extends Component {
  
  state = {
    taiKhoan: '',
    matKhau: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    //Sự kiện cản reload browser
    e.preventDefault();
    //Gọi hàm action truyền vào dữ liệu đăng nhập
    const action = dangNhapAction(this.state);
    //tốn khoảng thời gian api kiểm tra
    this.props.dispatch(action);

    //this.props.history.push

  }
  render() {
    return (
      <form className='container' onSubmit={this.handleSubmit}>
        <h3>Đăng nhập</h3>
        <div className='form-group'>
          <p>Tài khoản</p>
          <input className='form-control' name="taiKhoan" onChange={this.handleChange} />
        </div>
        <div className='form-group'>
          <p>Mật khẩu</p>
          <input className='form-control' name="matKhau" onChange={this.handleChange} />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-success'>Đăng nhập </button>
        </div>
      </form>
    )
  }
}



export default connect () (Login)