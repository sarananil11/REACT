import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletetodo, toggletodo } from '../Store/actions';

const TodoList = () => {
    const todos = useSelector((state)=>state.todos);
    const dispatch = useDispatch();
  return (
   <ul>
    {todos.map((todo)=>(
        <li key={todo.id} style={{textDecoration:todo.completed ?
            'line-through' : 'none'
        }}>
            <span>{todo.text}</span>
            <button onClick={()=>dispatch(toggletodo(todo.id))}>
                {todo.completed ? 'undo':'complete'}
            </button>
            <button onClick={()=> dispatch(deletetodo(todo.id))}>Delete</button>
        </li>
    ))}
   </ul>
  );
};

export default TodoList
