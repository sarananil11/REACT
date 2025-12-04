import React from 'react'
import { Provider } from 'react-redux'
import store from '../Store/store'
import AddTodo from '../redux-todo/AddTodo'
import TodoList from './TodoList'

function ReduxTodo() {
  return (
    <div className='App'>
      <Provider store={store}>
        <h1>To-Do-List</h1>
        <AddTodo />
        <TodoList />
      </Provider>
    </div>
  )
}

export default ReduxTodo
