import React, { useState } from 'react'
import { v4 as uuid4 } from 'uuid';
import styles from './AddTodo.module.css'

export default function AddTodo({ onAdd }) {
    const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value); 
    }
    const handleSubmit = (event) => {
        // 페이지가 리프레쉬 금지
        event.preventDefault();
        // todo에 빈칸이 포함 제거
        if(text.trim().length === 0) {
            return;
        }
        // 새로 submit된 todo
        onAdd({ id: uuid4(), text, status: 'active' });
        // 입력칸 초기화
        setText('');
    } 
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
        <input
            className={styles.input}
            type="text" 
            placeholder='할 일을 입력하시오'
            value={text}
            onChange={handleChange}
        />
        <button className={styles.button}>+</button>
    </form>
  );
}
