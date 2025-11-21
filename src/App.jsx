
// import Calling_function from './embedding-expressions/Calling_function'
// import Conditional from './embedding-expressions/Conditional'
// import Reandering_List from './embedding-expressions/Reandering_List'
// import Welcome from './embedding-expressions/Welcome'

// import Parent from "./functional-components/Hooks/useCallBack-hook/Parent";
import UseMemo from "./functional-components/Hooks/UseMemo-Hook/UseMemo";

// import Counter from "./functional-components/Hooks/UseReducer-hook/Counter";

// import UseLayoutEffect from "./functional-components/Hooks/UseLayoutEffect/UseLayoutEffect";

// import { Route, Routes } from "react-router-dom";
// import ProductPage from "./Design/dynamic-routing-RW-eg/ProductPage";
// import ProductDetails from "./Design/dynamic-routing-RW-eg/ProductDetails";



// import Player from "./functional-components/Hooks/UseRef-Hook/Player";

// import AxiosDelete from "./Axios/AxiosDelete";

// import AxiosPut from "./Axios/AxiosPut";

// import AxiosPost from "./Axios/AxiosPost";

// import AxiosGet from "./Axios/AxiosGet";

// import Form from "./form/Form";
// import Crud from "./local-storage/Crud";
// import Work from "./local-storage/Work-1";

// import SimpleForm from "./form/SimpleForm";

// import RealWorld from "./react-keys/RealWorld";

// import Items from "./react-keys/items";

// import { Route, Routes } from "react-router-dom";
// import Navbar from "./nested-routing/Navbar";
// import Service from "./nested-routing/pages/services/Service";
// import WebDev from "./nested-routing/pages/services/WebDev";
// import AppDev from "./nested-routing/pages/services/AppDev";
// import Design from "./nested-routing/pages/services/Design";

// import { AiFillProduct } from "react-icons/ai";
// import { Route, Routes } from "react-router-dom";
// import ProductDetailPage from "./dynamic-routing/ProductDetailPage";
// import Product from "./dynamic-routing/Product";

// import { Link, Route, Routes } from "react-router-dom";
// import Home from "./react-router-dom/Home";
// import About from "./react-router-dom/About";

// import Home from "./functional-components/Hooks/UseContext-hook/dark&light-mode/Home"
// import { ThemeProvider } from "./functional-components/Hooks/UseContext-hook/dark&light-mode/ThemeContext"
// import { UserApiProvider } from "./functional-components/Hooks/UseContext-hook/dark&light-mode/user-list/UserApiContext"
// import UserList from "./functional-components/Hooks/UseContext-hook/dark&light-mode/user-list/UserList"
// import AddTodo from "./functional-components/Hooks/UseContext-hook/todo-list/AddTodo"
// import { TodoProvider } from "./functional-components/Hooks/UseContext-hook/todo-list/TodoContext"
// import TodoList from "./functional-components/Hooks/UseContext-hook/todo-list/TodoList"

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


      {/* -------------------------------useRef Hook----------------------------- */}

      {/* <Player/> */}

      {/* ------------------------useLayouteffect hook----------------------- */}
      {/* <UseLayoutEffect/> */}




      {/* --------------------useReducer Hook-------------------------------- */}
      {/* <Counter/> */}

      {/* ------------------------useCallBack Hook --------------------- */}
      {/* <Parent/> */}

      {/* ---------------------------useMemo- Hook ------------------------------ */}
      <UseMemo/>




      {/*--------------usecontext hook------------*/}
      {/* <ThemeProvider>
    <Home/>
  </ThemeProvider> */}

      {/* <UserApiProvider>
    <UserList/>
  </UserApiProvider> */}

      {/* <TodoProvider>
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
          <h2>📝 Todo App</h2>
          <AddTodo />
          <TodoList />
        </div>
      </TodoProvider> */}


      {/*---------react - router - dom ---------------*/}


      {/* 1. -------basic--routing---------- */}

      {/* <div>
        <nav>
          <Link to='/'>Home</Link> <br />
          <Link to='/about'>About</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />


      </Routes> */}


      {/*2.---------Dynamic Routing------------ */}

      {/* <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/products/:id" element = {<ProductDetailPage/>}/>
      </Routes> */}


      {/*3.------------Nested - Routing----------- */}
      {/* <Navbar>
          <div className="container-app"></div>
          <Routes>
            <Route path="/services" element={<Service/>} />
            <Route path="/web-development" element={<WebDev/>} />
            <Route path="/app-development" element={<AppDev/>} />
            <Route path="/design" element={<Design/>} />
          </Routes>
        </Navbar> */}


      {/* -------------------------react-Keys------------------------ */}

      {/* <Items/> */}
      {/* <RealWorld/> */}


      {/* --------------------------form----------------------------- */}

      {/* <SimpleForm/> */}
      {/* <Form/> */}



      {/* --------------------Local Storage ---------------------- */}

      {/* <Crud/> */}
      {/* <Work/> */}

      {/* -----------------------------AXIOS--------------------------- */}
      {/* <AxiosGet/> */}
      {/* <AxiosPost/> */}
      {/* <AxiosPut/> */}
      {/* <AxiosDelete/> */}


      {/* --------------------Design------------------------------- */}

      {/* <ProductPage/> */}
      {/* <Routes>
        <Route path="/" element={<ProductPage />}
        />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes> */}
    </>



  );
};

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


