import React from 'react'
import { BsTrashFill } from 'react-icons/bs'

export default function Todo({ todo, onUpdate, onDelete }) {
    const { text, status } = todo;
    const handleChange = (event) => {
        const status = event.target.checked ? 'completed' : 'active';
        onUpdate({...todo, status})
    }
    const handleDelete = () => {
        onDelete(todo);
    }
  return (
    <li>
        <input 
            type="checkbox" 
            id='checkbox' 
            checked={status === 'completed'}
            onChange={handleChange}
        />
        <label htmlFor='checkbox'>{text}</label>
        <button onClick={handleDelete}><BsTrashFill /></button>
    </li>
  );
}
