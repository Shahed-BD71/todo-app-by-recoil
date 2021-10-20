import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { TodoContentState } from '../recoil/TodoState';
import { TodoContent } from '../types.d';
import { nanoid } from "nanoid";

const AddTodo = () => {
    const [todo, setTodo] = useState<Omit<TodoContent, 'id'>>
    ({ description: "", title: "" });

    const handleTodoChange:ChangeEventHandler<HTMLInputElement> = (e) => {
        setTodo(prev => ({ ...prev, [e.target.id]: e.target.value}));
    }
    const setContent = useSetRecoilState(TodoContentState)
    
    const handleAddTodo:FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        setContent(todos => [...todos, { ...todo, id: nanoid() }]
        );
    }

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <input placeholder='Title' id='title' onChange={handleTodoChange} value={todo.title} required></input>
                <input placeholder='Description' id='description' onChange={handleTodoChange} value={todo.description}></input>
                <button type='submit' disabled={!todo.title}>Add Now</button>
            </form>
        </div>
    );
};

export default AddTodo;