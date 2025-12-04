import { add_todo,toggle_todo,delete_todo } from "./actions";

const initialState = {
    todos:[],
};

const todoReducer = (state = initialState,action) =>{
    switch (action.type){
        case add_todo:
            return{
                ...state,
                todos:[...state.todos , {id:Date.now(),text:action.payload,completed:false}],
            };
        case toggle_todo:
            return{
                ...state,
                todos:state.todos.map((todo) =>
                    todo.id === action.payload ? {...todo, completed:!todo.completed}:todo),
            };

        case delete_todo:
            return{
                ...state,
                todos: state.todos.filter((todo)=>
                todo.id !==action.payload),
            };
            default:
                return state;
    }
};
export default todoReducer;