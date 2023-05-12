import React, { useState } from 'react'

export default function AddTodo({ onAdd }) {
    const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value); 
    }
    const handleSubmit = (event) => {
        // 페이지가 리프레쉬 금지
        event.preventDefault();
        // 새로 submit된 todo
        onAdd({ id: '125', text, status: 'active' });
        // 입력칸 초기화
        setText('');
        // todo에 빈칸이 포함 제거
        if(text.trim().length === 0) {
            return;
        }
    } 
  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder='할 일을 입력하시오'
            value={text}
            onChange={handleChange}
        />
        <button>Add</button>
    </form>
  );
}
