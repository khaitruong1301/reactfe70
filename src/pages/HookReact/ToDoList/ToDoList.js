import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { getAllTaskAction, addTaskApiAction, doneTaskAction, rejectTaskAction, deleteTaskAction } from '../../../redux/actions/toDoListActions';

export default function ToDoList() {
    const [task, setTask] = useState({ taskName: '', status: false })
    // const [arrTask, setArrTask] = useState([]);
    const { arrTask } = useSelector(rootReducer => rootReducer.toDoListReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        //dispatch 1 action là function 
        /*
            action có 2 loại:
            + Loại 1: {type:'TYPE_NAME',payload:data}
            + Loại 2: function
        */
        let action = getAllTaskAction();
        dispatch(action);

    }, [])
    console.log('task', task);
    const handleChangeInput = (e) => {
        let { value, name } = e.target;
        setTask({
            ...task,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // callapi
        //Khi gọi hàm addTaskApiAction => Hàm chưa gọi 
        const action = addTaskApiAction(task);
        dispatch(action);

        //Nếu làm theo cách bt
        //Gọi axios thêm
        //lấy dữ liệu về => dispatch lên reducer xử lý
        //Gọi axios getall
        // dispatch giá trị sau khi getAll cho reducer xử lý

    }

    return (
        <div className='container'>
            <div className='d-flex justify-content-center align-items-center mt-2'>
                <div>
                    <h3 className='text-center display-4'>To do list</h3>
                    <form onSubmit={handleSubmit} className="input-group mb-3">
                        <input onChange={handleChangeInput} name="taskName" type="text" className="form-control" placeholder="task name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button type="submit" className="input-group-button btn btn-success" id="basic-addon2">Add task</button>
                        </div>
                    </form>

                    <table className='table'>
                        <tbody>
                            {arrTask.filter(task => task.status === true && task.taskName.trim() !== '').map((task, index) => {
                                return <tr key={index}>
                                    <td>{task.taskName}</td>
                                    <td>
                                        <span className="badge badge-success">completed</span>
                                    </td>
                                    <td>
                                        <button className='btn btn-warning' onClick={()=>{
                                          const action = rejectTaskAction(task.taskName);
                                          dispatch(action);  
                                        }}>undo</button>
                                        <button className='btn btn-danger ml-2' onClick={()=>{
                                            const action = deleteTaskAction(task.taskName);
                                            dispatch(action)
                                        }}>delete</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            {arrTask.filter(task => task.status === false && task.taskName.trim() !== '').map((task, index) => {
                                return <tr key={index}>
                                    <td>{task.taskName}</td>
                                    <td>
                                        <span className="badge badge-danger">incompleted</span>
                                    </td>
                                    <td>
                                        <button className='btn btn-success' onClick={()=>{
                                            const action = doneTaskAction(task.taskName);
                                            dispatch(action);
                                        }}>done</button>

                                        <button className='btn btn-danger ml-2' onClick={()=>{
                                            const action = deleteTaskAction(task.taskName);
                                            dispatch(action)
                                        }}>delete</button>
                                    </td>
                                </tr>
                            })}

                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}
