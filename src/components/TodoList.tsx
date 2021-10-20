import React from 'react';
import { useRecoilValue } from 'recoil';
import { TodoContentState } from '../recoil/TodoState';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todoList = useRecoilValue(TodoContentState)
    return (
        <div>
            {
              todoList.map(todo => <TodoItem {...todo} key={todo.id}></TodoItem>)   
            }
        </div>
    );
};

export default TodoList;