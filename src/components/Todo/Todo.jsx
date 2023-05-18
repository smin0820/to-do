import React from 'react'
import { BsTrashFill } from 'react-icons/bs'
import styles from './Todo.module.css'

export default function Todo({ todo, onUpdate, onDelete }) {
    const { id, text, status } = todo;
    const handleChange = (event) => {
        const status = event.target.checked ? 'completed' : 'active';
        onUpdate({...todo, status})
    }
    const handleDelete = () => {
        onDelete(todo);
    }
  return (
    <li className={styles.todo}>
        <input className={styles.checkbox}
            type="checkbox" 
            id={id} 
            checked={status === 'completed'}
            onChange={handleChange}
        /> 
        <label htmlFor={id} className={styles.text}>{text}</label>
        <button onClick={handleDelete} className={styles.button}><BsTrashFill /></button>
    </li>
  );
}
