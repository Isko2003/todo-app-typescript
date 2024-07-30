import React, { useState } from 'react'
import Todo from './Todo'
import { useDispatch } from 'react-redux';
import { createTodo } from '../Redux/todoSlice';
import { TodoType } from '../types/Types';
const TodoCreate = () => {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>('');

  const handleCreate = () => {
    if (newTodo.trim().length == 0) {
      alert("todo giriniz!");
      return;
    }

    const payload:TodoType = {
      id: Math.floor(Math.random()*9999999999),
      content: newTodo
    }

    dispatch(createTodo(payload));
    setNewTodo('');
  }

  return (
    <div className='todo-wrapper'>
        <input 
          type="text" 
          placeholder='Create Todo...'
          value={newTodo}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
        />
        <button className='todo-button' onClick={handleCreate}>Create Todo</button>
    </div>
  )
}

export default TodoCreate