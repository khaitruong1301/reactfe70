import React, {useState,useCallback} from 'react'
import ChildComponent from './ChildComponent';


export default function ParentComponent() {

  const [number,setNumber] = useState(1); 
  const [like,setLike] = useState(1); 


  const tangSoLuong = () => {
    setNumber(number + 1);
  }

  const usCallBackTangSoLuong = useCallback(tangSoLuong,[number]);
  return (
    <div className='container'>
      <h3>Demo useCallback</h3>
      <p>number: {number}</p>
      {/* <button className='btn btn-success' onClick={()=>{ 
        setNumber(number+1);
      }}>+</button> */}
      <hr />
      <p>like: {like}</p>
      <button className='btn btn-danger' onClick={()=> {
        setLike(like + 1)
      }}>Like</button>
      <hr />
      <ChildComponent number={number} tangSoLuong={usCallBackTangSoLuong}/>
    </div>
  )
}
