
// import Calling_function from './embedding-expressions/Calling_function'
// import Conditional from './embedding-expressions/Conditional'
// import Reandering_List from './embedding-expressions/Reandering_List'
// import Welcome from './embedding-expressions/Welcome'

// import Home from "./functional-components/Hooks/UseContext-hook/dark&light-mode/Home"
// import { ThemeProvider } from "./functional-components/Hooks/UseContext-hook/dark&light-mode/ThemeContext"
// import { UserApiProvider } from "./functional-components/Hooks/UseContext-hook/dark&light-mode/user-list/UserApiContext"
// import UserList from "./functional-components/Hooks/UseContext-hook/dark&light-mode/user-list/UserList"
import AddTodo from "./functional-components/Hooks/UseContext-hook/todo-list/AddTodo"
import { TodoProvider } from "./functional-components/Hooks/UseContext-hook/todo-list/TodoContext"
import TodoList from "./functional-components/Hooks/UseContext-hook/todo-list/TodoList"

// import ToggleButton from "./functional-components/Hooks/UseState/ToggleButton"

// import ProfileForm from "./functional-components/Hooks/UseState/ProfileForm"

// import UseState from "./functional-components/Hooks/UseEffect-Hook/UseState"

// import UserList from "./functional-components/Hooks/UseEffect-Hook/UserList"

// import Timer from "./functional-components/Hooks/UseEffect-Hook/Timer"

// import Props from "./functional-components/Props"

// import State from "./functional-components/State"

// import Basic from "./functional-components/Basic"

const App = () => {
  return (
    <>
      {/* -------------------EmbeddingExpression-----------------*/}
      {/* <Welcome/> */}
      {/* <Calling_function/> */}
      {/* <Conditional/> */}
      {/* <Reandering_List/> */}


      {/*-------------functional Components-----------------*/}

      {/* <Basic/> */}
      {/* <State/> */}
      {/* <Props/> */}
      {/* <Timer/> */}
      {/* <UserList/> */}
      {/* <UseState/> */}
      {/* <ProfileForm/> */}
      {/* <ToggleButton/> */}



      {/*--------------usecontext hook------------*/}
      {/* <ThemeProvider>
    <Home/>
  </ThemeProvider> */}

      {/* <UserApiProvider>
    <UserList/>
  </UserApiProvider> */}

      <TodoProvider>
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
          <h2>📝 Todo App</h2>
          <AddTodo />
          <TodoList />
        </div>
      </TodoProvider>

    </>


  );
}

export default App


// import React, { Component } from 'react'
// import UnMounting from './class-components/life-cycle-methods/UnMounting'
// import Timer from './class-components/life-cycle-methods/Timer'
// import ButtonUnMount from './class-components/life-cycle-methods/ButtonUnmount'
// import Should_update from './class-components/life-cycle-methods/Should_update'
// import Updating from './class-components/life-cycle-methods/Updating'
// import Mounting from './class-components/life-cycle-methods/Mounting'
// import Basic from './class-components/Basic'
// import UsingProps from './class-components/UsingProps'
// import Counter from './class-components/Counter'
// import Counter_homework from './class-components/Counter_homework'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* ------------------Class components------------*/}
//         {/* <Basic/> */}
//         {/* <UsingProps name = "Saran"/> */}
//         {/* <Counter/> */}
//         {/* <Counter_homework/> */}
//         {/* <Mounting/> */}
//         {/* <Updating/> */}
//         <Should_update/>
//         {/* <UnMounting/> */}
//         {/* <Timer/> */}
//         {/* <ButtonUnMount/> */}

//       </div>
//     )
//   }
// }


