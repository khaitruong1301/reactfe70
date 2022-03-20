import React,{useState} from 'react'
import Login from '../../Login/Login';
import Register from '../../Register/Register'
import ModalHOC from './ModalHOC';
import { useDispatch } from 'react-redux';

// const RegisterCom = new Register();
export default function DemoHOCModal(props) {

    const [component,setComponent] = useState(<Register />)
    const dispatch = useDispatch();
    return (
        <div className='container'>
            <h3 className='mt-5 display-4 text-center'>Demo hoc</h3>
            <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId" onClick={() => {
                const action = {
                    type:'OPEN_FORM',
                    component:<Register />,
                    handleSubmit: () => {
                        console.log('đăng ký submit');
                    }
                };
                dispatch(action);
            }}>
                Đăng ký
            </button>
            <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId" onClick={()=>{
                const action = {
                    type:'OPEN_FORM',
                    component:<Login />,
                    handleSubmit: () => {
                        console.log('đăng nhập submit');
                    }
                };
                dispatch(action);
            }}>
                Đăng nhập
            </button>

        </div>
    )
}
