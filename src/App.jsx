// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


//Writing jsx
const App = () => {
  let name = "World";
  let style = {
    backgroundColor:"green",
    paddingTop:"20px",
    color:"white",
    fontWeight:"bold",
  }
  return (
    <>
    <div>
      <h1 style={{backgroundColor:"red", paddingTop:"20px", color:"white"}}>Hello {name}</h1>
    </div>
    {/* <p>{4*2}</p>
    <p>4*2</p> */}
    <p style={style}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, et. Doloremque, consectetur! Corporis dolorem, unde nisi eaque earum explicabo est dolore debitis nostrum vitae maiores fuga fugiat! Aspernatur, consequuntur eius.
    </p>
    <p className="para">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis est delectus quisquam similique aliquam esse numquam odio suscipit hic reprehenderit. Quidem inventore, sequi sit exercitationem voluptas nulla minima temporibus cumque?
    </p>
    </>
  )
}

export default App


// (rafce) :-
// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App