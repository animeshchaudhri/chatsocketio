import { useState } from 'react'
import * as ReactDOM from "react-dom/client";
import './App.css'
import Home from "./Pages/Home.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App