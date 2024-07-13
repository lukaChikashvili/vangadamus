
import { Route, Routes } from "react-router-dom"
import StartPage from "./components/StartPage"
import CanvasPage from "./components/Canvas"
import Rules from "./components/Rules"




function App() {


  return (
    <>
 

  <Routes>
    <Route path="/" element = {<StartPage />}/>
    <Route path="/canvas" element = {<CanvasPage />}/>
    <Route path="/rules" element = {<Rules />}/>
  </Routes>


 </>
  )
}

export default App
