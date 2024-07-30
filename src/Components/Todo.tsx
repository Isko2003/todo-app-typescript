import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../Redux/todoSlice';

interface TodoProps{
  todoProps: TodoType
}

const Todo = ({ todoProps }: TodoProps) => {
  const { id, content } = todoProps;

  const dispatch = useDispatch();

  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);

  const handleRemoveTodo = () => {
    dispatch(deleteTodo(id));
  }

  const handleUpdateTodo = () => {
    const payload:TodoType = {
      id: id,
      content: newTodo
    }
    dispatch(updateTodo(payload));
    setEditable(false);
  }

  return (
    <div className='d-flex justify-content-between align-items-center todos'>
      <div style={{marginLeft: '5px'}}>
        {editable ? 
        <input 
        type="text" 
        value={newTodo} 
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setNewTodo(e.target.value)}
         />: 
         <div>{content}</div>}
      </div>
      <div className='icons-main'>
        <IoIosRemoveCircle className='todo-icons' onClick={handleRemoveTodo} />
        {editable ? <FaCheck className='todo-icons' onClick={handleUpdateTodo}/> : <FaRegEdit className='todo-icons' onClick={() => setEditable(true)}/>}

      </div>
    </div>
  )
}

export default Todo