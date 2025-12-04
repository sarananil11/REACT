export const add_todo = 'add_todo';
export const toggle_todo = 'toggle_todo';
export const delete_todo = 'delete_todo';

export const addTodo = (todo) =>({
    type:add_todo,
    payload:todo,
});

export const toggletodo = (id) =>({
    type:toggle_todo,
    payload:id,
});

export const deletetodo = (id) =>({
    type:delete_todo,
    payload:id,
});

