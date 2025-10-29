
// import Calling_function from './embedding-expressions/Calling_function'
// import Conditional from './embedding-expressions/Conditional'
// import Reandering_List from './embedding-expressions/Reandering_List'
// import Welcome from './embedding-expressions/Welcome'

// const App = () => {
//   return (
<>
  {/* -------------------EmbeddingExpression-----------------*/}
  {/* <Welcome/> */}
  {/* <Calling_function/> */}
  {/* <Conditional/> */}
  {/* <Reandering_List/> */}


</>


//   )
// }

// export default App


import React, { Component } from 'react'
// import Basic from './class-components/Basic'
// import UsingProps from './class-components/UsingProps'
import Counter from './class-components/Counter'
import Counter_homework from './class-components/Counter_homework'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* ------------------Class components------------*/}
        {/* <Basic/> */}
        {/* <UsingProps name = "Saran"/> */}
        {/* <Counter/> */}
        <Counter_homework/>

      </div>
    )
  }
}

